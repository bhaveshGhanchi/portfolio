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
    "Observability Tool for Agentic AI Systems — capture agent decisions, prompts, tool calls, and latency across multi-agent workflows.",
  stack: ["Python", "FastAPI", "LLM APIs", "PostgreSQL", "Docker"],
  repoUrl: "https://github.com/Anirudh-RV/otas",
  docsUrl: "https://mintlify.wiki/Vedant-Jayesh-Oza/otas",
  featured: true,
  role: "Team project — observability layer, agent telemetry, and real-time dashboard",
  highlights: [
    "Built an observability layer capturing agent decisions, prompts, tool calls, and latency across 10+ agents.",
    "Developed a real-time dashboard tracking 800+ agent tasks per day with anomaly detection on execution traces.",
  ],
  metric: { label: "tasks / day", value: "800+" },
};

export const projects: Project[] = [
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
  {
    slug: "leap",
    name: "LEAP",
    summary:
      "TCP-like reliable transport over UDP in Java — sliding window, fast retransmit, adaptive RTO, AIMD, and end-to-end SHA-256 integrity.",
    stack: ["Java", "Maven", "UDP"],
    repoUrl: "https://github.com/bhaveshGhanchi/leap",
    metric: { label: "throughput", value: "46 MB/s" },
  },
  {
    slug: "biomedical-rag",
    name: "Biomedical RAG",
    summary:
      "FAISS retrieval over biomedical embeddings with a QLoRA-tuned LLM — +5.6% BERTScore F1 over the base model.",
    stack: ["PyTorch", "FAISS", "QLoRA", "Transformers"],
    externalUrl: "https://huggingface.co",
    metric: { label: "BERTScore Δ", value: "+5.6%" },
  },
];
