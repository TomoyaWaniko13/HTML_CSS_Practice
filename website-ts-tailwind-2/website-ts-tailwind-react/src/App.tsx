import Navbar from './components/Navbar.tsx';
import { WindowWidth } from './components/WindowWidth.tsx';
import Hero from './components/Hero.tsx';
import NekoExplanation from './components/NekoExplanation.tsx';
import Newsletter from './components/Newsletter.tsx';
import Cards from './components/Cards.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <>
      <WindowWidth />
      <Navbar />
      <Hero />
      <NekoExplanation />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}
