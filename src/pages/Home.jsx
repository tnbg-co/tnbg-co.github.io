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
      <ContactForm />
    </>
  );
}

export default Home;
