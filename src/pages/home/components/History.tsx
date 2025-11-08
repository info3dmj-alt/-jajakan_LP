
export default function History() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            盛岡じゃじゃ麺の発祥
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                盛岡じゃじゃ麺のルーツは、中国の家庭料理<span className="font-bold text-amber-900">「炸醤麺（ジャージャー麺）」</span>。
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                終戦後、<span className="font-bold text-amber-900">白龍（パイロン）本店の創業者・故高階貫勝氏</span>が盛岡の屋台で再現したことが始まりと言われています。
              </p>

              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
                <p className="text-gray-700 leading-relaxed">
                  盛岡人の口に合うようにアレンジを重ね、独特の風味を持つ<span className="font-bold text-red-600">「じゃじゃ麺」</span>が完成しました。
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                現在では<span className="font-bold text-red-600">盛岡三大麺のひとつ</span>として、たくさんの方に愛されています。
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Morioka%20jajamen%20restaurant%20exterior%2C%20retro%20Japanese%20street%20food%20shop%20facade%2C%20nostalgic%20atmosphere%2C%20Iwate%20prefecture%20style&width=600&height=400&seq=history1&orientation=landscape"
                alt="盛岡の伝統的なじゃじゃ麺店"
                className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-gradient-to-r from-amber-100 to-red-100 rounded-lg p-4">
                <p className="text-center text-amber-900 font-medium">
                  <i className="ri-map-pin-line mr-2"></i>
                  盛岡三大麺：わんこそば・冷麺・じゃじゃ麺
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              <i className="ri-store-2-line mr-2"></i>
              当店「じゃじゃかん」について
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              その伝統の味を<span className="font-bold text-red-600">千葉・津田沼</span>で再現。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              大久保商店街で、<span className="font-bold text-amber-900">本格盛岡じゃじゃ麺</span>をお楽しみいただけます。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-lg px-6 py-3">
              <i className="ri-map-pin-2-fill text-red-600 text-xl"></i>
              <span className="font-bold text-amber-900">千葉県習志野市 大久保商店街</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
