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
    "Observability Tool for Agentic AI Systems — capture decisions, prompts, tool calls, and latency across multi-agent workflows.",
  stack: ["Python", "FastAPI", "LLMs", "Distributed Systems"],
  repoUrl: "https://github.com/Anirudh-RV/otas",
  docsUrl: "https://mintlify.wiki/Vedant-Jayesh-Oza/otas",
  featured: true,
  role: "Core contributor — agent APIs, keys, events, and dashboard observability",
  highlights: [
    "Observability for agent decisions, prompts, tool calls, and latency — debugging effort down ~40%.",
    "Multi-agent platform with LLM orchestration, tool calling, and workflows for 10+ agents.",
    "RBAC + inference monitoring cutting unnecessary LLM API calls ~30%.",
    "Real-time dashboard for 800+ agent tasks/day at ~96% workflow visibility.",
  ],
  metric: { label: "tasks / day", value: "800+" },
};

export const projects: Project[] = [
  {
    slug: "preploop",
    name: "PrepLoop",
    summary:
      "Interview prep loop for coding strategy, system design, and STAR stories — with synced history across devices.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    repoUrl: "https://github.com/bhaveshGhanchi/PrepLoop",
    liveUrl: "https://prep-loop-two.vercel.app",
    metric: { label: "status", value: "LIVE" },
  },
  {
    slug: "biomedical-rag",
    name: "Biomedical RAG",
    summary:
      "FAISS RAG + QLoRA-tuned biomedical LLM — 89% retrieval accuracy, +5.6% BERTScore F1 over baseline.",
    stack: ["Python", "PyTorch", "FAISS", "QLoRA"],
    externalUrl: "https://huggingface.co",
    metric: { label: "retrieval", value: "89%" },
  },
  {
    slug: "leap",
    name: "LEAP",
    summary:
      "TCP-like reliable transport over UDP: sliding window, AIMD congestion control, SHA-256 integrity.",
    stack: ["Java", "UDP", "Networking"],
    repoUrl: "https://github.com/bhaveshGhanchi/leap",
    metric: { label: "throughput", value: "46 MB/s" },
  },
  {
    slug: "code2text",
    name: "Code2Text",
    summary:
      "GPT-2 docstring generator on 160K+ Java functions — FastAPI serving under 500ms for IDE use.",
    stack: ["PyTorch", "Transformers", "FastAPI"],
    repoUrl: "https://github.com/bhaveshGhanchi/codeDocu",
    metric: { label: "BERTScore", value: "0.84" },
  },
];
