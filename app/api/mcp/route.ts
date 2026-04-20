// MCP Server — JSON-RPC 2.0 endpoint
// Exposes Christian Gem's Digital Twin tools to any MCP-compatible client
// (Claude Desktop, custom clients, other AI agents, etc.)
//
// Supported methods:
//   tools/list  → returns all available tools
//   tools/call  → executes a tool by name with arguments

import { MCP_TOOLS, executeTool } from "@/lib/mcp-tools"

interface JsonRpcRequest {
  jsonrpc: "2.0"
  method: string
  params?: Record<string, unknown>
  id: number | string | null
}

function rpcResponse(id: JsonRpcRequest["id"], result: unknown) {
  return Response.json({ jsonrpc: "2.0", id, result })
}

function rpcError(id: JsonRpcRequest["id"], code: number, message: string) {
  return Response.json({ jsonrpc: "2.0", id, error: { code, message } }, { status: 400 })
}

export async function POST(request: Request) {
  let id: JsonRpcRequest["id"] = null

  try {
    const body: JsonRpcRequest = await request.json()
    id = body.id ?? null

    if (body.jsonrpc !== "2.0") {
      return rpcError(id, -32600, "Invalid JSON-RPC version. Expected '2.0'")
    }

    // ── tools/list ────────────────────────────────────────────────────────────
    if (body.method === "tools/list") {
      return rpcResponse(id, { tools: MCP_TOOLS })
    }

    // ── tools/call ────────────────────────────────────────────────────────────
    if (body.method === "tools/call") {
      const params = body.params as { name?: string; arguments?: Record<string, unknown> }

      if (!params?.name) {
        return rpcError(id, -32602, "Missing required param: 'name'")
      }

      const toolExists = MCP_TOOLS.some((t) => t.name === params.name)
      if (!toolExists) {
        return rpcError(id, -32602, `Unknown tool: "${params.name}"`)
      }

      const result = await executeTool(params.name, params.arguments ?? {})

      return rpcResponse(id, {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      })
    }

    return rpcError(id, -32601, `Method not found: "${body.method}"`)
  } catch (err) {
    console.error("[MCP Server Error]", err)
    return rpcError(id, -32603, "Internal error")
  }
}

// GET — returns server info + available tools (useful for discovery)
export async function GET() {
  return Response.json({
    name: "Digital Twin MCP Server",
    version: "1.0.0",
    owner: "Christian Gem Raganit",
    tools: MCP_TOOLS.map((t) => ({ name: t.name, description: t.description })),
  })
}
