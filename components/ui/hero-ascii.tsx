'use client';

import { useEffect } from 'react';
import { WaitlistForm } from '@/components';

// TODO: Replace data-us-project value with your own UnicornStudio project ID.
// The current ID (whwOGlfJ5Rz2rHaEUgHl) is a demo project from 21st.dev.
// Create your own at https://unicorn.studio and swap the ID below.

export default function HeroAscii() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        projectDiv.querySelectorAll('*').forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            (el as HTMLElement).remove();
          }
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      clearInterval(interval);
      if (document.head.contains(embedScript)) document.head.removeChild(embedScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: 'calc(100dvh - 4rem)' }}
    >
      {/* UnicornStudio animation — desktop only */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <div
          data-us-project="whwOGlfJ5Rz2rHaEUgHl"
          style={{ width: '100%', height: '100%', minHeight: '100%' }}
        />
      </div>

      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full lg:hidden stars-bg" />

      {/* Corner frame accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20" />
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" style={{ bottom: '5vh' }} />
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" style={{ bottom: '5vh' }} />

      {/* Content */}
      <div
        className="relative z-10 flex items-center px-6 py-16 lg:px-16 lg:py-0 lg:ml-[10%]"
        style={{ minHeight: 'calc(100dvh - 4rem)' }}
      >
        <div className="max-w-lg">
          {/* Top decorative line */}
          <div className="flex items-center gap-2 mb-3 opacity-60">
            <div className="w-8 h-px bg-white" />
            <span className="text-white text-[10px] font-mono tracking-wider">001</span>
            <div className="flex-1 h-px bg-white" />
          </div>

          {/* Headline */}
          <div className="relative">
            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-40" />
            <h1
              className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono"
              style={{ letterSpacing: '0.05em' }}
            >
              FIT, NOT
              <span className="block mt-1 lg:mt-2" style={{ color: 'var(--color-accent)' }}>
                FILTERS.
              </span>
            </h1>
          </div>

          {/* Decorative dots — desktop only */}
          <div className="hidden lg:flex gap-1 mb-3 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
            ))}
          </div>

          {/* Subheadline */}
          <p className="text-xs lg:text-base text-gray-300 mb-6 leading-relaxed font-mono opacity-80">
            Upload a photo and see how clothes fit your body — realistically.
          </p>

          {/* Waitlist form */}
          <div className="liquid-glass">
            <WaitlistForm />
            <p className="mt-3 text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
              Limited rollout while we refine fit accuracy.
            </p>
          </div>

          {/* Bottom notation — desktop only */}
          <div className="hidden lg:flex items-center gap-2 mt-6 opacity-40">
            <span className="text-white text-[9px] font-mono">∞</span>
            <div className="flex-1 h-px bg-white" />
            <span className="text-white text-[9px] font-mono">FYTLO VTO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
