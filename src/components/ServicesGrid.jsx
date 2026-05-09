import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/profile.js';

function ServicesGrid({ compact = false }) {
  const visibleServices = compact ? services.slice(0, 5) : services;

  return (
    <section id="services" className="scroll-section section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Consulting services for technical teams and industrial projects."
          description="Business-oriented support for organizations that need engineering judgment, structured execution, and practical automation expertise."
        />

        <div className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card group animate-on-scroll">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 shadow-xl shadow-indigo-950/20 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:from-slate-900 group-hover:via-indigo-950 group-hover:to-slate-950 group-hover:shadow-indigo-500/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
