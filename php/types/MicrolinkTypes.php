<?php
declare(strict_types=1);

// Typed models for the Microlink SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
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
    public ?bool $adblock = null;
    public ?bool $animation = null;
    public ?bool $audio = null;
    public ?string $click = null;
    public ?string $color_scheme = null;
    public ?string $data = null;
    public ?string $device = null;
    public ?string $embed = null;
    public ?string $filename = null;
    public ?string $filter = null;
    public ?bool $force = null;
    public ?string $function = null;
    public ?string $header = null;
    public ?bool $iframe = null;
    public ?bool $insight = null;
    public ?bool $javascript = null;
    public ?bool $lighthouse = null;
    public ?string $media_type = null;
    public ?bool $meta = null;
    public ?bool $module = null;
    public ?bool $palette = null;
    public ?bool $pdf = null;
    public ?string $pdf_format = null;
    public ?string $pdf_height = null;
    public ?bool $pdf_landscape = null;
    public ?string $pdf_margin = null;
    public ?string $pdf_page_range = null;
    public ?float $pdf_scale = null;
    public ?string $pdf_width = null;
    public ?bool $ping = null;
    public ?bool $prerender = null;
    public ?string $proxy = null;
    public ?int $retry = null;
    public ?bool $screenshot = null;
    public ?string $screenshot_code_scheme = null;
    public ?string $screenshot_element = null;
    public ?bool $screenshot_full_page = null;
    public ?bool $screenshot_omit_background = null;
    public ?string $screenshot_overlay = null;
    public ?string $screenshot_type = null;
    public ?string $script = null;
    public ?string $scroll = null;
    public ?int $stale_ttl = null;
    public ?string $style = null;
    public ?bool $technology = null;
    public ?int $timeout = null;
    public ?int $ttl = null;
    public string $url;
    public ?bool $video = null;
    public ?string $viewport = null;
    public ?string $wait_for_selector = null;
    public ?int $wait_for_timeout = null;
    public ?string $wait_until = null;
}

