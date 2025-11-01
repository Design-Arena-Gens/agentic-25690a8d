const features = [
  {
    title: "Director's Lens",
    description:
      'Alternate scene commentary including lens setup, LUT profiles, and on-site improvisations.',
    badge: 'DIR'
  },
  {
    title: 'Soundstage Mixdowns',
    description:
      'Solo instrument stems, Foley packs, and Atmos layers for audiophile breakdowns.',
    badge: 'AUX'
  },
  {
    title: 'Field Notebooks',
    description:
      'Scrapbook scans, GPS routes, and production notes geo-tagged to every shoot day.',
    badge: 'MAP'
  },
  {
    title: 'Tech Toolkit',
    description:
      'Download camera LUTs, color pipeline presets, and modular shader packs used in the grade.',
    badge: 'LAB'
  }
];

export function BehindScenes() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 p-10 shadow-[0_30px_60px_-35px_rgba(36,99,235,0.8)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-brand-100">
            Bonus Layers
          </span>
          <h2 className="text-3xl font-semibold text-white">Dive behind the camera.</h2>
          <p className="text-base leading-7 text-slate-200/80">
            Members unlock interactive layers mapped to each scene. Toggle technical overlays, director diaries, and geospatial data feeds while you stream.
          </p>
        </div>
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-brand-400/60 hover:bg-slate-900"
            >
              <span className="inline-flex w-fit items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/15 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-brand-100">
                {feature.badge}
              </span>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-6 text-slate-300/80">{feature.description}</p>
              <button className="mt-auto w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-brand-400/70 hover:text-brand-100">
                Unlock
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
