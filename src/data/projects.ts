export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  externalUrl?: string;
  featured?: boolean;
  role?: string;
  highlights?: string[];
  metric?: { label: string; value: string };
};

export const featuredProject: Project = {
  slug: "otas",
  name: "OTAS",
  summary:
    "Observability platform for AI agents — capture prompts, tool calls, latency, and outcomes linked into execution lineage across runs, handoffs, and retries.",
  stack: [
    "Python",
    "Django",
    "PostgreSQL",
    "Redis",
    "Celery",
    "OpenTelemetry",
    "MCP",
    "Docker",
  ],
  repoUrl: "https://github.com/bhaveshGhanchi/otas",
  featured: true,
  role: "Team project + personal fork — tracing, MCP server, and CLI hooks",
  highlights: [
    "Co-built an observability platform for AI agents capturing prompts, tool calls, latency, and outcomes across runs, handoffs, and retries.",
    "Added OpenTelemetry tracing, a Pydantic-validated MCP server, and CLI hooks for Claude Code, Cursor, and Codex.",
    "Load-tested at 10 agents and 800 sessions, persisting 1,620 events at 149 ms p95.",
  ],
  metric: { label: "p95 latency", value: "149 ms" },
};

export const projects: Project[] = [
  {
    slug: "leap",
    name: "LEAP",
    summary:
      "TCP-style reliable transport over UDP from scratch — sliding window, fast retransmit, adaptive RTO, Tahoe congestion control, CRC32 + SHA-256 integrity. 46.2 MB/s at 0% loss; 88.8% efficiency at 10% loss. Documented in a 6-part blog series.",
    stack: ["Java", "UDP", "Maven"],
    repoUrl: "https://github.com/bhaveshGhanchi/leap",
    metric: { label: "throughput", value: "46.2 MB/s" },
  },
  {
    slug: "biomedical-rag",
    name: "Biomedical RAG",
    summary:
      "Published RAG medical Q&A system — MiniLM embeddings, FAISS retrieval, Mistral-7B fine-tuned with QLoRA; BERTScore-F1 0.88–0.90.",
    stack: ["PyTorch", "FAISS", "QLoRA", "Mistral-7B"],
    externalUrl: "https://arxiv.org/abs/2509.05505",
    metric: { label: "BERTScore-F1", value: "0.88–0.90" },
  },
  {
    slug: "preploop",
    name: "PrepLoop",
    summary:
      "Interview prep platform with approach-first coding, system design, and behavioral workflows — plus cross-device sync and offline caching.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    repoUrl: "https://github.com/bhaveshGhanchi/PrepLoop",
    liveUrl: "https://prep-loop-two.vercel.app",
    metric: { label: "status", value: "LIVE" },
  },
];
