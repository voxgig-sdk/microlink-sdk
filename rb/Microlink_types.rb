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
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
GetWebsiteData = Struct.new(
  :data,
  :status,
  keyword_init: true
)

# Request payload for GetWebsiteData#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
GetWebsiteDataLoadMatch = Struct.new(
  :data,
  :status,
  keyword_init: true
)

