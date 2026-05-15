<?php
declare(strict_types=1);

// Microlink SDK utility: feature_add

class MicrolinkFeatureAdd
{
    public static function call(MicrolinkContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
