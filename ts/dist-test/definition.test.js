"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "get_website_data",
        "accessor": "GetWebsiteData",
        "op": "load",
        "method": "GET",
        "path": "/",
        "args": [],
        "select": {
            "url": "https://github.com/microlinkhq",
            "adblock": "v1",
            "animation": "v1",
            "audio": "v1",
            "click": "v1",
            "color_scheme": "v1",
            "data": "v1",
            "device": "v1",
            "embed": "v1",
            "filename": "v1",
            "filter": "v1",
            "force": "v1",
            "function": "v1",
            "header": "v1",
            "iframe": "v1",
            "insight": "v1",
            "javascript": "v1",
            "lighthouse": "v1",
            "media_type": "v1",
            "meta": "v1",
            "module": "v1",
            "palette": "v1",
            "pdf": "v1",
            "pdf_format": "v1",
            "pdf_height": "v1",
            "pdf_landscape": "v1",
            "pdf_margin": "v1",
            "pdf_page_range": "v1",
            "pdf_scale": "v1",
            "pdf_width": "v1",
            "ping": "v1",
            "prerender": "v1",
            "proxy": "v1",
            "retry": "v1",
            "screenshot": "v1",
            "screenshot_code_scheme": "v1",
            "screenshot_element": "v1",
            "screenshot_full_page": "v1",
            "screenshot_omit_background": "v1",
            "screenshot_overlay": "v1",
            "screenshot_type": "v1",
            "script": "v1",
            "scroll": "v1",
            "stale_ttl": "v1",
            "style": "v1",
            "technology": "v1",
            "timeout": "v1",
            "ttl": "v1",
            "video": "v1",
            "viewport": "v1",
            "wait_for_selector": "v1",
            "wait_for_timeout": "v1",
            "wait_until": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "url",
            "adblock",
            "animations",
            "audio",
            "click",
            "colorScheme",
            "data",
            "device",
            "embed",
            "filename",
            "filter",
            "force",
            "function",
            "headers",
            "iframe",
            "insights",
            "lighthouse",
            "technologies",
            "javascript",
            "mediaType",
            "meta",
            "modules",
            "palette",
            "pdf",
            "pdf.format",
            "pdf.height",
            "pdf.landscape",
            "pdf.margin",
            "pdf.pageRanges",
            "pdf.scale",
            "pdf.width",
            "ping",
            "prerender",
            "proxy",
            "retry",
            "screenshot",
            "screenshot.codeScheme",
            "screenshot.element",
            "screenshot.fullPage",
            "screenshot.overlay",
            "screenshot.omitBackground",
            "screenshot.type",
            "scripts",
            "scroll",
            "styles",
            "staleTtl",
            "timeout",
            "ttl",
            "video",
            "viewport",
            "waitForSelector",
            "waitForTimeout",
            "waitUntil"
        ],
        "queryArgs": [
            {
                "name": "adblock",
                "wire": "adblock"
            },
            {
                "name": "animation",
                "wire": "animations"
            },
            {
                "name": "audio",
                "wire": "audio"
            },
            {
                "name": "click",
                "wire": "click"
            },
            {
                "name": "color_scheme",
                "wire": "colorScheme"
            },
            {
                "name": "data",
                "wire": "data"
            },
            {
                "name": "device",
                "wire": "device"
            },
            {
                "name": "embed",
                "wire": "embed"
            },
            {
                "name": "filename",
                "wire": "filename"
            },
            {
                "name": "filter",
                "wire": "filter"
            },
            {
                "name": "force",
                "wire": "force"
            },
            {
                "name": "function",
                "wire": "function"
            },
            {
                "name": "header",
                "wire": "headers"
            },
            {
                "name": "iframe",
                "wire": "iframe"
            },
            {
                "name": "insight",
                "wire": "insights"
            },
            {
                "name": "javascript",
                "wire": "javascript"
            },
            {
                "name": "lighthouse",
                "wire": "lighthouse"
            },
            {
                "name": "media_type",
                "wire": "mediaType"
            },
            {
                "name": "meta",
                "wire": "meta"
            },
            {
                "name": "module",
                "wire": "modules"
            },
            {
                "name": "palette",
                "wire": "palette"
            },
            {
                "name": "pdf",
                "wire": "pdf"
            },
            {
                "name": "pdf_format",
                "wire": "pdf.format"
            },
            {
                "name": "pdf_height",
                "wire": "pdf.height"
            },
            {
                "name": "pdf_landscape",
                "wire": "pdf.landscape"
            },
            {
                "name": "pdf_margin",
                "wire": "pdf.margin"
            },
            {
                "name": "pdf_page_range",
                "wire": "pdf.pageRanges"
            },
            {
                "name": "pdf_scale",
                "wire": "pdf.scale"
            },
            {
                "name": "pdf_width",
                "wire": "pdf.width"
            },
            {
                "name": "ping",
                "wire": "ping"
            },
            {
                "name": "prerender",
                "wire": "prerender"
            },
            {
                "name": "proxy",
                "wire": "proxy"
            },
            {
                "name": "retry",
                "wire": "retry"
            },
            {
                "name": "screenshot",
                "wire": "screenshot"
            },
            {
                "name": "screenshot_code_scheme",
                "wire": "screenshot.codeScheme"
            },
            {
                "name": "screenshot_element",
                "wire": "screenshot.element"
            },
            {
                "name": "screenshot_full_page",
                "wire": "screenshot.fullPage"
            },
            {
                "name": "screenshot_omit_background",
                "wire": "screenshot.omitBackground"
            },
            {
                "name": "screenshot_overlay",
                "wire": "screenshot.overlay"
            },
            {
                "name": "screenshot_type",
                "wire": "screenshot.type"
            },
            {
                "name": "script",
                "wire": "scripts"
            },
            {
                "name": "scroll",
                "wire": "scroll"
            },
            {
                "name": "stale_ttl",
                "wire": "staleTtl"
            },
            {
                "name": "style",
                "wire": "styles"
            },
            {
                "name": "technology",
                "wire": "technologies"
            },
            {
                "name": "timeout",
                "wire": "timeout"
            },
            {
                "name": "ttl",
                "wire": "ttl"
            },
            {
                "name": "url",
                "wire": "url"
            },
            {
                "name": "video",
                "wire": "video"
            },
            {
                "name": "viewport",
                "wire": "viewport"
            },
            {
                "name": "wait_for_selector",
                "wire": "waitForSelector"
            },
            {
                "name": "wait_for_timeout",
                "wire": "waitForTimeout"
            },
            {
                "name": "wait_until",
                "wire": "waitUntil"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "data": {
                "title": "microlink.io",
                "description": "Turn websites into data. microlink.io has 34 repositories available. Follow their code on GitHub.",
                "lang": "en",
                "author": null,
                "publisher": "GitHub",
                "image": {
                    "url": "https://avatars0.githubusercontent.com/u/29799436?s=280&v=4",
                    "type": "png",
                    "size": 4118,
                    "height": 280,
                    "width": 280,
                    "size_pretty": "4.12 kB"
                },
                "date": "2020-09-22T09:33:36.000Z",
                "url": "https://github.com/microlinkhq",
                "logo": {
                    "url": "https://logo.clearbit.com/github.com",
                    "type": "png",
                    "size": 6313,
                    "height": 128,
                    "width": 128,
                    "size_pretty": "6.31 kB"
                }
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map