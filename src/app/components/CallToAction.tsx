export function CallToAction() {
  return (
    <section className="rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-600/40 via-brand-500/30 to-brand-700/40 p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
        <div className="space-y-4 text-white">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-100">
            Studio Access
          </span>
          <h2 className="text-3xl font-semibold">Bring LumaStream to your next premiere.</h2>
          <p className="text-base text-brand-50/80">
            License the interactive platform, request a custom shoot, or integrate our timeline player into your event broadcast. Our team will respond within 48 hours.
          </p>
        </div>
        <form className="grid gap-4 rounded-3xl border border-white/20 bg-slate-950/40 p-6 shadow-[0_18px_30px_-22px_rgba(8,47,73,0.9)]">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100/90">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jordan Rivera"
              className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100/90">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jordan@studio.co"
              className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100/90">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about the moment you want to capture."
              className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Request Access
          </button>
          <p className="text-xs text-white/80">
            By submitting, you agree to our privacy policy and to receive production updates.
          </p>
        </form>
      </div>
    </section>
  );
}
