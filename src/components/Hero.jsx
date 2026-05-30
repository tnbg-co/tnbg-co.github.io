import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="home" className="scroll-section relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-100/70 via-cyan-100/35 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-up mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-sky-800 sm:text-2xl">{profile.role}</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Engineering consultant focused on automation, instrumentation, robotics, object detection, and practical
            optimization for industrial systems.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/918741814358" className="btn-primary hero-action border-teal-300/70 from-emerald-500 via-teal-500 to-cyan-600 hover:border-teal-100 hover:from-emerald-400 hover:via-teal-500 hover:to-blue-500">
              <FontAwesomeIcon icon={faWhatsapp} />
              Chat on WhatsApp
            </a>
            <Link to="/#services" className="btn-secondary hero-action">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
