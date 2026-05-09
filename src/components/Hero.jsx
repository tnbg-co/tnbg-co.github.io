import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expertise, profile } from '../data/profile.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="home" className="scroll-section relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-50/80 via-indigo-100/25 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex rounded-full border border-blue-100/60 bg-slate-50/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-lg shadow-indigo-950/5 backdrop-blur-xl">
            Industrial Automation & IoT
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-slate-700">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Engineering consultant focused on automation, instrumentation, robotics, object detection, and practical
            optimization for industrial systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/918741814358" className="btn-secondary border-teal-200/60 text-teal-700 hover:border-teal-300/80 hover:text-teal-800">
              <FontAwesomeIcon icon={faWhatsapp} />
              Chat on WhatsApp
            </a>
            <Link to="/#services" className="btn-secondary">
              View Services
            </Link>
          </div>

          <div className="reveal-stagger mt-10 grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <div key={item} className="animate-on-scroll flex items-center gap-3 rounded-2xl border border-blue-100/50 bg-slate-50/45 px-4 py-3 text-sm font-medium text-slate-700 shadow-lg shadow-indigo-950/5 backdrop-blur-xl">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animation-delay-150">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 shadow-2xl shadow-indigo-950/25 backdrop-blur-2xl">
            <div
              className="absolute inset-0 opacity-70"
              aria-hidden="true"
            >
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(125,211,252,0.12)_38%,rgba(15,23,42,0)_70%)]" />
            </div>

            <div className="relative space-y-4">
              <div className="rounded-3xl border border-white/15 bg-slate-100/10 p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur-2xl">
                <p className="text-sm text-blue-200/85">Current Focus</p>

                <h3 className="mt-2 text-2xl font-semibold text-slate-100">
                  PLC & Automation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Building reliable industrial automation systems.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/20 bg-slate-100/90 p-4 text-center shadow-xl shadow-indigo-950/15 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-slate-900">5+</p>
                  <p className="text-xs text-slate-500">Years</p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-slate-100/90 p-4 text-center shadow-xl shadow-indigo-950/15 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-slate-900">6</p>
                  <p className="text-xs text-slate-500">Services</p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-slate-100/90 p-4 text-center shadow-xl shadow-indigo-950/15 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-slate-900">5+</p>
                  <p className="text-xs text-slate-500">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
