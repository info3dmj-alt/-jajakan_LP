
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
    <section className="py-16 bg-white relative">
      {/* 装飾的な円形要素 */}
      <div className="absolute inset-0 opacity-10" style={{ color: '#FFFFFF', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            なぜ"3回食べるとクセになる"のか？
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              じゃじゃ麺は「3回食べるとクセになる」と言われています。理由は、<strong className="text-red-600">自分で完成させる料理</strong>だから。
            </p>
            <div className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
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

          {/* 3回食べるとクセになる理由の詳細説明 */}
          <div className="bg-amber-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">
              なぜ3回なのか？
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>最初は？</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>
                  初めての味に戸惑い、食べ方がわからない
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>二回目でお！</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>
                  食べ方を覚えて、味の奥深さに気づく
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>三回目でハマる</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>
                  自分好みの味を見つけて完全にハマる
                </p>
              </div>
            </div>
          </div>

          {/* 理由4: 食べ方の自由度 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">食べ方の自由度</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'YuMincho, "Yu Mincho", serif', color: '#44413C' }}>
              じゃじゃ麺は混ぜ方、食べるペース、追加する調味料など、すべてがあなた次第。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-restaurant-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>混ぜ方</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>少しずつ？一気に？</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>ペース</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>ゆっくり？素早く？</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-add-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#44413C' }}>調味料</h4>
                <p className="text-sm" style={{ color: '#44413C' }}>お好みで追加</p>
              </div>
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
