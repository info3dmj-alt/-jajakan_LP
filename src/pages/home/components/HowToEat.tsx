
export default function HowToEat() {
  const steps = [
    {
      number: "01",
      title: "まずは素の味を楽しむ",
      description: "麺と味噌を軽く混ぜ、素材のままの味をお楽しみください。箸とレンゲを使うと混ぜやすいです。",
      image: "https://readdy.ai/api/search-image?query=Jajamen%20noodles%20before%20mixing%2C%20showing%20separate%20miso%20sauce%2C%20flat%20wheat%20noodles%2C%20cucumber%20and%20green%20onions%20in%20traditional%20Japanese%20bowl%2C%20clean%20presentation%2C%20natural%20lighting%2C%20food%20photography%20style&width=400&height=300&seq=step1&orientation=landscape"
    },
    {
      number: "02",
      title: "調味料でカスタマイズ",
      description: "少しずつ味見しながら微調整。色が変わるまでよく混ぜましょう！",
      image: "https://readdy.ai/api/search-image?query=Jajamen%20noodles%20being%20mixed%20with%20chopsticks%2C%20showing%20the%20mixing%20process%20with%20miso%20sauce%20and%20seasonings%2C%20dynamic%20action%20shot%2C%20traditional%20Japanese%20restaurant%20setting&width=400&height=300&seq=step2&orientation=landscape"
    },
    {
      number: "03",
      title: "〆は『ちーたんたん』",
      description: "麺を2-3本と具を少し残し、生卵を割り入れて茹で汁を注いでもらいます。",
      image: "https://readdy.ai/api/search-image?query=Chitantan%20soup%20in%20small%20Japanese%20bowl%20with%20egg%20and%20hot%20broth%2C%20steam%20rising%2C%20traditional%20ceramic%20bowl%2C%20warm%20lighting%2C%20comfort%20food%20photography%20style&width=400&height=300&seq=step3&orientation=landscape"
    }
  ];

  const customizations = [
    {
      level: "王道（初級）",
      ingredients: "ラー油ひと振り + こしょう小さじ1/2",
      mood: "🔰"
    },
    {
      level: "サッパリ派（初級）",
      ingredients: "酢小さじ1 + しょうが少々",
      mood: "🌿"
    },
    {
      level: "ガッツリいきたい（初級）",
      ingredients: "酢小さじ1 + にんにく少し + ラー油数滴",
      mood: "🔥"
    }
  ];

  return (
    <section id="how-to-eat" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            じゃじゃ麺の楽しみ方 3STEP
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover object-top rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Customization Guide */}
        <div className="bg-amber-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            今日のあなたの気分は？カスタマイズ例
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {customizations.map((custom, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">{custom.mood}</div>
                  <h4 className="font-bold text-amber-900 mb-3">{custom.level}</h4>
                  <p className="text-gray-700">{custom.ingredients}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-amber-900 mb-3">調味料はどれから？</h4>
              <p className="text-gray-700">まずは酢を少量、次にラー油・にんにくを様子見で。</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-amber-900 mb-3">どれくらい混ぜる？</h4>
              <p className="text-gray-700">色が変わるまでしっかり！</p>
            </div>
          </div>
        </div>

        {/* Chitantan Instructions */}
        <div className="mt-12 bg-red-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
            〆は『ちーたんたん』の作り方
          </h3>
          <div className="grid md:grid-cols-5 gap-4 text-center mb-6">
            {[
              "麺を2-3本と具を少し残す",
              "丼に生卵を割り入れてよく混ぜる",
              "箸を載せたまま「ちーたんお願いします！」とお声がけ",
              "茹で汁が注がれ、ネギ＆味噌で整う",
              "塩・こしょうで仕上げて完成"
            ].map((instruction, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700">{instruction}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-red-800 font-bold">
            ちーたんまでがじゃじゃ麺です。まずはお試しください！
          </p>
        </div>
      </div>
    </section>
  );
}
