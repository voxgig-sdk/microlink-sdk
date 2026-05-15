# ProjectName SDK exists test

import pytest
from microlink_sdk import MicrolinkSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MicrolinkSDK.test(None, None)
        assert testsdk is not None
