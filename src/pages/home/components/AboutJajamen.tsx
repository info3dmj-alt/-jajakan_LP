
export default function AboutJajamen() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            盛岡名物『じゃじゃ麺』について
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 特徴セクション */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              盛岡名物『じゃじゃ麺』の特徴
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-check-line text-red-600 text-sm"></i>
                </div>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  平たい「うどん」のような麺に特製の肉味噌をのせた料理
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-check-line text-red-600 text-sm"></i>
                </div>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  きゅうりやネギなどの薬味と一緒に混ぜて食べる
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-check-line text-red-600 text-sm"></i>
                </div>
                <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  食べ終わった後は「ちーたんたん」という卵スープで締める
                </p>
              </div>
            </div>
          </div>

          {/* 画像 */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20jajamen%20noodles%20with%20flat%20wheat%20noodles%2C%20miso%20meat%20sauce%2C%20fresh%20cucumber%20slices%2C%20green%20onions%2C%20and%20chopsticks%20on%20wooden%20table%2C%20authentic%20Japanese%20restaurant%20setting%2C%20warm%20lighting%2C%20appetizing%20food%20photography&width=600&height=400&seq=jajamen-features&orientation=landscape"
              alt="盛岡じゃじゃ麺の特徴"
              className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 画像 */}
          <div className="relative lg:order-1">
            <img
              src="https://readdy.ai/api/search-image?query=Historical%20Japanese%20restaurant%20interior%20from%201950s%20era%2C%20traditional%20wooden%20tables%20and%20chairs%2C%20vintage%20atmosphere%2C%20old%20Japanese%20noodle%20shop%20setting%2C%20nostalgic%20ambiance%2C%20warm%20lighting%2C%20historical%20food%20establishment&width=600&height=400&seq=jajamen-history&orientation=landscape"
              alt="盛岡じゃじゃ麺の発祥"
              className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
            />
          </div>

          {/* 発祥セクション */}
          <div className="lg:order-2">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              盛岡じゃじゃ麺の発祥
            </h3>
            <div className="space-y-4">
              <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                昭和29年（1954年）、盛岡市内丸の「白龍」で生まれました。
              </p>
              <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                中国出身の初代店主が、故郷の「炸醤麺（ジャージャー麺）」を日本人の口に合うようにアレンジして誕生したのが盛岡じゃじゃ麺です。
              </p>
              <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                今では盛岡の名物として全国に知られ、多くの人に愛され続けています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
