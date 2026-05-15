# Microlink SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MicrolinkFeatures
  def self.make_feature(name)
    case name
    when "base"
      MicrolinkBaseFeature.new
    when "test"
      MicrolinkTestFeature.new
    else
      MicrolinkBaseFeature.new
    end
  end
end
