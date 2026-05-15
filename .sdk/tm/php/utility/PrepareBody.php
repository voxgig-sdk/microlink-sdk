<?php
declare(strict_types=1);

// Microlink SDK utility: prepare_body

class MicrolinkPrepareBody
{
    public static function call(MicrolinkContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
