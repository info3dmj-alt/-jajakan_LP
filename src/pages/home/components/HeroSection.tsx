import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 動画ソースを設定
    const videoSrc = isMobile 
      ? `${basePath}videos/jajakan-hero-mobile.mp4` 
      : `${basePath}videos/jajakan-hero-desktop.mp4`;
    
    video.src = videoSrc;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // 動画を読み込んで再生を試みる
    const handleLoadedData = async () => {
      try {
        await video.play();
        console.log('✅ Video autoplay succeeded');
      } catch (error) {
        console.warn('⚠️ Video autoplay blocked, waiting for user interaction:', error);
        
        // 自動再生が失敗した場合、ユーザーインタラクションで再生
        const playOnInteraction = async () => {
          try {
            await video.play();
            console.log('✅ Video started after user interaction');
          } catch (err) {
            console.error('❌ Failed to play video:', err);
          }
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('scroll', playOnInteraction);
        };
        
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('scroll', playOnInteraction, { once: true });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.load(); // 明示的に読み込みを開始

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isMobile, basePath]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#3C4A6C]" aria-label="ヒーローセクション">
      {/* 動画背景（内枠の内側に配置） */}
      <div className="absolute inset-[28px] sm:inset-[39px] md:inset-[54px] lg:inset-[68px] z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="auto"
          aria-label="じゃじゃかんのヒーロー動画"
        />
      </div>

      {/* 和風額縁効果（二重枠） - 動画の外側に配置 */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* 外枠（ネイビー） */}
        <div 
          className="absolute inset-0 border-[20px] sm:border-[28px] md:border-[40px] lg:border-[52px]"
          style={{ borderColor: '#3C4A6C' }}
        />
        {/* 中間層（クリーム） */}
        <div 
          className="absolute inset-[20px] sm:inset-[28px] md:inset-[40px] lg:inset-[52px] border-[6px] sm:border-[8px] md:border-[10px] lg:border-[12px]"
          style={{ borderColor: '#FBF7EF' }}
        />
        {/* 内枠（ネイビーアクセント） - 動画を囲む */}
        <div 
          className="absolute inset-[26px] sm:inset-[36px] md:inset-[50px] lg:inset-[64px] border-[2px] sm:border-[3px] md:border-[4px]"
          style={{ borderColor: '#3C4A6C' }}
        />
      </div>

      {/* スクロールボタン */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white p-2 z-20 hover:scale-110 transition-transform"
        aria-label="下にスクロール"
        type="button"
      >
        <i className="ri-arrow-down-line text-2xl" aria-hidden="true"></i>
      </button>
    </section>
  );
}
