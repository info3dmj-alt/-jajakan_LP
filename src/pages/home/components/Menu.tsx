
export default function Menu() {
  const menuItems = [
    { size: "ミニ", grams: "200g", price: "700円" },
    { size: "並盛", grams: "300g", price: "850円" },
    { size: "大盛", grams: "400g", price: "850円" },
    { size: "特盛", grams: "500g", price: "950円" }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            お品書き
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Menu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-amber-800 text-white p-4">
              <h3 className="text-xl font-bold text-center">じゃじゃ麺</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="text-center p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-colors duration-300">
                    <h4 className="text-xl font-bold text-amber-900 mb-2">{item.size}</h4>
                    <p className="text-gray-600 mb-2">{item.grams}</p>
                    <p className="text-2xl font-bold text-red-600">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Menu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-red-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">追加メニュー</h3>
            </div>
            <div className="p-6 text-center">
              <div className="inline-block p-6 border-2 border-red-200 rounded-lg">
                <h4 className="text-xl font-bold text-red-800 mb-2">ちーたんたん</h4>
                <p className="text-2xl font-bold text-red-600 mb-2">100円</p>
                <p className="text-sm text-gray-600">（卓上の卵を割ってときスタッフへ）</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-amber-100 rounded-lg p-6 text-center">
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">
                <i className="ri-information-line text-amber-600 mr-2"></i>
                茹で上がりのグラム数です
              </p>
              <p>ちーたんたん用に麺を3-4本と具を少し残しましょう</p>
              <p>お箸はそのまま載せてスタッフに</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
