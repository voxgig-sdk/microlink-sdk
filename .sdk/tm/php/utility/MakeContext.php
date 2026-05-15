<?php
declare(strict_types=1);

// Microlink SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MicrolinkMakeContext
{
    public static function call(array $ctxmap, ?MicrolinkContext $basectx): MicrolinkContext
    {
        return new MicrolinkContext($ctxmap, $basectx);
    }
}
