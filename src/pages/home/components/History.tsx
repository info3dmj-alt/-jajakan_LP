
export default function History() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            盛岡じゃじゃ麺の発祥
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              盛岡じゃじゃ麺のルーツは、中国の家庭料理<strong className="text-red-600">「炸醤麺（ジャージャー麺）」</strong>。終戦後、白龍（パイロン）本店の創業者・故高階貫勝氏が盛岡の屋台で再現したことが始まりと言われています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              盛岡人の口に合うようにアレンジを重ね、独特の風味を持つ<strong className="text-amber-800">「じゃじゃ麺」</strong>が完成しました。現在では<strong className="text-red-600">盛岡三大麺</strong>のひとつとして、たくさんの方に愛されています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              当店<strong className="text-amber-900">「じゃじゃかん」</strong>は、その伝統の味を千葉・津田沼で再現。大久保商店街で、本格盛岡じゃじゃ麺をお楽しみいただけます。
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20restaurant%20exterior%20with%20warm%20wooden%20facade%2C%20vintage%20signage%2C%20nostalgic%20atmosphere%2C%20old-style%20Japanese%20architecture%2C%20warm%20lighting%2C%20authentic%20local%20restaurant%20ambiance&width=500&height=300&seq=history-1&orientation=landscape"
              alt="伝統的な日本の麺屋"
              className="w-full h-48 object-cover object-top rounded-lg shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Historical%20Japanese%20noodle%20preparation%20scene%2C%20traditional%20cooking%20methods%2C%20vintage%20kitchen%20atmosphere%2C%20authentic%20Japanese%20culinary%20heritage%2C%20warm%20sepia%20tones&width=500&height=300&seq=history-2&orientation=landscape"
              alt="じゃじゃ麺の歴史"
              className="w-full h-48 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <h3 className="text-xl font-bold text-amber-900 mb-4">盛岡三大麺</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-bowl-line text-2xl text-red-600"></i>
                </div>
                <p className="font-semibold text-gray-800">じゃじゃ麺</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-bowl-line text-2xl text-blue-600"></i>
                </div>
                <p className="font-semibold text-gray-800">冷麺</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-bowl-line text-2xl text-green-600"></i>
                </div>
                <p className="font-semibold text-gray-800">わんこそば</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
