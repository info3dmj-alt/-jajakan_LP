
export default function HowToEat() {
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
                src="https://readdy.ai/api/search-image?query=Jajamen%20noodles%20before%20mixing%2C%20showing%20separate%20miso%20sauce%2C%20flat%20wheat%20noodles%2C%20cucumber%20and%20green%20onions%20in%20traditional%20Japanese%20bowl%2C%20clean%20presentation%2C%20natural%20lighting%2C%20food%20photography%20style&width=400&height=300&seq=step1&orientation=landscape"
                alt="まずは素の味を楽しむ"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
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
                src="https://readdy.ai/api/search-image?query=Jajamen%20noodles%20being%20mixed%20with%20chopsticks%2C%20showing%20the%20mixing%20process%20with%20miso%20sauce%20and%20seasonings%2C%20dynamic%20action%20shot%2C%20traditional%20Japanese%20restaurant%20setting&width=400&height=300&seq=step2&orientation=landscape"
                alt="調味料でカスタマイズ"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg overflow-hidden">
                {/* 背景GIF */}
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}images/ohdo.gif`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 半透明オーバーレイ */}
                <div className="absolute inset-0 bg-red-600 opacity-60"></div>
                {/* ステップ番号 */}
                <span className="relative z-10 text-white">02</span>
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
                src="https://readdy.ai/api/search-image?query=Chitantan%20soup%20in%20small%20Japanese%20bowl%20with%20egg%20and%20hot%20broth%2C%20steam%20rising%2C%20traditional%20ceramic%20bowl%2C%20warm%20lighting%2C%20comfort%20food%20photography%20style&width=400&height=300&seq=step3&orientation=landscape"
                alt="〆は『ちーたんたん』"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
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
