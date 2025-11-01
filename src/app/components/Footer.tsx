export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-slate-400">© {new Date().getFullYear()} LumaStream Studio. All rights reserved.</p>
      <nav className="flex gap-6 text-xs uppercase tracking-[0.3em] text-slate-400">
        <a href="#chapters">Chapters</a>
        <a href="#timeline">Timeline</a>
        <a href="#">Support</a>
      </nav>
    </footer>
  );
}
