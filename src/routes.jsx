import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="page-loader">Loading profile...</div>}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
