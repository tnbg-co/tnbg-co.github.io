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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-32% 0px -52% 0px', threshold: [0.12, 0.28, 0.44] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [hash, pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 py-3 transition-all duration-700 ease-out sm:px-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/50 px-4 py-3 backdrop-blur-2xl transition-all duration-700 ease-out sm:px-5 lg:px-6 ${
          isScrolled
            ? 'bg-slate-50/70 shadow-2xl shadow-indigo-950/15'
            : 'bg-slate-50/55 shadow-xl shadow-indigo-950/5'
        }`}
      >
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Rishabh Dubey home">
          <img src="/logo.png" alt="The Nagendra Bala Group" className="h-10 w-10 rounded-2xl shadow-lg shadow-indigo-950/10" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-900">The Nagendra Bala Group</span>
            <span className="block text-xs text-slate-500">Industrial Automation & IoT Consulting</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-2xl border border-blue-100/40 bg-slate-100/35 p-1 shadow-inner shadow-white/20 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-500 ease-out hover:bg-slate-50/70 hover:text-slate-900 ${
                activeSection === item.id
                  ? 'bg-slate-50/80 text-slate-900 shadow-lg shadow-indigo-950/5'
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/50 bg-slate-50/55 text-slate-700 shadow-lg shadow-indigo-950/5 backdrop-blur-xl transition-all duration-300 hover:bg-slate-50/75 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/50 bg-slate-50/75 px-4 py-4 shadow-2xl shadow-indigo-950/10 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
                className={`rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-500 ease-out ${
                  activeSection === item.id
                    ? 'bg-slate-50 text-slate-900 shadow-lg shadow-indigo-950/5'
                    : 'text-slate-700 hover:bg-slate-50/70'
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
