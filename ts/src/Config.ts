
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Author",
          "type": "`$STRING`",
          "short": "Page author"
        },
        {
          "name": "date",
          "title": "Date",
          "type": "`$STRING`",
          "short": "Publication date",
          "format": "date-time"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Page description"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$OBJECT`",
          "short": "Primary image data"
        },
        {
          "name": "lang",
          "title": "Lang",
          "type": "`$STRING`",
          "short": "Page language"
        },
        {
          "name": "logo",
          "title": "Logo",
          "type": "`$OBJECT`",
          "short": "Site logo data"
        },
        {
          "name": "palette",
          "title": "Palette",
          "type": "`$ARRAY`",
          "short": "Color palette (when palette=true)"
        },
        {
          "name": "pdf",
          "title": "Pdf",
          "type": "`$OBJECT`",
          "short": "PDF data (when pdf=true)"
        },
        {
          "name": "publisher",
          "title": "Publisher",
          "type": "`$STRING`",
          "short": "Page publisher"
        },
        {
          "name": "screenshot",
          "title": "Screenshot",
          "type": "`$OBJECT`",
          "short": "Screenshot data (when screenshot=true)"
        },
        {
          "name": "technologies",
          "title": "Technologies",
          "type": "`$ARRAY`",
          "short": "Detected technologies (when technologies=true)"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Page title"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "Canonical URL",
          "format": "uri"
        }
      ],
      "name": "get_website_data",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "segments": [],
              "parts": [],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "adblock",
                    "orig": "adblock",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "animation",
                    "orig": "animations",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "audio",
                    "orig": "audio",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "click",
                    "orig": "click",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "color_scheme",
                    "orig": "colorScheme",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "data",
                    "orig": "data",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "device",
                    "orig": "device",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "embed",
                    "orig": "embed",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "filename",
                    "orig": "filename",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "force",
                    "orig": "force",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "function",
                    "orig": "function",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "header",
                    "orig": "headers",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "iframe",
                    "orig": "iframe",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "insight",
                    "orig": "insights",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "javascript",
                    "orig": "javascript",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "lighthouse",
                    "orig": "lighthouse",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "media_type",
                    "orig": "mediaType",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "meta",
                    "orig": "meta",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "module",
                    "orig": "modules",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "palette",
                    "orig": "palette",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf",
                    "orig": "pdf",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_format",
                    "orig": "pdf.format",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_height",
                    "orig": "pdf.height",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_landscape",
                    "orig": "pdf.landscape",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_margin",
                    "orig": "pdf.margin",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_page_range",
                    "orig": "pdf.pageRanges",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_scale",
                    "orig": "pdf.scale",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "pdf_width",
                    "orig": "pdf.width",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "ping",
                    "orig": "ping",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "prerender",
                    "orig": "prerender",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "proxy",
                    "orig": "proxy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "retry",
                    "orig": "retry",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot",
                    "orig": "screenshot",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_code_scheme",
                    "orig": "screenshot.codeScheme",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_element",
                    "orig": "screenshot.element",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_full_page",
                    "orig": "screenshot.fullPage",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_omit_background",
                    "orig": "screenshot.omitBackground",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_overlay",
                    "orig": "screenshot.overlay",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "screenshot_type",
                    "orig": "screenshot.type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "script",
                    "orig": "scripts",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "scroll",
                    "orig": "scroll",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "stale_ttl",
                    "orig": "staleTtl",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "style",
                    "orig": "styles",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "technology",
                    "orig": "technologies",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "timeout",
                    "orig": "timeout",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "ttl",
                    "orig": "ttl",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "https://github.com/microlinkhq"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "viewport",
                    "orig": "viewport",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "wait_for_selector",
                    "orig": "waitForSelector",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "wait_for_timeout",
                    "orig": "waitForTimeout",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "wait_until",
                    "orig": "waitUntil",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
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
              }
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

