import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Rishabh Dubey home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white shadow-sm">
            RD
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-950">Rishabh Dubey</span>
            <span className="block text-xs text-slate-500">Engineering Consultant</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-sky-700 ${
                  isActive ? 'text-sky-700' : 'text-slate-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? 'bg-sky-50 text-sky-800' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
