<?php
declare(strict_types=1);

// Typed models for the Microlink SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetWebsiteData entity data model. */
class GetWebsiteData
{
    public ?string $author = null;
    public ?string $date = null;
    public ?string $description = null;
    public ?array $image = null;
    public ?string $lang = null;
    public ?array $logo = null;
    public ?array $palette = null;
    public ?array $pdf = null;
    public ?string $publisher = null;
    public ?array $screenshot = null;
    public ?array $technologies = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for GetWebsiteData#load. */
class GetWebsiteDataLoadMatch
{
    public ?string $author = null;
    public ?string $date = null;
    public ?string $description = null;
    public ?array $image = null;
    public ?string $lang = null;
    public ?array $logo = null;
    public ?array $palette = null;
    public ?array $pdf = null;
    public ?string $publisher = null;
    public ?array $screenshot = null;
    public ?array $technologies = null;
    public ?string $title = null;
    public ?string $url = null;
}

