"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetWebsiteDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MICROLINK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MICROLINK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MicrolinkSDK.test();
        const ent = testsdk.GetWebsiteData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MICROLINK_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_website_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "Page author", "t": "`$STRING`", "key$": "author", "index$": 0 }, "date": { "a": true, "fo": "date-time", "h": "Date", "n": "date", "r": false, "sh": "Publication date", "t": "`$STRING`", "key$": "date", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Page description", "t": "`$STRING`", "key$": "description", "index$": 2 }, "image": { "a": true, "h": "Image", "n": "image", "r": false, "sh": "Primary image data", "t": "`$OBJECT`", "key$": "image", "index$": 3 }, "lang": { "a": true, "h": "Lang", "n": "lang", "r": false, "sh": "Page language", "t": "`$STRING`", "key$": "lang", "index$": 4 }, "logo": { "a": true, "h": "Logo", "n": "logo", "r": false, "sh": "Site logo data", "t": "`$OBJECT`", "key$": "logo", "index$": 5 }, "palette": { "a": true, "h": "Palette", "n": "palette", "r": false, "sh": "Color palette (when palette=true)", "t": "`$ARRAY`", "key$": "palette", "index$": 6 }, "pdf": { "a": true, "h": "Pdf", "n": "pdf", "r": false, "sh": "PDF data (when pdf=true)", "t": "`$OBJECT`", "key$": "pdf", "index$": 7 }, "publisher": { "a": true, "h": "Publisher", "n": "publisher", "r": false, "sh": "Page publisher", "t": "`$STRING`", "key$": "publisher", "index$": 8 }, "screenshot": { "a": true, "h": "Screenshot", "n": "screenshot", "r": false, "sh": "Screenshot data (when screenshot=true)", "t": "`$OBJECT`", "key$": "screenshot", "index$": 9 }, "technologies": { "a": true, "h": "Technologies", "n": "technologies", "r": false, "sh": "Detected technologies (when technologies=true)", "t": "`$ARRAY`", "key$": "technologies", "index$": 10 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Page title", "t": "`$STRING`", "key$": "title", "index$": 11 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "Canonical URL", "t": "`$STRING`", "key$": "url", "index$": 12 } }, "name": "get_website_data", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "adblock", "or": "adblock", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "animation", "or": "animations", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "audio", "or": "audio", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "click", "or": "click", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "color_scheme", "or": "colorScheme", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "device", "or": "device", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "embed", "or": "embed", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "filename", "or": "filename", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "force", "or": "force", "r": false, "t": "`$BOOLEAN`", "index$": 10 }, { "a": true, "k": "query", "n": "function", "or": "function", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "header", "or": "headers", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "iframe", "or": "iframe", "r": false, "t": "`$BOOLEAN`", "index$": 13 }, { "a": true, "k": "query", "n": "insight", "or": "insights", "r": false, "t": "`$BOOLEAN`", "index$": 14 }, { "a": true, "k": "query", "n": "javascript", "or": "javascript", "r": false, "t": "`$BOOLEAN`", "index$": 15 }, { "a": true, "k": "query", "n": "lighthouse", "or": "lighthouse", "r": false, "t": "`$BOOLEAN`", "index$": 16 }, { "a": true, "k": "query", "n": "media_type", "or": "mediaType", "r": false, "t": "`$STRING`", "index$": 17 }, { "a": true, "k": "query", "n": "meta", "or": "meta", "r": false, "t": "`$BOOLEAN`", "index$": 18 }, { "a": true, "k": "query", "n": "module", "or": "modules", "r": false, "t": "`$BOOLEAN`", "index$": 19 }, { "a": true, "k": "query", "n": "palette", "or": "palette", "r": false, "t": "`$BOOLEAN`", "index$": 20 }, { "a": true, "k": "query", "n": "pdf", "or": "pdf", "r": false, "t": "`$BOOLEAN`", "index$": 21 }, { "a": true, "k": "query", "n": "pdf_format", "or": "pdf.format", "r": false, "t": "`$STRING`", "index$": 22 }, { "a": true, "k": "query", "n": "pdf_height", "or": "pdf.height", "r": false, "t": "`$STRING`", "index$": 23 }, { "a": true, "k": "query", "n": "pdf_landscape", "or": "pdf.landscape", "r": false, "t": "`$BOOLEAN`", "index$": 24 }, { "a": true, "k": "query", "n": "pdf_margin", "or": "pdf.margin", "r": false, "t": "`$STRING`", "index$": 25 }, { "a": true, "k": "query", "n": "pdf_page_range", "or": "pdf.pageRanges", "r": false, "t": "`$STRING`", "index$": 26 }, { "a": true, "k": "query", "n": "pdf_scale", "or": "pdf.scale", "r": false, "t": "`$NUMBER`", "index$": 27 }, { "a": true, "k": "query", "n": "pdf_width", "or": "pdf.width", "r": false, "t": "`$STRING`", "index$": 28 }, { "a": true, "k": "query", "n": "ping", "or": "ping", "r": false, "t": "`$BOOLEAN`", "index$": 29 }, { "a": true, "k": "query", "n": "prerender", "or": "prerender", "r": false, "t": "`$BOOLEAN`", "index$": 30 }, { "a": true, "k": "query", "n": "proxy", "or": "proxy", "r": false, "t": "`$STRING`", "index$": 31 }, { "a": true, "k": "query", "n": "retry", "or": "retry", "r": false, "t": "`$INTEGER`", "index$": 32 }, { "a": true, "k": "query", "n": "screenshot", "or": "screenshot", "r": false, "t": "`$BOOLEAN`", "index$": 33 }, { "a": true, "k": "query", "n": "screenshot_code_scheme", "or": "screenshot.codeScheme", "r": false, "t": "`$STRING`", "index$": 34 }, { "a": true, "k": "query", "n": "screenshot_element", "or": "screenshot.element", "r": false, "t": "`$STRING`", "index$": 35 }, { "a": true, "k": "query", "n": "screenshot_full_page", "or": "screenshot.fullPage", "r": false, "t": "`$BOOLEAN`", "index$": 36 }, { "a": true, "k": "query", "n": "screenshot_omit_background", "or": "screenshot.omitBackground", "r": false, "t": "`$BOOLEAN`", "index$": 37 }, { "a": true, "k": "query", "n": "screenshot_overlay", "or": "screenshot.overlay", "r": false, "t": "`$STRING`", "index$": 38 }, { "a": true, "k": "query", "n": "screenshot_type", "or": "screenshot.type", "r": false, "t": "`$STRING`", "index$": 39 }, { "a": true, "k": "query", "n": "script", "or": "scripts", "r": false, "t": "`$STRING`", "index$": 40 }, { "a": true, "k": "query", "n": "scroll", "or": "scroll", "r": false, "t": "`$STRING`", "index$": 41 }, { "a": true, "k": "query", "n": "stale_ttl", "or": "staleTtl", "r": false, "t": "`$INTEGER`", "index$": 42 }, { "a": true, "k": "query", "n": "style", "or": "styles", "r": false, "t": "`$STRING`", "index$": 43 }, { "a": true, "k": "query", "n": "technology", "or": "technologies", "r": false, "t": "`$BOOLEAN`", "index$": 44 }, { "a": true, "k": "query", "n": "timeout", "or": "timeout", "r": false, "t": "`$INTEGER`", "index$": 45 }, { "a": true, "k": "query", "n": "ttl", "or": "ttl", "r": false, "t": "`$INTEGER`", "index$": 46 }, { "a": true, "ex": "https://github.com/microlinkhq", "k": "query", "n": "url", "or": "url", "r": true, "t": "`$STRING`", "index$": 47 }, { "a": true, "k": "query", "n": "video", "or": "video", "r": false, "t": "`$BOOLEAN`", "index$": 48 }, { "a": true, "k": "query", "n": "viewport", "or": "viewport", "r": false, "t": "`$STRING`", "index$": 49 }, { "a": true, "k": "query", "n": "wait_for_selector", "or": "waitForSelector", "r": false, "t": "`$STRING`", "index$": 50 }, { "a": true, "k": "query", "n": "wait_for_timeout", "or": "waitForTimeout", "r": false, "t": "`$INTEGER`", "index$": 51 }, { "a": true, "k": "query", "n": "wait_until", "or": "waitUntil", "r": false, "t": "`$STRING`", "index$": 52 }] }, "k": "http", "m": "GET", "o": "/", "q": { "exist": ["adblock", "animation", "audio", "click", "color_scheme", "data", "device", "embed", "filename", "filter", "force", "function", "header", "iframe", "insight", "javascript", "lighthouse", "media_type", "meta", "module", "palette", "pdf", "pdf_format", "pdf_height", "pdf_landscape", "pdf_margin", "pdf_page_range", "pdf_scale", "pdf_width", "ping", "prerender", "proxy", "retry", "screenshot", "screenshot_code_scheme", "screenshot_element", "screenshot_full_page", "screenshot_omit_background", "screenshot_overlay", "screenshot_type", "script", "scroll", "stale_ttl", "style", "technology", "timeout", "ttl", "url", "video", "viewport", "wait_for_selector", "wait_for_timeout", "wait_until"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_website_data", "name__orig": "get_website_data", "Name": "GetWebsiteData", "name_": "get_website_data", "name-": "get-website-data", "NAME": "GET_WEBSITE_DATA", "index$": 0 }, { "active": true, "entity": "get_website_data", "key$": "BasicGetWebsiteDataFlow", "kind": "basic", "name": "BasicGetWebsiteDataFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "get_website_data_ref01", "srcdatavar": "get_website_data_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_website_data_ref01" } }], "index$": 0 }] }, 'GetWebsiteData', { "GET /": { "protocol": "http", "parameters": [{ "name": "url", "in": "query", "description": "The target URL to extract data from", "required": true, "schema": { "type": "string", "format": "uri", "example": "https://github.com/microlinkhq" }, "index$": 0 }, { "name": "adblock", "in": "query", "description": "Enable ad blocking", "required": false, "schema": { "type": "boolean" }, "index$": 1 }, { "name": "animations", "in": "query", "description": "Enable or disable CSS animations", "required": false, "schema": { "type": "boolean" }, "index$": 2 }, { "name": "audio", "in": "query", "description": "Enable audio extraction", "required": false, "schema": { "type": "boolean" }, "index$": 3 }, { "name": "click", "in": "query", "description": "CSS selector to click before capturing", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "colorScheme", "in": "query", "description": "Color scheme preference (light or dark)", "required": false, "schema": { "type": "string", "enum": ["light", "dark"] }, "index$": 5 }, { "name": "data", "in": "query", "description": "Custom data extraction rules", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "device", "in": "query", "description": "Device emulation type", "required": false, "schema": { "type": "string" }, "index$": 7 }, { "name": "embed", "in": "query", "description": "Enable embed mode for content", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "filename", "in": "query", "description": "Custom filename for downloaded resources", "required": false, "schema": { "type": "string" }, "index$": 9 }, { "name": "filter", "in": "query", "description": "Filter data fields in response", "required": false, "schema": { "type": "string" }, "index$": 10 }, { "name": "force", "in": "query", "description": "Force bypass cache", "required": false, "schema": { "type": "boolean" }, "index$": 11 }, { "name": "function", "in": "query", "description": "Custom JavaScript function to execute", "required": false, "schema": { "type": "string" }, "index$": 12 }, { "name": "headers", "in": "query", "description": "Custom HTTP headers", "required": false, "schema": { "type": "string" }, "index$": 13 }, { "name": "iframe", "in": "query", "description": "Enable iframe mode", "required": false, "schema": { "type": "boolean" }, "index$": 14 }, { "name": "insights", "in": "query", "description": "Enable insights analysis", "required": false, "schema": { "type": "boolean" }, "index$": 15 }, { "name": "lighthouse", "in": "query", "description": "Enable Lighthouse performance audit", "required": false, "schema": { "type": "boolean" }, "index$": 16 }, { "name": "technologies", "in": "query", "description": "Detect technologies used on the website", "required": false, "schema": { "type": "boolean" }, "index$": 17 }, { "name": "javascript", "in": "query", "description": "Enable or disable JavaScript execution", "required": false, "schema": { "type": "boolean" }, "index$": 18 }, { "name": "mediaType", "in": "query", "description": "Media type for rendering", "required": false, "schema": { "type": "string", "enum": ["screen", "print"] }, "index$": 19 }, { "name": "meta", "in": "query", "description": "Enable metadata extraction", "required": false, "schema": { "type": "boolean" }, "index$": 20 }, { "name": "modules", "in": "query", "description": "Enable ES modules support", "required": false, "schema": { "type": "boolean" }, "index$": 21 }, { "name": "palette", "in": "query", "description": "Extract color palette from images", "required": false, "schema": { "type": "boolean" }, "index$": 22 }, { "name": "pdf", "in": "query", "description": "Generate PDF from the page", "required": false, "schema": { "type": "boolean" }, "index$": 23 }, { "name": "pdf.format", "in": "query", "description": "PDF page format", "required": false, "schema": { "type": "string", "enum": ["Letter", "Legal", "Tabloid", "Ledger", "A0", "A1", "A2", "A3", "A4", "A5", "A6"] }, "index$": 24 }, { "name": "pdf.height", "in": "query", "description": "PDF page height", "required": false, "schema": { "type": "string" }, "index$": 25 }, { "name": "pdf.landscape", "in": "query", "description": "PDF landscape orientation", "required": false, "schema": { "type": "boolean" }, "index$": 26 }, { "name": "pdf.margin", "in": "query", "description": "PDF page margins", "required": false, "schema": { "type": "string" }, "index$": 27 }, { "name": "pdf.pageRanges", "in": "query", "description": "PDF page ranges to include", "required": false, "schema": { "type": "string" }, "index$": 28 }, { "name": "pdf.scale", "in": "query", "description": "PDF scale factor", "required": false, "schema": { "type": "number", "minimum": 0.1, "maximum": 2 }, "index$": 29 }, { "name": "pdf.width", "in": "query", "description": "PDF page width", "required": false, "schema": { "type": "string" }, "index$": 30 }, { "name": "ping", "in": "query", "description": "Health check endpoint", "required": false, "schema": { "type": "boolean" }, "index$": 31 }, { "name": "prerender", "in": "query", "description": "Enable prerender mode for client-side frameworks", "required": false, "schema": { "type": "boolean" }, "index$": 32 }, { "name": "proxy", "in": "query", "description": "Proxy configuration", "required": false, "schema": { "type": "string" }, "index$": 33 }, { "name": "retry", "in": "query", "description": "Number of retry attempts", "required": false, "schema": { "type": "integer", "minimum": 0 }, "index$": 34 }, { "name": "screenshot", "in": "query", "description": "Take a screenshot of the page", "required": false, "schema": { "type": "boolean" }, "index$": 35 }, { "name": "screenshot.codeScheme", "in": "query", "description": "Color scheme for code screenshots", "required": false, "schema": { "type": "string" }, "index$": 36 }, { "name": "screenshot.element", "in": "query", "description": "CSS selector for element screenshot", "required": false, "schema": { "type": "string" }, "index$": 37 }, { "name": "screenshot.fullPage", "in": "query", "description": "Capture full page screenshot", "required": false, "schema": { "type": "boolean" }, "index$": 38 }, { "name": "screenshot.overlay", "in": "query", "description": "Add overlay to screenshot", "required": false, "schema": { "type": "string" }, "index$": 39 }, { "name": "screenshot.omitBackground", "in": "query", "description": "Omit background in screenshot", "required": false, "schema": { "type": "boolean" }, "index$": 40 }, { "name": "screenshot.type", "in": "query", "description": "Screenshot image format", "required": false, "schema": { "type": "string", "enum": ["png", "jpeg", "webp"] }, "index$": 41 }, { "name": "scripts", "in": "query", "description": "Custom scripts to inject", "required": false, "schema": { "type": "string" }, "index$": 42 }, { "name": "scroll", "in": "query", "description": "Scroll configuration", "required": false, "schema": { "type": "string" }, "index$": 43 }, { "name": "styles", "in": "query", "description": "Custom CSS styles to inject", "required": false, "schema": { "type": "string" }, "index$": 44 }, { "name": "staleTtl", "in": "query", "description": "Stale cache time-to-live in milliseconds", "required": false, "schema": { "type": "integer" }, "index$": 45 }, { "name": "timeout", "in": "query", "description": "Request timeout in milliseconds", "required": false, "schema": { "type": "integer" }, "index$": 46 }, { "name": "ttl", "in": "query", "description": "Cache time-to-live in milliseconds", "required": false, "schema": { "type": "integer" }, "index$": 47 }, { "name": "video", "in": "query", "description": "Enable video extraction", "required": false, "schema": { "type": "boolean" }, "index$": 48 }, { "name": "viewport", "in": "query", "description": "Viewport dimensions", "required": false, "schema": { "type": "string" }, "index$": 49 }, { "name": "waitForSelector", "in": "query", "description": "CSS selector to wait for before capturing", "required": false, "schema": { "type": "string" }, "index$": 50 }, { "name": "waitForTimeout", "in": "query", "description": "Time to wait before capturing in milliseconds", "required": false, "schema": { "type": "integer" }, "index$": 51 }, { "name": "waitUntil", "in": "query", "description": "Wait until specific page load event", "required": false, "schema": { "type": "string", "enum": ["load", "domcontentloaded", "networkidle0", "networkidle2"] }, "index$": 52 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_website_data_ref01_data = Object.values(setup.data.existing.get_website_data)[0];
        // LOAD
        const get_website_data_ref01_ent = client.GetWebsiteData();
        const get_website_data_ref01_match_dt0 = {};
        const get_website_data_ref01_data_dt0 = (await get_website_data_ref01_ent.load(get_website_data_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != get_website_data_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_website_data/GetWebsiteDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MicrolinkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_website_data01', 'get_website_data02', 'get_website_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MICROLINK_TEST_GET_WEBSITE_DATA_ENTID': idmap,
        'MICROLINK_TEST_LIVE': 'FALSE',
        'MICROLINK_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MICROLINK_TEST_GET_WEBSITE_DATA_ENTID'];
    const live = 'TRUE' === env.MICROLINK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MICROLINK_TEST_GET_WEBSITE_DATA_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MicrolinkSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.MICROLINK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetWebsiteDataEntity.test.js.map