
export default function WhyAddictive() {
  const stages = [
    {
      stage: "1回目",
      title: "探りの一杯",
      description: "「最初は？」",
      icon: "🤔",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      stage: "2回目",
      title: "配合が見えてくる",
      description: "「二回目でお！」",
      icon: "😊",
      color: "bg-orange-100 border-orange-300"
    },
    {
      stage: "3回目",
      title: "最強ブレンド完成",
      description: "「三回目でハマる」",
      icon: "😍",
      color: "bg-red-100 border-red-300"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            なぜ"3回食べるとクセになる"のか？
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              じゃじゃ麺は「3回食べるとクセになる」と言われています。理由は、<strong className="text-red-600">自分で完成させる料理</strong>だから。
            </p>
            <div className="text-2xl md:text-3xl font-bold text-amber-900 mb-8">
              「最初は？→二回目でお！→三回目でハマる」
            </div>
          </div>

          {/* Stages */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stages.map((stage, index) => (
              <div key={index} className={`${stage.color} border-2 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300`}>
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{stage.stage}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{stage.title}</h4>
                <p className="text-red-600 font-bold">{stage.description}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-amber-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">
              仮説→検証→改善のサイクル
            </h3>
            <div className="flex items-center justify-center space-x-4 text-center">
              <div className="flex-1">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-lightbulb-line text-2xl"></i>
                </div>
                <p className="font-semibold">仮説</p>
              </div>
              <i className="ri-arrow-right-line text-2xl text-gray-400"></i>
              <div className="flex-1">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-search-line text-2xl"></i>
                </div>
                <p className="font-semibold">検証</p>
              </div>
              <i className="ri-arrow-right-line text-2xl text-gray-400"></i>
              <div className="flex-1">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-refresh-line text-2xl"></i>
                </div>
                <p className="font-semibold">改善</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              あなただけの"正解の味"に出会えます。カスタマイズは<strong className="text-amber-800">無限大♾</strong> 自分好みが見つかればあなたも「上級者」。
            </p>
            <p className="text-xl font-bold text-red-600">
              ぜひ当店で、最強ブレンドを見つけてください！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
