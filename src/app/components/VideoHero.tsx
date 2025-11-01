'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HERO_VIDEO =
  'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      if (video.paused) {
        void video.play().catch(() => undefined);
      }
    };

    handlePlay();
    video.addEventListener('click', handlePlay);

    return () => {
      video.removeEventListener('click', handlePlay);
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.85)]">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/40 to-slate-950" />
      <video
        ref={videoRef}
        className="h-[540px] w-full object-cover opacity-80"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
      />
      <div className="absolute inset-0 flex flex-col justify-end gap-6 p-12 text-left">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.4em] text-brand-200/90"
        >
          LumaStream Originals
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl font-semibold leading-tight text-white sm:text-6xl"
        >
          Immersive documentaries crafted for the curious.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-2xl text-lg text-slate-200/80"
        >
          Step into cinematic worlds built for web. Stream feature-length narratives, explore interactive timelines, and unlock exclusive director insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#chapters"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Watch Chapters
          </a>
          <a
            href="#timeline"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-brand-100"
          >
            Explore Timeline
          </a>
        </motion.div>
      </div>
    </section>
  );
}
