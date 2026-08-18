package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Microlink",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.microlink.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_website_data": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_website_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lang",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "palette",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pdf",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publisher",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "screenshot",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "technologies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "get_website_data",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "adblock",
											"orig": "adblock",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "animation",
											"orig": "animation",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "audio",
											"orig": "audio",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "click",
											"orig": "click",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "color_scheme",
											"orig": "color_scheme",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "device",
											"orig": "device",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "embed",
											"orig": "embed",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filename",
											"orig": "filename",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "force",
											"orig": "force",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "function",
											"orig": "function",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "header",
											"orig": "header",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "iframe",
											"orig": "iframe",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "insight",
											"orig": "insight",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "javascript",
											"orig": "javascript",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "lighthouse",
											"orig": "lighthouse",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "meta",
											"orig": "meta",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "module",
											"orig": "module",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "palette",
											"orig": "palette",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf",
											"orig": "pdf",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_format",
											"orig": "pdf_format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_height",
											"orig": "pdf_height",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_landscape",
											"orig": "pdf_landscape",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_margin",
											"orig": "pdf_margin",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_page_range",
											"orig": "pdf_page_range",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_scale",
											"orig": "pdf_scale",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pdf_width",
											"orig": "pdf_width",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ping",
											"orig": "ping",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prerender",
											"orig": "prerender",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "proxy",
											"orig": "proxy",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "retry",
											"orig": "retry",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot",
											"orig": "screenshot",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_code_scheme",
											"orig": "screenshot_code_scheme",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_element",
											"orig": "screenshot_element",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_full_page",
											"orig": "screenshot_full_page",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_omit_background",
											"orig": "screenshot_omit_background",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_overlay",
											"orig": "screenshot_overlay",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "screenshot_type",
											"orig": "screenshot_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "script",
											"orig": "script",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "scroll",
											"orig": "scroll",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "stale_ttl",
											"orig": "stale_ttl",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "style",
											"orig": "style",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "technology",
											"orig": "technology",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "timeout",
											"orig": "timeout",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "ttl",
											"orig": "ttl",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "https://github.com/microlinkhq",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "video",
											"orig": "video",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "viewport",
											"orig": "viewport",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "wait_for_selector",
											"orig": "wait_for_selector",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "wait_for_timeout",
											"orig": "wait_for_timeout",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wait_until",
											"orig": "wait_until",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"parts": []any{},
								"select": map[string]any{
									"exist": []any{
										"adblock",
										"animation",
										"audio",
										"click",
										"color_scheme",
										"data",
										"device",
										"embed",
										"filename",
										"filter",
										"force",
										"function",
										"header",
										"iframe",
										"insight",
										"javascript",
										"lighthouse",
										"media_type",
										"meta",
										"module",
										"palette",
										"pdf",
										"pdf_format",
										"pdf_height",
										"pdf_landscape",
										"pdf_margin",
										"pdf_page_range",
										"pdf_scale",
										"pdf_width",
										"ping",
										"prerender",
										"proxy",
										"retry",
										"screenshot",
										"screenshot_code_scheme",
										"screenshot_element",
										"screenshot_full_page",
										"screenshot_omit_background",
										"screenshot_overlay",
										"screenshot_type",
										"script",
										"scroll",
										"stale_ttl",
										"style",
										"technology",
										"timeout",
										"ttl",
										"url",
										"video",
										"viewport",
										"wait_for_selector",
										"wait_for_timeout",
										"wait_until",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
