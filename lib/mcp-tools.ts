// MCP Tool Definitions + Implementations
// These tools give the Digital Twin access to live, real data.

export interface MCPTool {
  name: string
  description: string
  inputSchema: {
    type: string
    properties: Record<string, { type: string; description: string }>
    required: string[]
  }
}

// ─── Tool Manifest ────────────────────────────────────────────────────────────

export const MCP_TOOLS: MCPTool[] = [
  {
    name: "get_github_projects",
    description:
      "Fetch Christian Gem's real GitHub repositories with live stats (stars, language, description).",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "get_skills",
    description:
      "Return a structured breakdown of Christian Gem's skills, tools, and tech stack.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "send_contact_message",
    description:
      "Let a visitor send a contact message to Christian Gem. Requires their name, email, and message.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Sender's full name" },
        email: { type: "string", description: "Sender's email address" },
        message: { type: "string", description: "The message content" },
      },
      required: ["name", "email", "message"],
    },
  },
]

// ─── Tool Implementations ─────────────────────────────────────────────────────

async function getGithubProjects() {
  try {
    const res = await fetch("https://api.github.com/users/devichann/repos?sort=updated&per_page=10", {
      headers: { "Accept": "application/vnd.github+json" },
      next: { revalidate: 300 }, // cache for 5 min in Next.js
    })

    if (!res.ok) throw new Error(`GitHub API ${res.status}`)

    const repos = await res.json()

    const projects = repos
      .filter((r: { fork: boolean }) => !r.fork)
      .map((r: {
        name: string
        description: string | null
        html_url: string
        language: string | null
        stargazers_count: number
        updated_at: string
        topics: string[]
      }) => ({
        name: r.name,
        description: r.description || "No description",
        url: r.html_url,
        language: r.language || "Unknown",
        stars: r.stargazers_count,
        updatedAt: r.updated_at.split("T")[0],
        topics: r.topics ?? [],
      }))

    return { projects, total: projects.length, source: "github_live" }
  } catch (err) {
    // Fallback to static data if GitHub API fails
    return {
      projects: [
        { name: "ChristianGemportfolio", description: "Personal portfolio built with Next.js", language: "TypeScript", stars: 0 },
      ],
      total: 1,
      source: "fallback",
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

function getSkills() {
  return {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Python", "JavaScript (Node.js)", "Java"],
    gameDev: ["Godot Engine", "Flutter"],
    tools: ["GitHub", "Prisma", "VS Code", "Figma"],
    networking: ["Basic Networking", "Hardware Troubleshooting"],
    learning: ["Cybersecurity", "Full-Stack Development", "Open Source"],
  }
}

async function sendContactMessage(args: { name: string; email: string; message: string }) {
  const { name, email, message } = args

  // Log it server-side (extend this with email/DB as needed)
  console.log("[MCP:contact]", { name, email, message, timestamp: new Date().toISOString() })

  // TODO: add Resend / Nodemailer / DB storage here
  return {
    success: true,
    message: `Thanks ${name}! Your message has been received. Christian will get back to you at ${email} soon.`,
  }
}

// ─── Dispatcher ───────────────────────────────────────────────────────────────

export async function executeTool(
  name: string,
  args: Record<string, unknown>
): Promise<unknown> {
  switch (name) {
    case "get_github_projects":
      return getGithubProjects()
    case "get_skills":
      return getSkills()
    case "send_contact_message":
      return sendContactMessage(args as { name: string; email: string; message: string })
    default:
      throw new Error(`Unknown MCP tool: "${name}"`)
  }
}

// ─── Groq-compatible tool format ──────────────────────────────────────────────
// Converts MCP tool definitions to OpenAI/Groq function-calling format

export function toGroqTools() {
  return MCP_TOOLS.map((tool) => ({
    type: "function" as const,
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.inputSchema,
    },
  }))
}
