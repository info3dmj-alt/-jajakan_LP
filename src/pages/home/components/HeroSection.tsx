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
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source 
            src={isMobile ? `${basePath}videos/jajakan-hero-mobile.mp4` : `${basePath}videos/jajakan-hero-desktop.mp4`} 
            type="video/mp4" 
          />
        </video>
      </div>

      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white p-2"
        aria-label="下にスクロール"
        type="button"
      >
        <i className="ri-arrow-down-line text-2xl" aria-hidden="true"></i>
      </button>
    </section>
  );
}
