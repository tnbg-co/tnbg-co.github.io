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
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Consulting Availability</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Need structured technical support?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Get focused help for automation, instrumentation, robotics, object detection, and troubleshooting
              priorities.
            </p>
          </div>
          <Link to="/contact" className="btn-light">
            Hire Me
          </Link>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Home;
