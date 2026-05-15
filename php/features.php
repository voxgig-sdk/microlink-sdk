<?php
declare(strict_types=1);

// Microlink SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MicrolinkFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MicrolinkBaseFeature();
            case "test":
                return new MicrolinkTestFeature();
            default:
                return new MicrolinkBaseFeature();
        }
    }
}
