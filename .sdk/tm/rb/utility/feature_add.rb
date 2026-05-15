# Microlink SDK utility: feature_add
module MicrolinkUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
