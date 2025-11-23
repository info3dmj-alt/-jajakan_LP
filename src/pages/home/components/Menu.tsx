
export default function Menu() {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(241, 237, 230)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            お品書き
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* じゃじゃ麺メニュー */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-4">
              <h3 className="text-xl font-bold text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>じゃじゃ麺</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    ミニ
                  </h4>
                  <p className="mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    200g
                  </p>
                  <p className="text-2xl font-bold" style={{ color: '#44413C' }}>700円</p>
                </div>

                <div className="text-center p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    並盛
                  </h4>
                  <p className="mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    300g
                  </p>
                  <p className="text-2xl font-bold" style={{ color: '#44413C' }}>850円</p>
                </div>

                <div className="text-center p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    大盛
                  </h4>
                  <p className="mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    400g
                  </p>
                  <p className="text-2xl font-bold" style={{ color: '#44413C' }}>850円</p>
                </div>

                <div className="text-center p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    特盛
                  </h4>
                  <p className="mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    500g
                  </p>
                  <p className="text-2xl font-bold" style={{ color: '#44413C' }}>950円</p>
                </div>
              </div>
            </div>
          </div>

          {/* 追加メニュー */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-4">
              <h3 className="text-xl font-bold text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>追加メニュー</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-block p-6 border-2 border-red-200 rounded-lg">
                  <h4 className="text-xl font-bold text-red-800 mb-2">ちーたんたん</h4>
                  <p className="text-2xl font-bold mb-2" style={{ color: '#44413C' }}>100円</p>
                  <p className="text-sm" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                    （卓上の卵を割ってときスタッフへ）
                  </p>
                </div>
              </div>
              
              {/* ちーたんたんの作り方 */}
              <div className="rounded-lg p-6" style={{ backgroundColor: 'rgb(241, 237, 230)' }}>
                <h4 className="text-lg font-bold mb-4 text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  ちーたんたんの作り方
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">1</div>
                    <p className="text-xs" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      麺を2-3本と具を少し残す
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">2</div>
                    <p className="text-xs" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      卓上の生卵を割り入れてよく混ぜる
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">3</div>
                    <p className="text-xs" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      箸を載せたまま「ちーたんお願いします！」
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">4</div>
                    <p className="text-xs" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      茹で汁が注がれ、ネギ＆味噌で整う
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-2">5</div>
                    <p className="text-xs" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      塩・こしょうで仕上げて完成
                    </p>
                  </div>
                </div>
                <p className="text-center font-bold mt-4 text-sm" style={{ color: '#BD2A2B', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                  ちーたんまでがじゃじゃ麺です！
                </p>
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="rounded-lg p-6 text-center" style={{ backgroundColor: 'rgb(241, 237, 230)' }}>
            <div className="space-y-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
              <p>ちーたんたん用に麺を3-4本と具を少し残しましょう</p>
              <p>お箸はそのまま載せてスタッフに</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
