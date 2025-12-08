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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Store Information */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>盛岡じゃじゃ麺専門店 じゃじゃかん</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>住所</p>
                    <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>〒275-0011 千葉県習志野市大久保３丁目１５−２</p>
                    <p className="text-sm" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>（詳細は店舗確認後記載）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-phone-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>電話</p>
                    <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>[店舗確認後記載]</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-red-600 text-xl mt-1"></i>
                  <div className="w-full">
                    <p className="font-semibold mb-2" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>営業時間</p>
                    <div className="space-y-1 text-sm" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                      <p>月曜日: 11:00～14:30, 16:00～19:00</p>
                      <p className="text-red-600">火曜日: 定休日</p>
                      <p className="text-red-600">水曜日: 定休日</p>
                      <p>木曜日: 11:00～14:30, 16:00～19:00</p>
                      <p>金曜日: 11:00～14:30, 16:00～19:00</p>
                      <p>土曜日: 11:00～14:30, 16:00～19:00</p>
                      <p>日曜日: 11:00～14:30, 16:00～19:00</p>
                    </div>
                    <p className="text-sm text-red-600 mt-2" style={{ fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>（売り切れ次第終了の場合あり）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Information */}
            <div className="bg-red-50 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
                <i className="ri-train-line mr-2"></i>
                アクセス
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>最寄り駅</p>
                  <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>JR総武線 津田沼駅 / 京成大久保駅</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>所在地</p>
                  <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>千葉県習志野市大久保3-15-2 一階 (大久保商店街)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map and Instagram Reel */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=275-0011+千葉県習志野市大久保3-15-2&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="じゃじゃかん 地図"
              ></iframe>
            </div>

            {/* Instagram Reel */}
            <InstagramReelEmbed reelUrl="https://www.instagram.com/reel/DRQ3K7dk_re/?utm_source=ig_web_copy_link" />
          </div>
        </div>
      </div>
    </section>
  );
}
