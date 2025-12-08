import InstagramReelEmbed from './InstagramReelEmbed';

export default function StoreInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            店舗情報
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Map, Store Info, Access */}
          <div className="flex flex-col space-y-6">
            {/* Google Map */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
              <iframe
                src="https://www.google.com/maps?q=275-0011+千葉県習志野市大久保3-15-2&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="じゃじゃかん 地図"
              ></iframe>
            </div>

            {/* Store Information */}
            <div className="bg-amber-50 rounded-xl p-6 lg:p-8 flex-1">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>盛岡じゃじゃ麺専門店 じゃじゃかん</h3>
              
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-red-600 text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>住所</p>
                    <p className="text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>〒275-0011 千葉県習志野市大久保３丁目１５−２</p>
                    <p className="text-xs lg:text-sm" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>（詳細は店舗確認後記載）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-red-600 text-xl mt-1 flex-shrink-0"></i>
                  <div className="w-full">
                    <p className="font-semibold mb-2 text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>営業時間</p>
                    <div className="space-y-1 text-xs lg:text-sm" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      <p>定休日: 不定休</p>
                      <p>営業時間: 11:00～15:00(L.O 14:30)</p>
                      <p>金/土/祝前日: 17:00～20:00(L.O 19:30)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Information */}
            <div className="bg-red-50 rounded-xl p-6 lg:p-8 flex-1">
              <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                <i className="ri-train-line mr-2"></i>
                アクセス
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>最寄り駅</p>
                  <p className="text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>JR総武線 津田沼駅 / 京成大久保駅</p>
                </div>
                <div>
                  <p className="font-semibold text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>所在地</p>
                  <p className="text-sm lg:text-base" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>千葉県習志野市大久保3-15-2 一階 (大久保商店街)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instagram Reel Only */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <InstagramReelEmbed reelUrl="https://www.instagram.com/reel/DRQ3K7dk_re/?utm_source=ig_web_copy_link" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
