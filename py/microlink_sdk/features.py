# Microlink SDK feature factory

from microlink_sdk.feature.base_feature import MicrolinkBaseFeature
from microlink_sdk.feature.test_feature import MicrolinkTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MicrolinkBaseFeature(),
        "test": lambda: MicrolinkTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
