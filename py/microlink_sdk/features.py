# Microlink SDK feature factory

from microlink_sdk.feature.base_feature import MicrolinkBaseFeature
from microlink_sdk.feature.ratelimit_feature import MicrolinkRatelimitFeature
from microlink_sdk.feature.retry_feature import MicrolinkRetryFeature
from microlink_sdk.feature.test_feature import MicrolinkTestFeature
from microlink_sdk.feature.timeout_feature import MicrolinkTimeoutFeature


_FEATURES = {
    "base": lambda: MicrolinkBaseFeature(),
    "ratelimit": lambda: MicrolinkRatelimitFeature(),
    "retry": lambda: MicrolinkRetryFeature(),
    "test": lambda: MicrolinkTestFeature(),
    "timeout": lambda: MicrolinkTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
