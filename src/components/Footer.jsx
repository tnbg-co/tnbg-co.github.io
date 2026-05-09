import { Link } from 'react-router-dom';
import { contactDetails } from '../data/profile.js';

function Footer() {
  return (
    <footer className="border-t border-white/50 bg-slate-50/45 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="The Nagendra Bala Group" className="h-10 w-10 rounded-2xl shadow-lg shadow-indigo-950/10" />
            <span>
              <span className="block font-semibold text-slate-900">The Nagendra Bala Group</span>
              <span className="block text-sm text-slate-500">Industrial Automation & IoT Consulting</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
            Engineering support for automation, instrumentation, object detection, troubleshooting, and project
            execution.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-600">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>{item.value}</span>
              </>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="flex gap-3 transition-colors duration-300 hover:text-blue-800">
                {content}
              </a>
            ) : (
              <div key={item.label} className="flex gap-3">
                {content}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-white/50 bg-slate-50/25 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} The Nagendra Bala Group. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
