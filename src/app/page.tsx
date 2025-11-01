import { BehindScenes } from './components/BehindScenes';
import { CallToAction } from './components/CallToAction';
import { ChapterGrid } from './components/ChapterGrid';
import { Footer } from './components/Footer';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { VideoHero } from './components/VideoHero';
import { Testimonials } from './components/Testimonials';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10">
      <VideoHero />
      <div className="grid gap-16">
        <ChapterGrid />
        <InteractiveTimeline />
        <BehindScenes />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
