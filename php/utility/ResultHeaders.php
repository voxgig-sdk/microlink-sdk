<?php
declare(strict_types=1);

// Microlink SDK utility: result_headers

class MicrolinkResultHeaders
{
    public static function call(MicrolinkContext $ctx): ?MicrolinkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
