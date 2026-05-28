export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 text-zinc-100">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Painel</p>
        <h3 className="text-xl font-semibold">Visão geral</h3>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800">Novo template</button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold text-cyan-200">JD</div>
      </div>
    </header>
  );
}