import { ArrowRight, CheckCircle2, CircuitBoard, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expertise, profile } from '../data/profile.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-50 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-fade-up">
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-slate-700">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Engineering consultant focused on automation, instrumentation, robotics, object detection, and practical
            optimization for industrial systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/918741814358" className="btn-secondary" style={{ borderColor: '#128C7E', color: '#128C7E' }}>
              <FontAwesomeIcon icon={faWhatsapp} />
              Chat on WhatsApp
            </a>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animation-delay-150">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-6 shadow-xl">
            <div
              className="absolute inset-0 opacity-30"
              aria-hidden="true"
            >
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.14),transparent_30%)]" />
            </div>

            <div className="relative space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-sky-200">Current Focus</p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  PLC & Automation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Building reliable industrial automation systems.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">5+</p>
                  <p className="text-xs text-slate-500">Years</p>
                </div>

                <div className="rounded-xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">6</p>
                  <p className="text-xs text-slate-500">Services</p>
                </div>

                <div className="rounded-xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">5+</p>
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
