import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', id: 'home', path: '/#home' },
  { label: 'About', id: 'about', path: '/#about' },
  { label: 'Experience', id: 'experience', path: '/#experience' },
  { label: 'Services', id: 'services', path: '/#services' },
  { label: 'Contact', id: 'contact', path: '/#contact' },
];

function Navbar() {
  const { hash, pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(hash.replace('#', '') || 'home');
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    let frameId;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      const containingSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
      });

      if (containingSection?.id) {
        setActiveSection(containingSection.id);
        return;
      }

      const nearestSection = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return {
            id: section.id,
            distance: Math.abs(rect.top + rect.height / 2 - viewportCenter),
          };
        })
        .sort((a, b) => a.distance - b.distance)[0];

      if (nearestSection?.id) {
        setActiveSection(nearestSection.id);
      }
    };

    const handleViewportChange = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, [hash, pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all duration-300 ease-out sm:px-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-3xl border px-4 py-3 backdrop-blur-2xl transition-all duration-300 ease-out sm:px-5 lg:px-6 ${
          isScrolled
            ? 'border-white/70 bg-white/50 shadow-xl shadow-sky-500/12'
            : 'border-white/50 bg-white/28 shadow-lg shadow-sky-500/5'
        }`}
      >
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Rishabh Dubey home">
          <img src="/logo.png" alt="The Nagendra Bala Group" className="h-10 w-10 rounded-2xl border border-white/60 shadow-lg shadow-sky-500/10" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-900">The Nagendra Bala Group</span>
            <span className="block text-xs text-slate-500">Industrial Automation & IoT Consulting</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/35 p-1 shadow-inner shadow-sky-100/50 backdrop-blur-2xl md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:bg-white/70 hover:text-sky-900 ${
                activeSection === item.id
                  ? 'bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-sky-900 shadow-lg shadow-sky-500/10 backdrop-blur-2xl transition-all duration-300 hover:bg-white/70 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/70 bg-white/55 px-4 py-4 shadow-xl shadow-sky-500/12 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
                className={`rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-300 ease-out ${
                  activeSection === item.id
                    ? 'bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-700 hover:bg-white/60 hover:text-sky-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
