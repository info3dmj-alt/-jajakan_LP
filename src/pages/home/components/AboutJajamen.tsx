
export default function AboutJajamen() {
  return (
    <section className="py-16 bg-amber-50">
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
              もちもち食感の平打ち麺に"じゃじゃ味噌"と薬味（きゅうり・ネギ）を乗せ、自分好みの調味料で仕上げる<strong className="text-red-600">「育てる麺」</strong>。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              味噌をベースに、ひき肉・胡麻・椎茸など十数種類の材料を炒めて寝かせた<strong className="text-amber-800">秘伝の味噌</strong>が特徴。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              まずは素の味を確かめ、少量ずつ調味料を足して色が変わるまでしっかり混ぜるのがコツ。最後は生卵と茹で汁で作る<strong className="text-red-600">『ちーたんたん』</strong>で、ふわっと優しい余韻を。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://readdy.ai/api/search-image?query=Japanese%20chef%20preparing%20jajamen%20noodles%20in%20traditional%20kitchen%2C%20mixing%20miso%20sauce%20with%20ingredients%2C%20professional%20cooking%20scene%2C%20warm%20lighting%2C%20authentic%20Japanese%20restaurant%20kitchen%20atmosphere%2C%20detailed%20food%20preparation%20process&width=400&height=300&seq=cooking-1&orientation=landscape"
                alt="じゃじゃ麺調理シーン1"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%20of%20jajamen%20miso%20sauce%20being%20mixed%20with%20fresh%20ingredients%2C%20cucumber%20and%20green%20onions%2C%20traditional%20Japanese%20cooking%20process%2C%20warm%20brown%20tones%2C%20appetizing%20food%20photography&width=400&height=300&seq=cooking-2&orientation=landscape"
                alt="じゃじゃ麺調理シーン2"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:mt-8">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20jajamen%20noodles%20being%20served%20in%20authentic%20ceramic%20bowl%2C%20steam%20rising%2C%20beautiful%20presentation%20with%20miso%20sauce%20and%20fresh%20vegetables%2C%20restaurant%20setting%2C%20professional%20food%20photography&width=400&height=400&seq=cooking-3&orientation=squarish"
                alt="じゃじゃ麺調理シーン3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
