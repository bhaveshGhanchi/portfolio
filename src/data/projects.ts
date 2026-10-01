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
    "Observability platform for agentic AI systems — capturing prompts, tool calls, latency, and outcomes while reconstructing execution lineage across multi-agent runs, handoffs, retries, and failures.",
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
    "Co-engineered an observability platform for agentic AI systems, capturing prompts, tool calls, latency, and outcomes while reconstructing execution lineage across multi-agent runs, handoffs, retries, and failures.",
    "Built OpenTelemetry tracing and a Pydantic-validated MCP ingestion server with CLI hooks for Claude Code, Cursor, and Codex.",
    "Load-tested 10 concurrent agents across 800 sessions, persisting 1,620 events at 149 ms p95 latency.",
  ],
  metric: { label: "p95 latency", value: "149 ms" },
};

export const projects: Project[] = [
  {
    slug: "leap",
    name: "LEAP",
    summary:
      "TCP-style reliable transport from scratch over UDP — sliding windows, cumulative ACKs, fast retransmission, adaptive RTO, Tahoe congestion control, and CRC32 with end-to-end SHA-256 integrity. 46.2 MB/s at 0% loss; 88.8% efficiency at 10% loss.",
    stack: ["Java", "UDP", "Maven"],
    repoUrl: "https://github.com/bhaveshGhanchi/leap",
    metric: { label: "throughput", value: "46.2 MB/s" },
  },
  {
    slug: "biomedical-rag",
    name: "Biomedical RAG",
    summary:
      "Published biomedical RAG Q&A system — MiniLM embeddings, top-5 FAISS retrieval, and QLoRA-tuned Mistral-7B on MedQuAD; 0.88–0.90 BERTScore F1 on breast-cancer literature.",
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
