'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const quotes = [
  {
    name: 'Alex Navarro',
    title: 'Festival Director, SummitFrames',
    quote:
      'The interactive timeline redefines documentary pacing. It felt like navigating a live expedition with the crew.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80'
  },
  {
    name: 'Sasha Kim',
    title: 'Lead Engineer, Polaris Labs',
    quote:
      'We integrated LumaStream for a launch event. The ready-made data overlays saved us weeks of engineering.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80'
  },
  {
    name: 'Jules Ortega',
    title: 'Cinematographer, Earthpulse',
    quote:
      'The bonus layers are a masterclass in technical transparency. Rarely do we see the craft shared this openly.',
    avatar:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=240&q=80'
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-10">
      <div className="mb-8 flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-100/80">Responses</span>
        <h2 className="text-3xl font-semibold text-white">What partners are saying.</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
        <div className="flex flex-col gap-4">
          {quotes.map((quote, index) => (
            <button
              key={quote.name}
              onClick={() => setActive(index)}
              className={`flex items-center gap-4 rounded-2xl border px-4 py-4 transition ${
                active === index
                  ? 'border-brand-400/60 bg-brand-500/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-slate-900'
              }`}
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={quote.avatar}
                  alt={quote.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{quote.name}</p>
                <p className="text-xs text-slate-400">{quote.title}</p>
              </div>
            </button>
          ))}
        </div>
        <motion.div
          key={quotes[active].name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/50 p-10"
        >
          <blockquote className="text-lg leading-8 text-slate-100">
            “{quotes[active].quote}”
          </blockquote>
          <div>
            <p className="text-sm font-semibold text-white">{quotes[active].name}</p>
            <p className="text-xs text-slate-400">{quotes[active].title}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
