'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#060606] border-t border-white/10 py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Left */}
          <div className="lg:col-span-5">
            <p className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect.
            </p>
            <p className="text-white/60 text-base leading-relaxed max-w-xs">
              Open to executive leadership opportunities, board and advisory roles, and select consulting engagements.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#475569] mb-5">Connect</p>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/zacharyleifer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white transition-colors text-sm group"
                >
                  LinkedIn
                  <span className="text-[#475569] group-hover:text-white/50 ml-2 transition-colors">↗</span>
                </a>
                <a
                  href="mailto:zacharyleifer@gmail.com"
                  className="block text-white/70 hover:text-white transition-colors text-sm group"
                >
                  zacharyleifer@gmail.com
                  <span className="text-[#475569] group-hover:text-white/50 ml-2 transition-colors">↗</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#475569] mb-5">Location</p>
              <p className="text-white/60 text-sm">Las Vegas, Nevada</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="font-display text-white/50 text-sm">Zachary Leifer</span>
          <span className="text-white/20 text-xs">© 2026 · zacharyleifer.com</span>
        </div>
      </div>
    </footer>
  );
}
