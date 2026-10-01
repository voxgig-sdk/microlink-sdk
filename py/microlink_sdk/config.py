# Microlink SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Microlink",
            "slug": "microlink",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.microlink.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_website_data": {},
            },
        },
        "entity": {
      "get_website_data": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Page author",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Publication date",
            "format": "date-time",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Page description",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$OBJECT`",
            "short": "Primary image data",
          },
          {
            "name": "lang",
            "title": "Lang",
            "type": "`$STRING`",
            "short": "Page language",
          },
          {
            "name": "logo",
            "title": "Logo",
            "type": "`$OBJECT`",
            "short": "Site logo data",
          },
          {
            "name": "palette",
            "title": "Palette",
            "type": "`$ARRAY`",
            "short": "Color palette (when palette=true)",
          },
          {
            "name": "pdf",
            "title": "Pdf",
            "type": "`$OBJECT`",
            "short": "PDF data (when pdf=true)",
          },
          {
            "name": "publisher",
            "title": "Publisher",
            "type": "`$STRING`",
            "short": "Page publisher",
          },
          {
            "name": "screenshot",
            "title": "Screenshot",
            "type": "`$OBJECT`",
            "short": "Screenshot data (when screenshot=true)",
          },
          {
            "name": "technologies",
            "title": "Technologies",
            "type": "`$ARRAY`",
            "short": "Detected technologies (when technologies=true)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Page title",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "Canonical URL",
            "format": "uri",
          },
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
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "adblock",
                      "orig": "adblock",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "animation",
                      "orig": "animations",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "audio",
                      "orig": "audio",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "click",
                      "orig": "click",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "color_scheme",
                      "orig": "colorScheme",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "data",
                      "orig": "data",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "device",
                      "orig": "device",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "embed",
                      "orig": "embed",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filename",
                      "orig": "filename",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "force",
                      "orig": "force",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "function",
                      "orig": "function",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "header",
                      "orig": "headers",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "iframe",
                      "orig": "iframe",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "insight",
                      "orig": "insights",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "javascript",
                      "orig": "javascript",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "lighthouse",
                      "orig": "lighthouse",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "media_type",
                      "orig": "mediaType",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "meta",
                      "orig": "meta",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "module",
                      "orig": "modules",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "palette",
                      "orig": "palette",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf",
                      "orig": "pdf",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_format",
                      "orig": "pdf.format",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_height",
                      "orig": "pdf.height",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_landscape",
                      "orig": "pdf.landscape",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_margin",
                      "orig": "pdf.margin",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_page_range",
                      "orig": "pdf.pageRanges",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_scale",
                      "orig": "pdf.scale",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "pdf_width",
                      "orig": "pdf.width",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "ping",
                      "orig": "ping",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "prerender",
                      "orig": "prerender",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "proxy",
                      "orig": "proxy",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "retry",
                      "orig": "retry",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot",
                      "orig": "screenshot",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_code_scheme",
                      "orig": "screenshot.codeScheme",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_element",
                      "orig": "screenshot.element",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_full_page",
                      "orig": "screenshot.fullPage",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_omit_background",
                      "orig": "screenshot.omitBackground",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_overlay",
                      "orig": "screenshot.overlay",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "screenshot_type",
                      "orig": "screenshot.type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "script",
                      "orig": "scripts",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "scroll",
                      "orig": "scroll",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "stale_ttl",
                      "orig": "staleTtl",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "style",
                      "orig": "styles",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "technology",
                      "orig": "technologies",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "timeout",
                      "orig": "timeout",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "ttl",
                      "orig": "ttl",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "url",
                      "orig": "url",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "https://github.com/microlinkhq",
                    },
                    {
                      "name": "video",
                      "orig": "video",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "viewport",
                      "orig": "viewport",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "wait_for_selector",
                      "orig": "waitForSelector",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "wait_for_timeout",
                      "orig": "waitForTimeout",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "wait_until",
                      "orig": "waitUntil",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
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
                    "wait_until",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
