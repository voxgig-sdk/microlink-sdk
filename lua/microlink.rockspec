package = "voxgig-sdk-microlink"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/microlink-sdk.git"
}
description = {
  summary = "Microlink SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["microlink_sdk"] = "microlink_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
