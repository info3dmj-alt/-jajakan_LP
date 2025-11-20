export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
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
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [videoLoaded]);

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="ヒーローセクション">
      {/* 動画背景 */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source 
  src={isMobile ? `${basePath}videos/jajakan-hero-mobile.mp4` : `${basePath}videos/jajakan-hero-desktop.mp4`} 
  type="video/mp4" 
/>
        </video>
      </div>

      {/* 和風額縁効果（二重枠） */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* 外枠（ダークグレー） */}
        <div 
          className="absolute inset-0 border-[20px] sm:border-[28px] md:border-[40px] lg:border-[52px]"
          style={{ borderColor: '#44413C' }}
        />
        {/* 中間層（クリーム） */}
        <div 
          className="absolute inset-[20px] sm:inset-[28px] md:inset-[40px] lg:inset-[52px] border-[6px] sm:border-[8px] md:border-[10px] lg:border-[12px]"
          style={{ borderColor: '#FBF7EF' }}
        />
        {/* 内枠（ネイビーアクセント） */}
        <div 
          className="absolute inset-[26px] sm:inset-[36px] md:inset-[50px] lg:inset-[64px] border-[2px] sm:border-[3px] md:border-[4px]"
          style={{ borderColor: '#3C4A6C' }}
        />
        {/* 外側の影効果 */}
        <div className="absolute inset-0 shadow-2xl pointer-events-none" />
      </div>

      {/* スクロールボタン */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white p-2 z-20"
        aria-label="下にスクロール"
        type="button"
      >
        <i className="ri-arrow-down-line text-2xl" aria-hidden="true"></i>
      </button>
    </section>
  );
}
