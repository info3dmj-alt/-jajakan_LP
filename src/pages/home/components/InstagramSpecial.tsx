
export default function InstagramSpecial() {
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{color: 'rgb(243, 223, 86)', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif'}}>
            🎁 フォローで『ちーたんたん』無料！
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6" style={{color: '#FFFFFF', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif'}}>
              <p className="text-lg leading-relaxed">
                Instagramで @jajakan1030 をフォローして、店頭でフォロー画面を見せるだけ！
              </p>
              
              <p className="text-xl font-bold bg-white/20 rounded-lg p-4" style={{color: 'rgb(243, 223, 86)', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif'}}>
                通常100円の「ちーたんたん」が無料でお楽しみいただけます。
              </p>
              
              <p className="text-base">
                店内ではオリジナルBGMを流しています🎵 音ありで楽しんでください。
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={`${basePath}images/InstagramQR.webp`}
                alt="Instagram @jajakan1030 QRコード"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                フォロー特典！
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
