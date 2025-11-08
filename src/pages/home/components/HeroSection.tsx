import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const video = document.querySelector('video');
    if (video) {
      video.muted = !isMuted;
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src="/-jajakan_LP/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="md:hidden absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
          alt="じゃじゃ麺"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <button
        onClick={toggleMute}
        className="hidden md:block absolute top-8 right-8 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label={isMuted ? '音声をオンにする' : '音声をオフにする'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-amber-200">心を込めた、</span>
          <span className="block text-red-400">本格的な味わい</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200">
          津田沼・奥保ショッピングセンター内
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            メニューを見る
          </a>
          <a
            href="#store-info"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            店舗情報
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
