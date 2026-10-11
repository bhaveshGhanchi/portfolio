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
    "Observability and monitoring platform for agentic AI systems — capturing prompts, tool calls, latency, and outcomes while reconstructing execution lineage across multi-agent runs, handoffs, retries, and failures.",
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
  role: "OpenTelemetry tracing, MCP ingestion, and CLI hooks",
  highlights: [
    "Co-engineered an observability and monitoring platform for agentic AI systems, capturing prompts, tool calls, latency, and outcomes while reconstructing execution lineage across multi-agent runs, handoffs, retries, and failures.",
    "Built OpenTelemetry tracing and a Pydantic-validated MCP ingestion server with CLI hooks for Claude Code, Cursor, and Codex.",
    "Load-tested 10 concurrent agents across 800 sessions at 149 ms p95 latency.",
  ],
  metric: { label: "p95 latency", value: "149 ms" },
};

export const projects: Project[] = [
  {
    slug: "nimbuskv",
    name: "NimbusKV",
    summary:
      "3-node distributed key-value store in Go using only the standard library — Raft-style leader election, quorum writes, atomic snapshots, and tombstone deletes. ~100 ms median failover; 2.4x single-node write latency (70 → 167 μs p50).",
    stack: ["Go", "HTTP", "Docker Compose", "Raft"],
    repoUrl: "https://github.com/bhaveshGhanchi/NimbusKV",
    metric: { label: "failover", value: "~100 ms" },
  },
  {
    slug: "leap",
    name: "LEAP",
    summary:
      "TCP-style reliable transport from scratch over UDP — sliding windows, cumulative ACKs, fast retransmission, adaptive RTO, Tahoe congestion control, and CRC32/SHA-256 integrity. 46.2 MB/s at 0% loss; 88.8% efficiency at 10% loss.",
    stack: ["Java", "UDP", "Maven"],
    repoUrl: "https://github.com/bhaveshGhanchi/leap",
    metric: { label: "throughput", value: "46.2 MB/s" },
  },
  {
    slug: "biomedical-rag",
    name: "Biomedical RAG",
    summary:
      "Published biomedical RAG Q&A system — MiniLM embeddings, top-5 FAISS retrieval, and QLoRA-tuned Mistral-7B on MedQuAD; 0.88–0.90 BERTScore F1.",
    stack: ["PyTorch", "FAISS", "QLoRA", "Mistral-7B"],
    externalUrl: "https://arxiv.org/abs/2509.05505",
    metric: { label: "BERTScore-F1", value: "0.88–0.90" },
  },
];
