# frozen_string_literal: true

# Typed models for the Microlink SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
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
GetWebsiteDataLoadMatch = Struct.new(
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

