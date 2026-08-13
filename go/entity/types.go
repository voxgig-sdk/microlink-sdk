// Typed models for the Microlink SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/microlink-sdk/go/core"
)

// GetWebsiteData is the typed data model for the get_website_data entity.
type GetWebsiteData struct {
	Author *string `json:"author,omitempty"`
	Date *string `json:"date,omitempty"`
	Description *string `json:"description,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Logo *map[string]any `json:"logo,omitempty"`
	Palette *[]any `json:"palette,omitempty"`
	Pdf *map[string]any `json:"pdf,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Screenshot *map[string]any `json:"screenshot,omitempty"`
	Technologies *[]any `json:"technologies,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// GetWebsiteDataLoadMatch is the typed request payload for GetWebsiteData.LoadTyped.
type GetWebsiteDataLoadMatch struct {
	Author *string `json:"author,omitempty"`
	Date *string `json:"date,omitempty"`
	Description *string `json:"description,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Logo *map[string]any `json:"logo,omitempty"`
	Palette *[]any `json:"palette,omitempty"`
	Pdf *map[string]any `json:"pdf,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Screenshot *map[string]any `json:"screenshot,omitempty"`
	Technologies *[]any `json:"technologies,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
