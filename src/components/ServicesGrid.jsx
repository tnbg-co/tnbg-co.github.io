import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/profile.js';

function ServicesGrid({ compact = false }) {
  const visibleServices = compact ? services.slice(0, 5) : services;

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Consulting services for technical teams and industrial projects."
          description="Business-oriented support for organizations that need engineering judgment, structured execution, and practical automation expertise."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card group animate-on-scroll">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white transition-colors group-hover:bg-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{service.title}</h3>
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
