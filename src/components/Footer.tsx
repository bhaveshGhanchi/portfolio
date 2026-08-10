import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-base font-bold">
          {site.name}
          <span className="text-accent">.</span>
        </p>
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} · {site.location} · {site.phone}
        </p>
      </div>
    </footer>
  );
}
