
export default function WhyAddictive() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            なぜ"3回食べるとクセになる"のか?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-medium">
            「最初は？→二回目でお！→三回目でハマる」
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              じゃじゃ麺は<span className="font-bold text-red-600">「3回食べるとクセになる」</span>と言われています。理由は、自分で完成させる料理だから。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-3">🤔</div>
                <h3 className="font-bold text-amber-900 mb-2 text-lg">1回目</h3>
                <p className="text-gray-700">"探りの一杯"</p>
                <p className="text-sm text-gray-600 mt-2">最初は？</p>
              </div>
              
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-3">😊</div>
                <h3 className="font-bold text-amber-900 mb-2 text-lg">2回目</h3>
                <p className="text-gray-700">配合が見えてきて</p>
                <p className="text-sm text-gray-600 mt-2">二回目でお！</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-300">
                <div className="text-4xl mb-3">😍</div>
                <h3 className="font-bold text-red-800 mb-2 text-lg">3回目</h3>
                <p className="text-red-700 font-bold">"最強ブレンド"完成</p>
                <p className="text-sm text-red-600 mt-2">三回目でハマる！</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-red-100 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-4 text-center text-xl">
                <i className="ri-flask-line mr-2"></i>
                仮説→検証→改善のサイクル
              </h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💡</span>
                  </div>
                  <p className="font-medium text-gray-700">仮説</p>
                </div>
                <div className="text-2xl text-amber-600">→</div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="font-medium text-gray-700">検証</p>
                </div>
                <div className="text-2xl text-amber-600">→</div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="font-medium text-gray-700">改善</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              あなただけの<span className="font-bold text-red-600">"正解の味"</span>に出会えます。
            </p>

            <div className="text-center bg-amber-50 rounded-lg p-6">
              <p className="text-xl font-bold text-amber-900 mb-2">
                カスタマイズは<span className="text-red-600 text-2xl">無限大</span> ♾
              </p>
              <p className="text-gray-700">
                自分好みが見つかればあなたも<span className="font-bold text-red-600">「上級者」</span>。
              </p>
              <p className="text-lg font-medium text-amber-900 mt-4">
                ぜひ当店で、最強ブレンドを見つけてください！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
