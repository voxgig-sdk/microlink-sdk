<?php
declare(strict_types=1);

// Microlink SDK utility: result_body

class MicrolinkResultBody
{
    public static function call(MicrolinkContext $ctx): ?MicrolinkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
