# Microlink SDK utility: make_context

from microlink_sdk.core.context import MicrolinkContext


def make_context_util(ctxmap, basectx):
    return MicrolinkContext(ctxmap, basectx)
