import AboutSection from '../components/AboutSection.jsx';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';

function About() {
  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Profile</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Engineering consultant profile with industry and research exposure.
          </h1>
        </div>
      </section>
      <AboutSection />
      <ExperienceTimeline />
    </>
  );
}

export default About;
