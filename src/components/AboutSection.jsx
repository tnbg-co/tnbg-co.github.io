import { GraduationCap, MapPinned, Target } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/profile.js';

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: profile.education,
  },
  {
    icon: Target,
    title: 'Technical Strength',
    text: 'Object detection, mobile robotics, radio network optimization, and applied engineering execution.',
  },
  {
    icon: MapPinned,
    title: 'Current Base',
    text: 'Bengaluru, India, with project experience across industrial and research environments.',
  },
];

function AboutSection() {
  return (
    <section id="about" className="scroll-section section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="A practical engineering profile built around reliable execution."
          description={profile.summary}
        />

        <div className="reveal-stagger mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="card animate-on-scroll">
                <div className="soft-icon h-12 w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            );
          })}
        </div>

        <div className="glass-panel reveal-on-scroll mt-8 p-6 md:p-8">
          <p className="text-lg leading-8 text-slate-700">{profile.current}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
