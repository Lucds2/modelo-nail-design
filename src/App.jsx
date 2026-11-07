import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-aura-black text-gray-100 selection:bg-aura-gold selection:text-aura-black">
      <Navbar />
      <main>
        <Hero />
        
        <Portfolio />
        <Gallery />

        <About />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;