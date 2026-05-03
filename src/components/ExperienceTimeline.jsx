import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/profile.js';

function ExperienceTimeline() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Industry and research work across automation, instrumentation, and AI."
          description="A timeline of project delivery, plant engineering, instrumentation, and research exposure."
        />

        <div className="mt-12 grid gap-6">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.period}`} className="timeline-card animate-on-scroll">
              <div className="hidden md:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-sky-700">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 font-medium text-slate-700">{item.company}</p>
                  </div>
                  <div className="grid gap-2 text-sm text-slate-500 sm:grid-cols-2 lg:min-w-80">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-sky-700" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-sky-700" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
