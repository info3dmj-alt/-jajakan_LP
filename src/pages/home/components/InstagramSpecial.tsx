
export default function InstagramSpecial() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🎁 フォローで『ちーたんたん』無料！
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Instagramで <strong className="text-yellow-300">@jajakan1030</strong> をフォローして、店頭でフォロー画面を見せるだけ！
            </p>
            <p className="text-lg mb-8">
              通常100円の「ちーたんたん」が<span className="text-yellow-300 font-bold text-2xl">無料</span>でお楽しみいただけます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://instagram.com/jajakan1030"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer text-center"
              >
                <i className="ri-instagram-line mr-2"></i>
                Instagram @jajakan1030 をフォロー
              </a>
            </div>

            <p className="text-sm opacity-90">
              <i className="ri-music-2-line mr-2"></i>
              店内ではオリジナルBGMを流しています🎵 音ありで楽しんでください。
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-2xl inline-block">
              <h3 className="text-gray-800 font-bold text-xl mb-4">QRコードでフォロー</h3>
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-center text-gray-600">
                  <i className="ri-qr-code-line text-6xl mb-2"></i>
                  <p className="text-sm">QRコード</p>
                  <p className="text-xs">@jajakan1030</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                スマホでスキャンして<br />すぐフォロー可能
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
