import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutJajamen from './components/AboutJajamen';
import HowToEat from './components/HowToEat';
import Menu from './components/Menu';
import InstagramSpecial from './components/InstagramSpecial';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <AboutJajamen />
      <HowToEat />
      <Menu />
      <InstagramSpecial />
      <StoreInfo />
      <Footer />
    </div>
  );
}
