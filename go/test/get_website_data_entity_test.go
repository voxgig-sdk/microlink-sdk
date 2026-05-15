package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/microlink-sdk"
	"github.com/voxgig-sdk/microlink-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestGetWebsiteDataEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetWebsiteData(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetWebsiteDataEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_website_dataBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_website_data." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MICROLINK_TEST_GET_WEBSITE_DATA_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getWebsiteDataRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_website_data", setup.data)))
		var getWebsiteDataRef01Data map[string]any
		if len(getWebsiteDataRef01DataRaw) > 0 {
			getWebsiteDataRef01Data = core.ToMapAny(getWebsiteDataRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getWebsiteDataRef01Data

		// LOAD
		getWebsiteDataRef01Ent := client.GetWebsiteData(nil)
		getWebsiteDataRef01MatchDt0 := map[string]any{}
		getWebsiteDataRef01DataDt0Loaded, err := getWebsiteDataRef01Ent.Load(getWebsiteDataRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if getWebsiteDataRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func get_website_dataBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_website_data", "GetWebsiteDataTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_website_data test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_website_data test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_website_data01", "get_website_data02", "get_website_data03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MICROLINK_TEST_GET_WEBSITE_DATA_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MICROLINK_TEST_GET_WEBSITE_DATA_ENTID": idmap,
		"MICROLINK_TEST_LIVE":      "FALSE",
		"MICROLINK_TEST_EXPLAIN":   "FALSE",
		"MICROLINK_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MICROLINK_TEST_GET_WEBSITE_DATA_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MICROLINK_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["MICROLINK_APIKEY"],
			},
			extra,
		})
		client = sdk.NewMicrolinkSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MICROLINK_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MICROLINK_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
