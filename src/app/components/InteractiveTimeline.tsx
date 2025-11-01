'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const timelineEvents = [
  {
    label: 'Discovery',
    description:
      'High-altitude survey drones capture never-before-seen footage across 42 peaks during scouting.',
    year: '2021',
    detail:
      'The production crew partnered with alpine research initiatives to gain access to protected ridgelines, logging over 180 flight hours in one season.'
  },
  {
    label: 'Production',
    description:
      'A hybrid crew of documentarians and climbers establishes four high camp filming bases.',
    year: '2022',
    detail:
      'Each camp included a field audio lab and rapid-charge solar rig capable of powering RED V-Raptor systems above 10,000 ft elevations.'
  },
  {
    label: 'Narrative Cut',
    description:
      'Editors craft an interactive narrative that branches across climate, culture, and adventure threads.',
    year: '2023',
    detail:
      'The web-first cut was designed with adaptive pacing, letting viewers explore side stories without losing the main storyline.'
  },
  {
    label: 'Premiere',
    description:
      'Global premiere staged as a synchronized multi-screen event with live commentary from the summits.',
    year: '2024',
    detail:
      'Viewers tuned in across 78 countries. Real-time uplink from mountain-top teams blended with motion graphics over the live stream.'
  }
];

export function InteractiveTimeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="timeline" className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-[0_20px_45px_-25px_rgba(8,47,73,0.9)]">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Interactive Timeline</h2>
          <p className="text-sm text-slate-400">
            Slide through production milestones and unlock behind-the-scenes context.
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Drag the nodes</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <div className="flex flex-col gap-4">
          {timelineEvents.map((event, index) => {
            const isActive = index === active;
            return (
              <button
                key={event.label}
                onClick={() => setActive(index)}
                className={`group rounded-2xl border px-5 py-4 text-left transition ${
                  isActive
                    ? 'border-brand-400/70 bg-brand-500/10 shadow-[0_16px_32px_-18px_rgba(59,130,246,0.8)]'
                    : 'border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-900/80'
                }`}
              >
                <span className="text-xs uppercase tracking-[0.4em] text-brand-200/80">
                  {event.year}
                </span>
                <p className="mt-2 text-lg font-medium text-white group-hover:text-brand-100">
                  {event.label}
                </p>
                <p className="text-sm text-slate-300/80">{event.description}</p>
              </button>
            );
          })}
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 p-10">
          <motion.div
            key={timelineEvents[active].label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-white">
              {timelineEvents[active].label}
            </h3>
            <p className="text-sm text-brand-100/80">{timelineEvents[active].year}</p>
            <p className="text-base leading-7 text-slate-200/80">
              {timelineEvents[active].detail}
            </p>
          </motion.div>
          <motion.div
            layout
            className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-brand-400 via-brand-500 to-brand-700"
          />
        </div>
      </div>
    </section>
  );
}
