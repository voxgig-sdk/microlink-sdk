# Microlink SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MicrolinkFeatures
  def self.make_feature(name)
    case name
    when "base"
      MicrolinkBaseFeature.new
    when "ratelimit"
      MicrolinkRatelimitFeature.new
    when "retry"
      MicrolinkRetryFeature.new
    when "test"
      MicrolinkTestFeature.new
    when "timeout"
      MicrolinkTimeoutFeature.new
    else
      MicrolinkBaseFeature.new
    end
  end
end
