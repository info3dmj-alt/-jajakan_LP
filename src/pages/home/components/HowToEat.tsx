
export default function HowToEat() {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <section id="how-to-eat" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            じゃじゃ麺の楽しみ方 3STEP
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="relative mb-6">
              <img
                src={`${baseUrl}images/1-2.png`}
                alt="まずは素の味を楽しむ"
                className="w-full h-48 object-cover object-center rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                style={{ filter: 'brightness(1.02) saturate(0.95)' }}
              />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                01
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              まずは素の味を楽しむ
            </h3>
            <p className="leading-relaxed" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              麺と味噌を軽く混ぜ、素材のままの味をお楽しみください。箸とレンゲを使うと混ぜやすいです。
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <img
                src={`${baseUrl}images/2.webp`}
                alt="調味料でカスタマイズ"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                style={{ filter: 'brightness(1.05) saturate(0.85)' }}
              />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                02
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              調味料でカスタマイズ
            </h3>
            <p className="leading-relaxed" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              少しずつ味見しながら微調整。色が変わるまでよく混ぜましょう！
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
             <img
                src={`${baseUrl}images/3.webp`}
                alt="〆は『ちーたんたん』"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                style={{ filter: 'brightness(1.02) saturate(0.95)' }}
              />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                03
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              〆は『ちーたんたん』
            </h3>
            <p className="leading-relaxed" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              麺を2-3本と具を少し残し、生卵を割り入れて茹で汁を注いでもらいます。
            </p>
          </div>
        </div>

        {/* Customization Examples */}
        <div className="rounded-xl p-8" style={{ backgroundColor: 'rgb(241, 237, 230)' }}>
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            今日のあなたの気分は？カスタマイズ例
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="text-3xl mb-2">🔰</div>
                <h4 className="font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  王道（初級）
                </h4>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  ラー油ひと振り + こしょう小さじ1/2
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="text-3xl mb-2">🌿</div>
                <h4 className="font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  サッパリ派（初級）
                </h4>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  酢小さじ1 + しょうが少々
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <h4 className="font-bold mb-3" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  ガッツリいきたい（初級）
                </h4>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  酢小さじ1 + にんにく少し + ラー油数滴
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
