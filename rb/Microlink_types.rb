# frozen_string_literal: true

# Typed models for the Microlink SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetWebsiteData entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [Hash, nil]
#
# @!attribute [rw] palette
#   @return [Array, nil]
#
# @!attribute [rw] pdf
#   @return [Hash, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] screenshot
#   @return [Hash, nil]
#
# @!attribute [rw] technologies
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetWebsiteData = Struct.new(
  :author,
  :date,
  :description,
  :image,
  :lang,
  :logo,
  :palette,
  :pdf,
  :publisher,
  :screenshot,
  :technologies,
  :title,
  :url,
  keyword_init: true
)

# Request payload for GetWebsiteData#load.
#
# @!attribute [rw] adblock
#   @return [Boolean, nil]
#
# @!attribute [rw] animation
#   @return [Boolean, nil]
#
# @!attribute [rw] audio
#   @return [Boolean, nil]
#
# @!attribute [rw] click
#   @return [String, nil]
#
# @!attribute [rw] color_scheme
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] device
#   @return [String, nil]
#
# @!attribute [rw] embed
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
#
# @!attribute [rw] function
#   @return [String, nil]
#
# @!attribute [rw] header
#   @return [String, nil]
#
# @!attribute [rw] iframe
#   @return [Boolean, nil]
#
# @!attribute [rw] insight
#   @return [Boolean, nil]
#
# @!attribute [rw] javascript
#   @return [Boolean, nil]
#
# @!attribute [rw] lighthouse
#   @return [Boolean, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Boolean, nil]
#
# @!attribute [rw] module
#   @return [Boolean, nil]
#
# @!attribute [rw] palette
#   @return [Boolean, nil]
#
# @!attribute [rw] pdf
#   @return [Boolean, nil]
#
# @!attribute [rw] pdf_format
#   @return [String, nil]
#
# @!attribute [rw] pdf_height
#   @return [String, nil]
#
# @!attribute [rw] pdf_landscape
#   @return [Boolean, nil]
#
# @!attribute [rw] pdf_margin
#   @return [String, nil]
#
# @!attribute [rw] pdf_page_range
#   @return [String, nil]
#
# @!attribute [rw] pdf_scale
#   @return [Float, nil]
#
# @!attribute [rw] pdf_width
#   @return [String, nil]
#
# @!attribute [rw] ping
#   @return [Boolean, nil]
#
# @!attribute [rw] prerender
#   @return [Boolean, nil]
#
# @!attribute [rw] proxy
#   @return [String, nil]
#
# @!attribute [rw] retry
#   @return [Integer, nil]
#
# @!attribute [rw] screenshot
#   @return [Boolean, nil]
#
# @!attribute [rw] screenshot_code_scheme
#   @return [String, nil]
#
# @!attribute [rw] screenshot_element
#   @return [String, nil]
#
# @!attribute [rw] screenshot_full_page
#   @return [Boolean, nil]
#
# @!attribute [rw] screenshot_omit_background
#   @return [Boolean, nil]
#
# @!attribute [rw] screenshot_overlay
#   @return [String, nil]
#
# @!attribute [rw] screenshot_type
#   @return [String, nil]
#
# @!attribute [rw] script
#   @return [String, nil]
#
# @!attribute [rw] scroll
#   @return [String, nil]
#
# @!attribute [rw] stale_ttl
#   @return [Integer, nil]
#
# @!attribute [rw] style
#   @return [String, nil]
#
# @!attribute [rw] technology
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] ttl
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] video
#   @return [Boolean, nil]
#
# @!attribute [rw] viewport
#   @return [String, nil]
#
# @!attribute [rw] wait_for_selector
#   @return [String, nil]
#
# @!attribute [rw] wait_for_timeout
#   @return [Integer, nil]
#
# @!attribute [rw] wait_until
#   @return [String, nil]
GetWebsiteDataLoadMatch = Struct.new(
  :adblock,
  :animation,
  :audio,
  :click,
  :color_scheme,
  :data,
  :device,
  :embed,
  :filename,
  :filter,
  :force,
  :function,
  :header,
  :iframe,
  :insight,
  :javascript,
  :lighthouse,
  :media_type,
  :meta,
  :module,
  :palette,
  :pdf,
  :pdf_format,
  :pdf_height,
  :pdf_landscape,
  :pdf_margin,
  :pdf_page_range,
  :pdf_scale,
  :pdf_width,
  :ping,
  :prerender,
  :proxy,
  :retry,
  :screenshot,
  :screenshot_code_scheme,
  :screenshot_element,
  :screenshot_full_page,
  :screenshot_omit_background,
  :screenshot_overlay,
  :screenshot_type,
  :script,
  :scroll,
  :stale_ttl,
  :style,
  :technology,
  :timeout,
  :ttl,
  :url,
  :video,
  :viewport,
  :wait_for_selector,
  :wait_for_timeout,
  :wait_until,
  keyword_init: true
)

