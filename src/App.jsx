import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/DSA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader show={loading} />
      {!loading && (
        <div className="min-h-screen" style={{ background: '#FAFAF7' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
