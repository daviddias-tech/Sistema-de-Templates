import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <header className="space-y-3 rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Dashboard</p>
            <h1 className="text-4xl font-bold md:text-5xl">Sistema de Templates</h1>
            <p className="max-w-2xl text-zinc-400">
              Organize seus templates, acompanhe a produção e prepare campanhas prontas para uso em poucos cliques.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Templates ativos", value: "24" },
              { label: "Copys prontas", value: "81" },
              { label: "Campanhas em uso", value: "12" },
            ].map((card) => (
              <article key={card.label} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm text-zinc-400">{card.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Templates recentes</h2>
                <button type="button" className="rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-700">Ver todos</button>
              </div>
              <ul className="mt-4 space-y-3 text-zinc-300">
                {['Landing page SaaS', 'Email de lançamento', 'Copy para Instagram'].map((item) => (
                  <li key={item} className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-950 p-6 shadow-xl shadow-black/20">
              <h2 className="text-xl font-semibold text-white">Ações rápidas</h2>
              <p className="mt-2 text-zinc-300">Crie novos templates, revise a produção e exporte campanhas com facilidade.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300">Criar template</button>
                <button type="button" className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition hover:bg-zinc-800">Exportar</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
