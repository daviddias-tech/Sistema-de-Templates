const menuItems = ["Overview", "Templates", "Campanhas", "Analytics", "Configurações"];

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 border-r border-zinc-800 bg-zinc-950 p-6 text-zinc-100">
      <div className="flex items-center gap-3 border-b border-zinc-800 pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">T</div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Template</p>
          <h2 className="text-xl font-semibold">Builder</h2>
        </div>
      </div>

      <nav className="mt-6 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm transition ${index === 0 ? "bg-cyan-400/10 text-cyan-100" : "text-zinc-300 hover:bg-zinc-900 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-300">
        <p className="text-zinc-400">Plano</p>
        <p className="mt-1 text-lg font-semibold text-white">Pro</p>
        <p className="mt-2 text-zinc-400">Acesse recursos premium para acelerar sua produção.</p>
      </div>
    </aside>
  );
}