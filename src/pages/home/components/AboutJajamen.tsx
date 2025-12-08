export default function AboutJajamen() {
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif' }}>
            盛岡じゃじゃ麺について
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* 左側: 1段落目 + jaja1画像 + 3段落目（入れ替え） */}
          <div className="flex flex-col gap-6 items-center">
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', fontSize: '1rem', lineHeight: '1.8', maxWidth: '584px' }}>
              盛岡じゃじゃ麺は、創業約60年、初代・高階貫勝（たかしな かんしょう）が生み出した盛岡を代表する名物です。戦前、旧満州で食べてきた炸醤麺をもとに、盛岡の人々の味覚に合わせてアレンジを重ねたことが始まり。屋台から始り、こだわりぬいて造り続けた結果、独自の進化を遂げ現在では盛岡のソウルフードとして定着。近年テレビや雑誌等でも広く取り上げられ、多くの方に愛されています。
            </p>
            
            <div className="w-full h-[200px]" style={{ maxWidth: '584px' }}>
              <img
                src={`${basePath}images/1-1.png`}
                alt="盛岡じゃじゃ麺"
                className="w-full h-full object-cover rounded-xl"
                style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(0.9)' }}
              />
            </div>
            
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', fontSize: '1rem', lineHeight: '1.8', maxWidth: '584px' }}>
              さらに、食後の楽しみが「ちーたんたん」。器に残ったじゃじゃ味噌に生卵を落とし、茹で汁を加えて溶き卵スープにしていただく。一度で二度美味しい〆の一品。一度食べると、二度三度と通いたくなる、記憶に刻まれるほど個性的な味をぜひ体験してみてください。
            </p>
          </div>

          {/* 右側: back_noodle_03画像 + 2段落目（入れ替え） + chi-tantan画像 */}
          <div className="flex flex-col gap-6 items-center">
            <div className="w-full h-[200px]" style={{ maxWidth: '584px' }}>
              <img
                src={`${basePath}images/back_noodle_03.png`}
                alt="盛岡じゃじゃ麺"
                className="w-full h-full object-cover rounded-xl"
                style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(0.9)' }}
              />
            </div>
            
            <p style={{ color: '#44413C', fontFamily: '"Yu Mincho Pr6N M", "Yu Mincho", "YuMincho", serif', fontSize: '1rem', lineHeight: '1.8', maxWidth: '584px' }}>
              味噌をベースに、ひき肉、胡麻、椎茸、その他十数種類の材料を混ぜ込んで炒め寝かせた秘伝の「じゃじゃ味噌」。もちもちとした食感の平打ち麺。茹で上がった熱々の専用麺に、きゅうり、ねぎをトッピング、紅生姜を添えるのがスタンダードなスタイル。おろしニンニクやおろししょうが、食酢、辣油などをお好みで加え、豪快に混ぜ合わせていただきます。和風版のミートソースのような、古くて新しい盛岡独特の麺文化です。
            </p>
            
            <div className="w-full h-[200px]" style={{ maxWidth: '584px' }}>
              <img
                src={`${basePath}images/chi-tantan.webp`}
                alt="ちーたんたん"
                className="w-full h-full object-cover rounded-xl"
                style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(0.9)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
