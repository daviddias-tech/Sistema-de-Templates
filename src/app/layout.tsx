export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full bg-zinc-950">
      <body className="min-h-full bg-[radial-gradient(circle_at_top,_#111827_0%,_#030712_45%,_#020617_100%)] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
