// Typed models for the Microlink SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetWebsiteData {
  author?: string
  date?: string
  description?: string
  image?: Record<string, any>
  lang?: string
  logo?: Record<string, any>
  palette?: any[]
  pdf?: Record<string, any>
  publisher?: string
  screenshot?: Record<string, any>
  technologies?: any[]
  title?: string
  url?: string
}

export interface GetWebsiteDataLoadMatch {
  adblock?: boolean
  animation?: boolean
  audio?: boolean
  click?: string
  color_scheme?: string
  data?: string
  device?: string
  embed?: string
  filename?: string
  filter?: string
  force?: boolean
  function?: string
  header?: string
  iframe?: boolean
  insight?: boolean
  javascript?: boolean
  lighthouse?: boolean
  media_type?: string
  meta?: boolean
  module?: boolean
  palette?: boolean
  pdf?: boolean
  pdf_format?: string
  pdf_height?: string
  pdf_landscape?: boolean
  pdf_margin?: string
  pdf_page_range?: string
  pdf_scale?: number
  pdf_width?: string
  ping?: boolean
  prerender?: boolean
  proxy?: string
  retry?: number
  screenshot?: boolean
  screenshot_code_scheme?: string
  screenshot_element?: string
  screenshot_full_page?: boolean
  screenshot_omit_background?: boolean
  screenshot_overlay?: string
  screenshot_type?: string
  script?: string
  scroll?: string
  stale_ttl?: number
  style?: string
  technology?: boolean
  timeout?: number
  ttl?: number
  url: string
  video?: boolean
  viewport?: string
  wait_for_selector?: string
  wait_for_timeout?: number
  wait_until?: string
}

