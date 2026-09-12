
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Microlink',
        slug: "microlink",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.microlink.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_website_data: {
      },

    }
  }


  entity = {
    "get_website_data": {
      "fields": [
        {
          "name": "author",
          "short": "Page author",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "date",
          "short": "Publication date",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Page description",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "Primary image data",
          "type": "`$OBJECT`"
        },
        {
          "name": "lang",
          "short": "Page language",
          "type": "`$STRING`"
        },
        {
          "name": "logo",
          "short": "Site logo data",
          "type": "`$OBJECT`"
        },
        {
          "name": "palette",
          "short": "Color palette (when palette=true)",
          "type": "`$ARRAY`"
        },
        {
          "name": "pdf",
          "short": "PDF data (when pdf=true)",
          "type": "`$OBJECT`"
        },
        {
          "name": "publisher",
          "short": "Page publisher",
          "type": "`$STRING`"
        },
        {
          "name": "screenshot",
          "short": "Screenshot data (when screenshot=true)",
          "type": "`$OBJECT`"
        },
        {
          "name": "technologies",
          "short": "Detected technologies (when technologies=true)",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Page title",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "Canonical URL",
          "type": "`$STRING`"
        }
      ],
      "name": "get_website_data",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "adblock",
                    "orig": "adblock",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "animation",
                    "orig": "animation",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "audio",
                    "orig": "audio",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "click",
                    "orig": "click",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "color_scheme",
                    "orig": "color_scheme",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "data",
                    "orig": "data",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "device",
                    "orig": "device",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "embed",
                    "orig": "embed",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "filename",
                    "orig": "filename",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "force",
                    "orig": "force",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "function",
                    "orig": "function",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "header",
                    "orig": "header",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "iframe",
                    "orig": "iframe",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "insight",
                    "orig": "insight",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "javascript",
                    "orig": "javascript",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "lighthouse",
                    "orig": "lighthouse",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "media_type",
                    "orig": "media_type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "meta",
                    "orig": "meta",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "module",
                    "orig": "module",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "palette",
                    "orig": "palette",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf",
                    "orig": "pdf",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_format",
                    "orig": "pdf_format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_height",
                    "orig": "pdf_height",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_landscape",
                    "orig": "pdf_landscape",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_margin",
                    "orig": "pdf_margin",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_page_range",
                    "orig": "pdf_page_range",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_scale",
                    "orig": "pdf_scale",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pdf_width",
                    "orig": "pdf_width",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "ping",
                    "orig": "ping",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "prerender",
                    "orig": "prerender",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "proxy",
                    "orig": "proxy",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "retry",
                    "orig": "retry",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot",
                    "orig": "screenshot",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_code_scheme",
                    "orig": "screenshot_code_scheme",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_element",
                    "orig": "screenshot_element",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_full_page",
                    "orig": "screenshot_full_page",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_omit_background",
                    "orig": "screenshot_omit_background",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_overlay",
                    "orig": "screenshot_overlay",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "screenshot_type",
                    "orig": "screenshot_type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "script",
                    "orig": "script",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "scroll",
                    "orig": "scroll",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "stale_ttl",
                    "orig": "stale_ttl",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "style",
                    "orig": "style",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "technology",
                    "orig": "technology",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "timeout",
                    "orig": "timeout",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "ttl",
                    "orig": "ttl",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "https://github.com/microlinkhq",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "video",
                    "orig": "video",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "viewport",
                    "orig": "viewport",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "wait_for_selector",
                    "orig": "wait_for_selector",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "wait_for_timeout",
                    "orig": "wait_for_timeout",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "wait_until",
                    "orig": "wait_until",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "segments": [],
              "select": {
                "exist": [
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
                  "wait_until"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": []
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

