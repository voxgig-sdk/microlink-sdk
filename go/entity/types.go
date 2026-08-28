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
	Adblock *bool `json:"adblock,omitempty"`
	Animation *bool `json:"animation,omitempty"`
	Audio *bool `json:"audio,omitempty"`
	Click *string `json:"click,omitempty"`
	ColorScheme *string `json:"color_scheme,omitempty"`
	Data *string `json:"data,omitempty"`
	Device *string `json:"device,omitempty"`
	Embed *string `json:"embed,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Force *bool `json:"force,omitempty"`
	Function *string `json:"function,omitempty"`
	Header *string `json:"header,omitempty"`
	Iframe *bool `json:"iframe,omitempty"`
	Insight *bool `json:"insight,omitempty"`
	Javascript *bool `json:"javascript,omitempty"`
	Lighthouse *bool `json:"lighthouse,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Meta *bool `json:"meta,omitempty"`
	Module *bool `json:"module,omitempty"`
	Palette *bool `json:"palette,omitempty"`
	Pdf *bool `json:"pdf,omitempty"`
	PdfFormat *string `json:"pdf_format,omitempty"`
	PdfHeight *string `json:"pdf_height,omitempty"`
	PdfLandscape *bool `json:"pdf_landscape,omitempty"`
	PdfMargin *string `json:"pdf_margin,omitempty"`
	PdfPageRange *string `json:"pdf_page_range,omitempty"`
	PdfScale *float64 `json:"pdf_scale,omitempty"`
	PdfWidth *string `json:"pdf_width,omitempty"`
	Ping *bool `json:"ping,omitempty"`
	Prerender *bool `json:"prerender,omitempty"`
	Proxy *string `json:"proxy,omitempty"`
	Retry *int `json:"retry,omitempty"`
	Screenshot *bool `json:"screenshot,omitempty"`
	ScreenshotCodeScheme *string `json:"screenshot_code_scheme,omitempty"`
	ScreenshotElement *string `json:"screenshot_element,omitempty"`
	ScreenshotFullPage *bool `json:"screenshot_full_page,omitempty"`
	ScreenshotOmitBackground *bool `json:"screenshot_omit_background,omitempty"`
	ScreenshotOverlay *string `json:"screenshot_overlay,omitempty"`
	ScreenshotType *string `json:"screenshot_type,omitempty"`
	Script *string `json:"script,omitempty"`
	Scroll *string `json:"scroll,omitempty"`
	StaleTtl *int `json:"stale_ttl,omitempty"`
	Style *string `json:"style,omitempty"`
	Technology *bool `json:"technology,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Ttl *int `json:"ttl,omitempty"`
	Url string `json:"url"`
	Video *bool `json:"video,omitempty"`
	Viewport *string `json:"viewport,omitempty"`
	WaitForSelector *string `json:"wait_for_selector,omitempty"`
	WaitForTimeout *int `json:"wait_for_timeout,omitempty"`
	WaitUntil *string `json:"wait_until,omitempty"`
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
