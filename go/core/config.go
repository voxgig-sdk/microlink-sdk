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
						"short": "Page author",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "date",
						"short": "Publication date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Page description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image",
						"short": "Primary image data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lang",
						"short": "Page language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"short": "Site logo data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "palette",
						"short": "Color palette (when palette=true)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pdf",
						"short": "PDF data (when pdf=true)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publisher",
						"short": "Page publisher",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "screenshot",
						"short": "Screenshot data (when screenshot=true)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "technologies",
						"short": "Detected technologies (when technologies=true)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"short": "Page title",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"short": "Canonical URL",
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
								"segments": []any{},
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
								"parts": []any{},
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
