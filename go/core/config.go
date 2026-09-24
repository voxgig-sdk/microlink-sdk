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
			"slug": "microlink",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Author",
						"type": "`$STRING`",
						"short": "Page author",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "Publication date",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Page description",
					},
					map[string]any{
						"name": "image",
						"title": "Image",
						"type": "`$OBJECT`",
						"short": "Primary image data",
					},
					map[string]any{
						"name": "lang",
						"title": "Lang",
						"type": "`$STRING`",
						"short": "Page language",
					},
					map[string]any{
						"name": "logo",
						"title": "Logo",
						"type": "`$OBJECT`",
						"short": "Site logo data",
					},
					map[string]any{
						"name": "palette",
						"title": "Palette",
						"type": "`$ARRAY`",
						"short": "Color palette (when palette=true)",
					},
					map[string]any{
						"name": "pdf",
						"title": "Pdf",
						"type": "`$OBJECT`",
						"short": "PDF data (when pdf=true)",
					},
					map[string]any{
						"name": "publisher",
						"title": "Publisher",
						"type": "`$STRING`",
						"short": "Page publisher",
					},
					map[string]any{
						"name": "screenshot",
						"title": "Screenshot",
						"type": "`$OBJECT`",
						"short": "Screenshot data (when screenshot=true)",
					},
					map[string]any{
						"name": "technologies",
						"title": "Technologies",
						"type": "`$ARRAY`",
						"short": "Detected technologies (when technologies=true)",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Page title",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "Canonical URL",
						"format": "uri",
					},
				},
				"name": "get_website_data",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"parts": []any{},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "adblock",
											"orig": "adblock",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "animation",
											"orig": "animation",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "audio",
											"orig": "audio",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "click",
											"orig": "click",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "color_scheme",
											"orig": "color_scheme",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "data",
											"orig": "data",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "device",
											"orig": "device",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "embed",
											"orig": "embed",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filename",
											"orig": "filename",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "force",
											"orig": "force",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "function",
											"orig": "function",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "header",
											"orig": "header",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "iframe",
											"orig": "iframe",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "insight",
											"orig": "insight",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "javascript",
											"orig": "javascript",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "lighthouse",
											"orig": "lighthouse",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "meta",
											"orig": "meta",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "module",
											"orig": "module",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "palette",
											"orig": "palette",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf",
											"orig": "pdf",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_format",
											"orig": "pdf_format",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_height",
											"orig": "pdf_height",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_landscape",
											"orig": "pdf_landscape",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_margin",
											"orig": "pdf_margin",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_page_range",
											"orig": "pdf_page_range",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_scale",
											"orig": "pdf_scale",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "pdf_width",
											"orig": "pdf_width",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "ping",
											"orig": "ping",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prerender",
											"orig": "prerender",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "proxy",
											"orig": "proxy",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "retry",
											"orig": "retry",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot",
											"orig": "screenshot",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_code_scheme",
											"orig": "screenshot_code_scheme",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_element",
											"orig": "screenshot_element",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_full_page",
											"orig": "screenshot_full_page",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_omit_background",
											"orig": "screenshot_omit_background",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_overlay",
											"orig": "screenshot_overlay",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "screenshot_type",
											"orig": "screenshot_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "script",
											"orig": "script",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "scroll",
											"orig": "scroll",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "stale_ttl",
											"orig": "stale_ttl",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "style",
											"orig": "style",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "technology",
											"orig": "technology",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeout",
											"orig": "timeout",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "ttl",
											"orig": "ttl",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://github.com/microlinkhq",
										},
										map[string]any{
											"name": "video",
											"orig": "video",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "viewport",
											"orig": "viewport",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "wait_for_selector",
											"orig": "wait_for_selector",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "wait_for_timeout",
											"orig": "wait_for_timeout",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "wait_until",
											"orig": "wait_until",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
