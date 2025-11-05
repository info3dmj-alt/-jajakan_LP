
export default function StoreInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            店舗情報
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Store Information */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">じゃじゃかん</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-700">千葉県習志野市 大久保商店街</p>
                    <p className="text-sm text-gray-600">（詳細は店舗確認後記載）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-phone-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-800">電話</p>
                    <p className="text-gray-700">[店舗確認後記載]</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-800">営業時間</p>
                    <p className="text-gray-700">[店舗確認後記載]</p>
                    <p className="text-sm text-red-600">（売り切れ次第終了の場合あり）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-calendar-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-800">定休日</p>
                    <p className="text-gray-700">[店舗確認後記載]</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-car-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-800">駐車場</p>
                    <p className="text-gray-700">[店舗確認後記載]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Information */}
            <div className="bg-red-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-red-800 mb-4">
                <i className="ri-train-line mr-2"></i>
                アクセス
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">最寄り駅</p>
                  <p className="text-gray-700">JR総武線 津田沼駅 / 京成大久保駅</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">所在地</p>
                  <p className="text-gray-700">大久保商店街内</p>
                </div>
              </div>
            </div>

            {/* Instagram Info */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-8 text-center">
              <h4 className="text-xl font-bold mb-4">
                <i className="ri-instagram-line mr-2"></i>
                最新情報・営業状況
              </h4>
              <p className="mb-4">Instagram @jajakan1030 でチェック！</p>
              <a
                href="https://instagram.com/jajakan1030"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                @jajakan1030 をフォロー
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              {/* 津田沼駅・大久保商店街周辺のGoogleマップ */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8!2d140.0209!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022843d8b0d0d0d%3A0x0!2z5aSn5LmF5L-d5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="じゃじゃかん 地図"
              ></iframe>
            </div>
            
            {/* Google Mapsで開くボタン */}
            <div className="text-center">
              <a
                href="https://www.google.com/maps/search/大久保商店街+習志野市/@35.6762,140.0209,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                <i className="ri-map-2-line mr-2 text-xl"></i>
                Googleマップで開く
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">大久保商店街でお待ちしております</p>
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20shopping%20street%20with%20warm%20lighting%2C%20local%20shops%20and%20restaurants%2C%20cozy%20neighborhood%20atmosphere%2C%20evening%20scene%20with%20lanterns%2C%20authentic%20Japanese%20commercial%20district%20ambiance&width=500&height=300&seq=shopping-street&orientation=landscape"
                alt="大久保商店街"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
