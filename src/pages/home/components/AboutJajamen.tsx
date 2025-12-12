export default function AboutJajamen() {
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            盛岡じゃじゃ麺について
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-16">
          {/* 左側: 画像 + 味噌の説明 + 画像 */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="w-full max-w-[584px]">
              <div className="relative w-full" style={{ paddingBottom: '80%' }}>
                <img
                  src={`${basePath}images/1-1.png`}
                  alt="盛岡じゃじゃ麺"
                  className="absolute inset-0 w-full h-full object-contain rounded-xl"
                  style={{ filter: 'brightness(1.05) saturate(0.9)', pointerEvents: 'none', userSelect: 'none' }}
                />
              </div>
            </div>
            
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', maxWidth: '584px', minHeight: '467px', display: 'flex', alignItems: 'center' }} className="text-base md:text-xl lg:text-2xl leading-relaxed md:leading-loose lg:leading-[2.5]">
              味噌ベースに、ひき肉、胡麻、椎茸、その他十数の材料を混ぜ込んで炒め寝かせた、秘伝「じゃじゃ味噌」。もちもちとした食感の茹で上がった熱々の専用麺に、きゅうり、ねぎをトッピング、紅生姜を添えるのがスタンダードなスタイル。おろしニンニクやおろししょうが、食酢、辣油をお好みで加え、豪快に混ぜ合わせていただきます。和風ミートソースのような、盛岡独特の麺文化です。
            </p>
            
            <div className="w-full max-w-[584px]">
              <img
                src={`${basePath}images/1-3.png`}
                alt="ちーたんたん"
                className="w-full rounded-xl"
                style={{ filter: 'brightness(1.05) saturate(0.9)', pointerEvents: 'none', userSelect: 'none' }}
              />
            </div>
          </div>

          {/* 右側: 1段落目 + 画像 + 3段落目 */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', maxWidth: '584px', minHeight: '467px', display: 'flex', alignItems: 'center' }} className="text-base md:text-xl lg:text-2xl leading-relaxed md:leading-loose lg:leading-[2.5]">
              盛岡じゃじゃ麺は、創業約60年、初代・高階貫勝（たかしな かんしょう）が戦前、旧満州で食べてきた炸醤麺をもとに、盛岡の人々の味覚に合わせてアレンジを重ねたことが始まり。屋台から始り、こだわりぬいて造り続け独自の進化を遂た。現在では盛岡のソウルフードとして定着し近年テレビやSNS等でも広く取り上げられ、多くの方に愛されています。
            </p>
            
            <div className="w-full max-w-[584px]">
              <img
                src={`${basePath}images/1-2.png`}
                alt="じゃじゃ麺の特徴"
                className="w-full rounded-xl"
                style={{ filter: 'brightness(1.05) saturate(0.9)', pointerEvents: 'none', userSelect: 'none' }}
              />
            </div>
            
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', maxWidth: '584px', minHeight: '467px', display: 'flex', alignItems: 'center' }} className="text-base md:text-xl lg:text-2xl leading-relaxed md:leading-loose lg:leading-[2.5]">
              さらに、食後の楽しみが「ちーたんたん」。麺を2-3本と具を少し残し、卓上の生卵を割り入れてよく混ぜ、箸を載せたまま「ちーたんお願いします！」とスタッフをお呼び下さい。茹で汁と肉味噌を加えて溶き卵スープにしていただく。一度で二度美味しい〆の一品。一度食べると、二度三度と通いたくなる、記憶に刻まれるほど個性的な味。ちーたんたんをぜひ体験してみてください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
