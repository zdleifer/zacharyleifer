'use client';

export default function Hero() {
  return (
    <section className="grain relative min-h-screen bg-[#070B14] flex items-center overflow-hidden">

      {/* Gradient orb — top right, behind photo */}
      <div
        className="orb w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #3B5998 0%, #1E3A5F 50%, transparent 70%)' }}
      />
      {/* Gradient orb — bottom left, accent */}
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] left-[-80px] opacity-10"
        style={{ background: 'radial-gradient(circle, #475569 0%, transparent 70%)' }}
      />

      {/* Subtle fine-line grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 md:px-12 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-8">
              Commercial Growth Executive
            </p>

            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.95] text-white mb-8">
              Zachary
              <br />
              <span className="italic font-normal text-white/70">Leifer</span>
            </h1>

            <div className="w-12 h-px bg-[#3B5998] mb-8" />

            <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-md mb-12">
              CMO · CCO · GM — driving revenue, improving EBITDA, and turning customer data, AI, and technology into measurable business results.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/zacharyleifer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:zacharyleifer@gmail.com"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center items-end h-full pt-16 lg:pt-0">
            <div className="relative">
              {/* Accent frames */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#3B5998]/25 rounded-sm" />
              <div className="absolute -bottom-6 -right-6 w-[95%] h-[95%] border border-[#475569]/15 rounded-sm" />

              {/* Photo wrapper — vignette masks the cutout fringe */}
              <div className="relative w-[300px] md:w-[400px] lg:w-[420px]" style={{ maxHeight: '560px' }}>
                <img
                  src="/images/headshot.png"
                  alt="Zachary Leifer — Commercial Growth Executive, Las Vegas NV"
                  className="w-full object-cover object-top block"
                  style={{ maxHeight: '560px' }}
                />
                {/* Dark vignette overlay — fades fringe into background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: [
                      'linear-gradient(to bottom, rgba(7,11,20,0.92) 0%, rgba(7,11,20,0.2) 12%, rgba(7,11,20,0) 25%)',
                      'linear-gradient(to right, rgba(7,11,20,0.5) 0%, rgba(7,11,20,0) 12%)',
                      'linear-gradient(to left, rgba(7,11,20,0.5) 0%, rgba(7,11,20,0) 12%)',
                    ].join(', '),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20" />
          <span className="text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
