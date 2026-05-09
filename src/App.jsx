import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const easeInOutCubic = (progress) =>
  progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

const scrollToTarget = (target, duration = 900) => {
  if (!target) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const offset = 112;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - offset;
  const distance = end - start;

  if (prefersReducedMotion) {
    window.scrollTo({ top: end });
    return;
  }

  let startTime;

  const step = (timestamp) => {
    startTime ??= timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({ top: start + distance * easeInOutCubic(progress) });

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => scrollToTarget(document.querySelector(hash)));
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.animate-on-scroll, .reveal-on-scroll');

    if (!revealItems.length) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -14% 0px', threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#f7f9fc_0%,#e7edf6_38%,#f4f1eb_100%)] text-slate-900">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(147,197,253,0.28),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(199,210,254,0.24),transparent_28%),radial-gradient(circle_at_56%_88%,rgba(226,232,240,0.72),transparent_34%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.74),rgba(219,234,254,0.18)_42%,rgba(241,245,249,0.64))]"
        aria-hidden="true"
      />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
