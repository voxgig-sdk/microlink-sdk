# Microlink SDK utility: make_context
require_relative '../core/context'
module MicrolinkUtilities
  MakeContext = ->(ctxmap, basectx) {
    MicrolinkContext.new(ctxmap, basectx)
  }
end
