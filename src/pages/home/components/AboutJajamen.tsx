
export default function AboutJajamen() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            盛岡名物『じゃじゃ麺』の特徴
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              もちもち食感の平打ち麺に<span className="font-bold text-amber-900">"じゃじゃ味噌"</span>と薬味（きゅうり・ネギ）を乗せ、自分好みの調味料で仕上げる<span className="font-bold text-red-600">"育てる麺"</span>。
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              味噌をベースに、ひき肉・胡麻・椎茸など十数種類の材料を炒めて寝かせた<span className="font-bold text-amber-900">秘伝の味噌</span>が特徴です。
            </p>

            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">
                <i className="ri-lightbulb-line mr-2"></i>
                美味しく食べるコツ
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">1.</span>
                  <span>まずは素の味を確かめる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">2.</span>
                  <span>少量ずつ調味料を足す</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">3.</span>
                  <span>色が変わるまでしっかり混ぜる</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              最後は生卵と茹で汁で作る<span className="font-bold text-red-600">『ちーたんたん』</span>で、ふわっと優しい余韻を。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=Close%20up%20of%20Japanese%20jajamen%20miso%20sauce%20being%20prepared%20in%20traditional%20wok%2C%20cooking%20process%2C%20steam%20rising%2C%20professional%20kitchen%20atmosphere&width=400&height=300&seq=cooking1&orientation=landscape"
              alt="じゃじゃ味噌の調理"
              className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Fresh%20flat%20wheat%20noodles%20being%20boiled%20in%20large%20pot%2C%20Japanese%20restaurant%20kitchen%2C%20steamy%20atmosphere%2C%20authentic%20noodle%20making&width=400&height=300&seq=cooking2&orientation=landscape"
              alt="麺の茹で上げ"
              className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Plating%20jajamen%20noodles%20with%20miso%20sauce%20and%20fresh%20toppings%2C%20chef%20hands%20arranging%20cucumber%20and%20green%20onions%2C%20professional%20presentation&width=400&height=300&seq=cooking3&orientation=landscape"
              alt="盛り付けの様子"
              className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Finished%20jajamen%20bowl%20with%20colorful%20toppings%20ready%20to%20serve%2C%20traditional%20Japanese%20ceramic%20bowl%2C%20appetizing%20presentation%2C%20warm%20restaurant%20lighting&width=400&height=300&seq=cooking4&orientation=landscape"
              alt="完成したじゃじゃ麺"
              className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
