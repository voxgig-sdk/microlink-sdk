-- Microlink SDK error

local MicrolinkError = {}
MicrolinkError.__index = MicrolinkError


function MicrolinkError.new(code, msg, ctx)
  local self = setmetatable({}, MicrolinkError)
  self.is_sdk_error = true
  self.sdk = "Microlink"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MicrolinkError:error()
  return self.msg
end


function MicrolinkError:__tostring()
  return self.msg
end


return MicrolinkError
