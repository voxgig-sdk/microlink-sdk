# Typed models for the Microlink SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetWebsiteData(TypedDict, total=False):
    author: str
    date: str
    description: str
    image: dict
    lang: str
    logo: dict
    palette: list
    pdf: dict
    publisher: str
    screenshot: dict
    technologies: list
    title: str
    url: str


class GetWebsiteDataLoadMatchRequired(TypedDict):
    url: str


class GetWebsiteDataLoadMatch(GetWebsiteDataLoadMatchRequired, total=False):
    adblock: bool
    animation: bool
    audio: bool
    click: str
    color_scheme: str
    data: str
    device: str
    embed: str
    filename: str
    filter: str
    force: bool
    function: str
    header: str
    iframe: bool
    insight: bool
    javascript: bool
    lighthouse: bool
    media_type: str
    meta: bool
    module: bool
    palette: bool
    pdf: bool
    pdf_format: str
    pdf_height: str
    pdf_landscape: bool
    pdf_margin: str
    pdf_page_range: str
    pdf_scale: float
    pdf_width: str
    ping: bool
    prerender: bool
    proxy: str
    retry: int
    screenshot: bool
    screenshot_code_scheme: str
    screenshot_element: str
    screenshot_full_page: bool
    screenshot_omit_background: bool
    screenshot_overlay: str
    screenshot_type: str
    script: str
    scroll: str
    stale_ttl: int
    style: str
    technology: bool
    timeout: int
    ttl: int
    video: bool
    viewport: str
    wait_for_selector: str
    wait_for_timeout: int
    wait_until: str
