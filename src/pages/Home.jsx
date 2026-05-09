import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';
import Hero from '../components/Hero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceTimeline />
      <ServicesGrid compact />
      <section className="px-5 py-16 text-slate-100 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 shadow-2xl shadow-indigo-950/25 backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200/90">Consulting Availability</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Need structured technical support?</h2>
            <p className="mt-3 max-w-2xl text-slate-300/90">
              Get focused help for automation, instrumentation, robotics, object detection, and troubleshooting
              priorities.
            </p>
          </div>
          <Link to="/#contact" className="btn-light">
            Hire Me
          </Link>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Home;
