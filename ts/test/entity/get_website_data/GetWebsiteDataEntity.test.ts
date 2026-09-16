

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MicrolinkSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetWebsiteDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MICROLINK_TEST_LIVE=TRUE.
  afterEach(liveDelay('MICROLINK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MicrolinkSDK.test()
    const ent = testsdk.GetWebsiteData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MICROLINK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_website_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"short":"Page author","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"date","req":false,"short":"Publication date","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"Page description","type":"`$STRING`","index$":2},{"active":true,"name":"image","req":false,"short":"Primary image data","type":"`$OBJECT`","index$":3},{"active":true,"name":"lang","req":false,"short":"Page language","type":"`$STRING`","index$":4},{"active":true,"name":"logo","req":false,"short":"Site logo data","type":"`$OBJECT`","index$":5},{"active":true,"name":"palette","req":false,"short":"Color palette (when palette=true)","type":"`$ARRAY`","index$":6},{"active":true,"name":"pdf","req":false,"short":"PDF data (when pdf=true)","type":"`$OBJECT`","index$":7},{"active":true,"name":"publisher","req":false,"short":"Page publisher","type":"`$STRING`","index$":8},{"active":true,"name":"screenshot","req":false,"short":"Screenshot data (when screenshot=true)","type":"`$OBJECT`","index$":9},{"active":true,"name":"technologies","req":false,"short":"Detected technologies (when technologies=true)","type":"`$ARRAY`","index$":10},{"active":true,"name":"title","req":false,"short":"Page title","type":"`$STRING`","index$":11},{"active":true,"format":"uri","name":"url","req":false,"short":"Canonical URL","type":"`$STRING`","index$":12}],"name":"get_website_data","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"adblock","orig":"adblock","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"animation","orig":"animation","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"audio","orig":"audio","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"query","name":"click","orig":"click","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"color_scheme","orig":"color_scheme","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"device","orig":"device","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"embed","orig":"embed","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"filename","orig":"filename","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"force","orig":"force","reqd":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"kind":"query","name":"function","orig":"function","reqd":false,"type":"`$STRING`","index$":11},{"active":true,"kind":"query","name":"header","orig":"header","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"iframe","orig":"iframe","reqd":false,"type":"`$BOOLEAN`","index$":13},{"active":true,"kind":"query","name":"insight","orig":"insight","reqd":false,"type":"`$BOOLEAN`","index$":14},{"active":true,"kind":"query","name":"javascript","orig":"javascript","reqd":false,"type":"`$BOOLEAN`","index$":15},{"active":true,"kind":"query","name":"lighthouse","orig":"lighthouse","reqd":false,"type":"`$BOOLEAN`","index$":16},{"active":true,"kind":"query","name":"media_type","orig":"media_type","reqd":false,"type":"`$STRING`","index$":17},{"active":true,"kind":"query","name":"meta","orig":"meta","reqd":false,"type":"`$BOOLEAN`","index$":18},{"active":true,"kind":"query","name":"module","orig":"module","reqd":false,"type":"`$BOOLEAN`","index$":19},{"active":true,"kind":"query","name":"palette","orig":"palette","reqd":false,"type":"`$BOOLEAN`","index$":20},{"active":true,"kind":"query","name":"pdf","orig":"pdf","reqd":false,"type":"`$BOOLEAN`","index$":21},{"active":true,"kind":"query","name":"pdf_format","orig":"pdf_format","reqd":false,"type":"`$STRING`","index$":22},{"active":true,"kind":"query","name":"pdf_height","orig":"pdf_height","reqd":false,"type":"`$STRING`","index$":23},{"active":true,"kind":"query","name":"pdf_landscape","orig":"pdf_landscape","reqd":false,"type":"`$BOOLEAN`","index$":24},{"active":true,"kind":"query","name":"pdf_margin","orig":"pdf_margin","reqd":false,"type":"`$STRING`","index$":25},{"active":true,"kind":"query","name":"pdf_page_range","orig":"pdf_page_range","reqd":false,"type":"`$STRING`","index$":26},{"active":true,"kind":"query","name":"pdf_scale","orig":"pdf_scale","reqd":false,"type":"`$NUMBER`","index$":27},{"active":true,"kind":"query","name":"pdf_width","orig":"pdf_width","reqd":false,"type":"`$STRING`","index$":28},{"active":true,"kind":"query","name":"ping","orig":"ping","reqd":false,"type":"`$BOOLEAN`","index$":29},{"active":true,"kind":"query","name":"prerender","orig":"prerender","reqd":false,"type":"`$BOOLEAN`","index$":30},{"active":true,"kind":"query","name":"proxy","orig":"proxy","reqd":false,"type":"`$STRING`","index$":31},{"active":true,"kind":"query","name":"retry","orig":"retry","reqd":false,"type":"`$INTEGER`","index$":32},{"active":true,"kind":"query","name":"screenshot","orig":"screenshot","reqd":false,"type":"`$BOOLEAN`","index$":33},{"active":true,"kind":"query","name":"screenshot_code_scheme","orig":"screenshot_code_scheme","reqd":false,"type":"`$STRING`","index$":34},{"active":true,"kind":"query","name":"screenshot_element","orig":"screenshot_element","reqd":false,"type":"`$STRING`","index$":35},{"active":true,"kind":"query","name":"screenshot_full_page","orig":"screenshot_full_page","reqd":false,"type":"`$BOOLEAN`","index$":36},{"active":true,"kind":"query","name":"screenshot_omit_background","orig":"screenshot_omit_background","reqd":false,"type":"`$BOOLEAN`","index$":37},{"active":true,"kind":"query","name":"screenshot_overlay","orig":"screenshot_overlay","reqd":false,"type":"`$STRING`","index$":38},{"active":true,"kind":"query","name":"screenshot_type","orig":"screenshot_type","reqd":false,"type":"`$STRING`","index$":39},{"active":true,"kind":"query","name":"script","orig":"script","reqd":false,"type":"`$STRING`","index$":40},{"active":true,"kind":"query","name":"scroll","orig":"scroll","reqd":false,"type":"`$STRING`","index$":41},{"active":true,"kind":"query","name":"stale_ttl","orig":"stale_ttl","reqd":false,"type":"`$INTEGER`","index$":42},{"active":true,"kind":"query","name":"style","orig":"style","reqd":false,"type":"`$STRING`","index$":43},{"active":true,"kind":"query","name":"technology","orig":"technology","reqd":false,"type":"`$BOOLEAN`","index$":44},{"active":true,"kind":"query","name":"timeout","orig":"timeout","reqd":false,"type":"`$INTEGER`","index$":45},{"active":true,"kind":"query","name":"ttl","orig":"ttl","reqd":false,"type":"`$INTEGER`","index$":46},{"active":true,"example":"https://github.com/microlinkhq","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":47},{"active":true,"kind":"query","name":"video","orig":"video","reqd":false,"type":"`$BOOLEAN`","index$":48},{"active":true,"kind":"query","name":"viewport","orig":"viewport","reqd":false,"type":"`$STRING`","index$":49},{"active":true,"kind":"query","name":"wait_for_selector","orig":"wait_for_selector","reqd":false,"type":"`$STRING`","index$":50},{"active":true,"kind":"query","name":"wait_for_timeout","orig":"wait_for_timeout","reqd":false,"type":"`$INTEGER`","index$":51},{"active":true,"kind":"query","name":"wait_until","orig":"wait_until","reqd":false,"type":"`$STRING`","index$":52}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getWebsiteData\",\"parameters\":[{\"description\":\"The target URL to extract data from\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://github.com/microlinkhq\",\"format\":\"uri\",\"type\":\"string\"}},{\"description\":\"Enable ad blocking\",\"in\":\"query\",\"name\":\"adblock\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable or disable CSS animations\",\"in\":\"query\",\"name\":\"animations\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable audio extraction\",\"in\":\"query\",\"name\":\"audio\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"CSS selector to click before capturing\",\"in\":\"query\",\"name\":\"click\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Color scheme preference (light or dark)\",\"in\":\"query\",\"name\":\"colorScheme\",\"required\":false,\"schema\":{\"enum\":[\"light\",\"dark\"],\"type\":\"string\"}},{\"description\":\"Custom data extraction rules\",\"in\":\"query\",\"name\":\"data\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Device emulation type\",\"in\":\"query\",\"name\":\"device\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Enable embed mode for content\",\"in\":\"query\",\"name\":\"embed\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Custom filename for downloaded resources\",\"in\":\"query\",\"name\":\"filename\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter data fields in response\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Force bypass cache\",\"in\":\"query\",\"name\":\"force\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Custom JavaScript function to execute\",\"in\":\"query\",\"name\":\"function\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Custom HTTP headers\",\"in\":\"query\",\"name\":\"headers\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Enable iframe mode\",\"in\":\"query\",\"name\":\"iframe\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable insights analysis\",\"in\":\"query\",\"name\":\"insights\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable Lighthouse performance audit\",\"in\":\"query\",\"name\":\"lighthouse\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Detect technologies used on the website\",\"in\":\"query\",\"name\":\"technologies\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable or disable JavaScript execution\",\"in\":\"query\",\"name\":\"javascript\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Media type for rendering\",\"in\":\"query\",\"name\":\"mediaType\",\"required\":false,\"schema\":{\"enum\":[\"screen\",\"print\"],\"type\":\"string\"}},{\"description\":\"Enable metadata extraction\",\"in\":\"query\",\"name\":\"meta\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable ES modules support\",\"in\":\"query\",\"name\":\"modules\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Extract color palette from images\",\"in\":\"query\",\"name\":\"palette\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Generate PDF from the page\",\"in\":\"query\",\"name\":\"pdf\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"PDF page format\",\"in\":\"query\",\"name\":\"pdf.format\",\"required\":false,\"schema\":{\"enum\":[\"Letter\",\"Legal\",\"Tabloid\",\"Ledger\",\"A0\",\"A1\",\"A2\",\"A3\",\"A4\",\"A5\",\"A6\"],\"type\":\"string\"}},{\"description\":\"PDF page height\",\"in\":\"query\",\"name\":\"pdf.height\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"PDF landscape orientation\",\"in\":\"query\",\"name\":\"pdf.landscape\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"PDF page margins\",\"in\":\"query\",\"name\":\"pdf.margin\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"PDF page ranges to include\",\"in\":\"query\",\"name\":\"pdf.pageRanges\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"PDF scale factor\",\"in\":\"query\",\"name\":\"pdf.scale\",\"required\":false,\"schema\":{\"maximum\":2,\"minimum\":0.1,\"type\":\"number\"}},{\"description\":\"PDF page width\",\"in\":\"query\",\"name\":\"pdf.width\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Health check endpoint\",\"in\":\"query\",\"name\":\"ping\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Enable prerender mode for client-side frameworks\",\"in\":\"query\",\"name\":\"prerender\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Proxy configuration\",\"in\":\"query\",\"name\":\"proxy\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of retry attempts\",\"in\":\"query\",\"name\":\"retry\",\"required\":false,\"schema\":{\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Take a screenshot of the page\",\"in\":\"query\",\"name\":\"screenshot\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Color scheme for code screenshots\",\"in\":\"query\",\"name\":\"screenshot.codeScheme\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"CSS selector for element screenshot\",\"in\":\"query\",\"name\":\"screenshot.element\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Capture full page screenshot\",\"in\":\"query\",\"name\":\"screenshot.fullPage\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Add overlay to screenshot\",\"in\":\"query\",\"name\":\"screenshot.overlay\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Omit background in screenshot\",\"in\":\"query\",\"name\":\"screenshot.omitBackground\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Screenshot image format\",\"in\":\"query\",\"name\":\"screenshot.type\",\"required\":false,\"schema\":{\"enum\":[\"png\",\"jpeg\",\"webp\"],\"type\":\"string\"}},{\"description\":\"Custom scripts to inject\",\"in\":\"query\",\"name\":\"scripts\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Scroll configuration\",\"in\":\"query\",\"name\":\"scroll\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Custom CSS styles to inject\",\"in\":\"query\",\"name\":\"styles\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Stale cache time-to-live in milliseconds\",\"in\":\"query\",\"name\":\"staleTtl\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Request timeout in milliseconds\",\"in\":\"query\",\"name\":\"timeout\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Cache time-to-live in milliseconds\",\"in\":\"query\",\"name\":\"ttl\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Enable video extraction\",\"in\":\"query\",\"name\":\"video\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Viewport dimensions\",\"in\":\"query\",\"name\":\"viewport\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"CSS selector to wait for before capturing\",\"in\":\"query\",\"name\":\"waitForSelector\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Time to wait before capturing in milliseconds\",\"in\":\"query\",\"name\":\"waitForTimeout\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Wait until specific page load event\",\"in\":\"query\",\"name\":\"waitUntil\",\"required\":false,\"schema\":{\"enum\":[\"load\",\"domcontentloaded\",\"networkidle0\",\"networkidle2\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"value\":{\"data\":{\"author\":null,\"date\":\"2020-09-22T09:33:36.000Z\",\"description\":\"Turn websites into data. microlink.io has 34 repositories available. Follow their code on GitHub.\",\"image\":{\"height\":280,\"size\":4118,\"size_pretty\":\"4.12 kB\",\"type\":\"png\",\"url\":\"https://avatars0.githubusercontent.com/u/29799436?s=280&v=4\",\"width\":280},\"lang\":\"en\",\"logo\":{\"height\":128,\"size\":6313,\"size_pretty\":\"6.31 kB\",\"type\":\"png\",\"url\":\"https://logo.clearbit.com/github.com\",\"width\":128},\"publisher\":\"GitHub\",\"title\":\"microlink.io\",\"url\":\"https://github.com/microlinkhq\"},\"status\":\"success\"}}},\"schema\":{\"properties\":{\"data\":{\"description\":\"Extracted data from the target URL\",\"properties\":{\"author\":{\"description\":\"Page author\",\"nullable\":true,\"type\":\"string\"},\"date\":{\"description\":\"Publication date\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Page description\",\"type\":\"string\"},\"image\":{\"description\":\"Primary image data\",\"properties\":{\"height\":{\"type\":\"integer\"},\"size\":{\"type\":\"integer\"},\"size_pretty\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"},\"width\":{\"type\":\"integer\"}},\"type\":\"object\"},\"lang\":{\"description\":\"Page language\",\"type\":\"string\"},\"logo\":{\"description\":\"Site logo data\",\"properties\":{\"height\":{\"type\":\"integer\"},\"size\":{\"type\":\"integer\"},\"size_pretty\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"},\"width\":{\"type\":\"integer\"}},\"type\":\"object\"},\"palette\":{\"description\":\"Color palette (when palette=true)\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"pdf\":{\"description\":\"PDF data (when pdf=true)\",\"properties\":{\"size\":{\"type\":\"integer\"},\"size_pretty\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"publisher\":{\"description\":\"Page publisher\",\"type\":\"string\"},\"screenshot\":{\"description\":\"Screenshot data (when screenshot=true)\",\"properties\":{\"height\":{\"type\":\"integer\"},\"size\":{\"type\":\"integer\"},\"size_pretty\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"type\":\"string\"},\"width\":{\"type\":\"integer\"}},\"type\":\"object\"},\"technologies\":{\"description\":\"Detected technologies (when technologies=true)\",\"items\":{\"properties\":{\"categories\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"confidence\":{\"type\":\"integer\"},\"icon\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"},\"website\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Page title\",\"type\":\"string\"},\"url\":{\"description\":\"Canonical URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"Status of the API request\",\"enum\":[\"success\",\"error\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with extracted data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"enum\":[\"error\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Rate limit error message\",\"type\":\"string\"},\"status\":{\"enum\":[\"error\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"enum\":[\"error\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["adblock","animation","audio","click","color_scheme","data","device","embed","filename","filter","force","function","header","iframe","insight","javascript","lighthouse","media_type","meta","module","palette","pdf","pdf_format","pdf_height","pdf_landscape","pdf_margin","pdf_page_range","pdf_scale","pdf_width","ping","prerender","proxy","retry","screenshot","screenshot_code_scheme","screenshot_element","screenshot_full_page","screenshot_omit_background","screenshot_overlay","screenshot_type","script","scroll","stale_ttl","style","technology","timeout","ttl","url","video","viewport","wait_for_selector","wait_for_timeout","wait_until"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_website_data","name__orig":"get_website_data","Name":"GetWebsiteData","name_":"get_website_data","name-":"get-website-data","NAME":"GET_WEBSITE_DATA","index$":0}, {"active":true,"entity":"get_website_data","key$":"BasicGetWebsiteDataFlow","kind":"basic","name":"BasicGetWebsiteDataFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_website_data_ref01","srcdatavar":"get_website_data_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_website_data_ref01"}}],"index$":0}]}, 'GetWebsiteData')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_website_data_ref01_data = Object.values(setup.data.existing.get_website_data)[0] as any

    // LOAD
    const get_website_data_ref01_ent = client.GetWebsiteData()
    const get_website_data_ref01_match_dt0: any = {}
    const get_website_data_ref01_data_dt0 = (await get_website_data_ref01_ent.load(get_website_data_ref01_match_dt0)).data()
    assert(null != get_website_data_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_website_data/GetWebsiteDataTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MicrolinkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_website_data01','get_website_data02','get_website_data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MICROLINK_TEST_GET_WEBSITE_DATA_ENTID': idmap,
    'MICROLINK_TEST_LIVE': 'FALSE',
    'MICROLINK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MICROLINK_TEST_GET_WEBSITE_DATA_ENTID']

  const live = 'TRUE' === env.MICROLINK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MICROLINK_TEST_GET_WEBSITE_DATA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MicrolinkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
