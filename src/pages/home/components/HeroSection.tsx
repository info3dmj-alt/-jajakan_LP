
import { useState } from 'react';

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20traditional%20Japanese%20jajamen%20noodles%20bowl%20with%20miso%20sauce%2C%20fresh%20cucumber%20slices%2C%20green%20onions%2C%20and%20flat%20wheat%20noodles%20arranged%20artistically%20before%20mixing%2C%20warm%20brown%20wooden%20table%20background%2C%20traditional%20Japanese%20restaurant%20atmosphere%2C%20soft%20natural%20lighting%2C%20appetizing%20food%20photography%20style%2C%20rustic%20and%20authentic%20presentation&width=1920&height=1080&seq=hero-jajamen&orientation=landscape"
          alt="盛岡じゃじゃ麺"
          className="w-full h-full object-cover object-top"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="text-left text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-amber-200">自分で完成させる、</span>
            <span className="block text-red-400">盛岡名物じゃじゃ麺</span>
          </h1>
          
          <div className="space-y-4 mb-8 text-lg md:text-xl lg:text-2xl">
            <p className="text-amber-100 font-medium">
              "育てる麺"で見つける、あなただけの最強ブレンド
            </p>
            <p className="text-gray-200">
              千葉・津田沼で味わう本格盛岡じゃじゃ麺
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => scrollToSection('how-to-eat')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              食べ方ガイドを見る
            </button>
            <a
              href="https://instagram.com/jajakan1030"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer text-center"
            >
              <i className="ri-instagram-line mr-2"></i>
              Instagram @jajakan1030 をフォロー
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
