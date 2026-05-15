<?php
declare(strict_types=1);

// Microlink SDK exists test

require_once __DIR__ . '/../microlink_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MicrolinkSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
