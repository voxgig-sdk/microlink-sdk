# Microlink SDK

Turn any URL into structured data, screenshots, PDFs, or color palettes via a single browser-automation API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Microlink API

[Microlink](https://microlink.io) is a browser-automation API that converts any URL into structured output. A single GET request to `https://api.microlink.io/?url=...` drives a headless browser on the server side and returns JSON describing the page.

What you get from the API:

- **Metadata** — normalized title, description, author, publication date, logo, and representative images for a URL
- **Screenshots** — pixel-perfect captures of any webpage
- **PDFs** — rendered PDFs of live webpages
- **Color palettes** — predominant colors extracted from detected images
- **Embeds** — rich embeddable cards built from URL metadata
- **Technology detection** — frameworks and tools powering a site
- **Pre-rendering** — access to client-side rendered content

The API speaks plain HTTP with URL query parameters and returns JSON, so any HTTP client works; the docs show examples in cURL, JavaScript, Python, Ruby, PHP, and Go. An API key is used for authenticated/paid usage; specific rate limits and pricing tiers are published on the Microlink site.

## Try it

**TypeScript**
```bash
npm install microlink
```

**Python**
```bash
pip install microlink-sdk
```

**PHP**
```bash
composer require voxgig/microlink-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/microlink-sdk/go
```

**Ruby**
```bash
gem install microlink-sdk
```

**Lua**
```bash
luarocks install microlink-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MicrolinkSDK } from 'microlink'

const client = new MicrolinkSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o microlink-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "microlink": {
      "command": "/abs/path/to/microlink-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetWebsiteData** | Fetch structured data about a target URL via `GET /?url=<target>` — returns normalized metadata and, depending on parameters, screenshots, PDFs, or color palettes. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from microlink_sdk import MicrolinkSDK

client = MicrolinkSDK({})


# Load a specific getwebsitedata
getwebsitedata, err = client.GetWebsiteData(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'microlink_sdk.php';

$client = new MicrolinkSDK([]);


// Load a specific getwebsitedata
[$getwebsitedata, $err] = $client->GetWebsiteData(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/microlink-sdk/go"

client := sdk.NewMicrolinkSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Microlink_sdk"

client = MicrolinkSDK.new({})


# Load a specific getwebsitedata
getwebsitedata, err = client.GetWebsiteData(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("microlink_sdk")

local client = sdk.new({})


-- Load a specific getwebsitedata
local getwebsitedata, err = client:GetWebsiteData(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MicrolinkSDK.test()
const result = await client.GetWebsiteData().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MicrolinkSDK.test(None, None)
result, err = client.GetWebsiteData(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MicrolinkSDK::test(null, null);
[$result, $err] = $client->GetWebsiteData(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetWebsiteData(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MicrolinkSDK.test(nil, nil)
result, err = client.GetWebsiteData(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetWebsiteData(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Microlink API

- Upstream: [https://microlink.io](https://microlink.io)
- API docs: [https://microlink.io/docs/api/getting-started/overview](https://microlink.io/docs/api/getting-started/overview)

---

Generated from the Microlink API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
