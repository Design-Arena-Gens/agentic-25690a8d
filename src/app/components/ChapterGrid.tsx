import Image from 'next/image';

const chapters = [
  {
    title: 'Dawn Above the Clouds',
    duration: '12:47',
    synopsis:
      'From sunrise ridge hikes to drone flyovers, episode one traces the first light that paints the Cascades.',
    thumbnail:
      'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Frozen Waterfalls',
    duration: '16:22',
    synopsis:
      'Ice climbers and macro cinematography reveal the hidden geometry of winter cascades.',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Wildfire Nightwatch',
    duration: '14:08',
    synopsis:
      'A frontline look at the crews protecting alpine towns when lightning ignites the forest floor.',
    thumbnail:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Stories From the Summit',
    duration: '19:36',
    synopsis:
      'Indigenous storytellers and mountain guides share oral histories that shaped the ridgelines.',
    thumbnail:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
  }
];

export function ChapterGrid() {
  return (
    <section id="chapters" className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-3xl font-semibold text-white">Chapter Select</h2>
          <p className="text-sm text-slate-400">
            Four part limited series • HDR10 • Spatial audio mix
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
          Season 01
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {chapters.map((chapter) => (
          <article
            key={chapter.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_60px_-30px_rgba(59,130,246,0.8)]"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                fill
                src={chapter.thumbnail}
                alt={chapter.title}
                className="object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {chapter.duration}
              </span>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-white">{chapter.title}</h3>
              <p className="text-sm text-slate-300/80">{chapter.synopsis}</p>
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-brand-100">
                Stream Chapter
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
