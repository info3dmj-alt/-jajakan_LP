
export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              じゃじゃかん
            </h3>
            <p className="text-amber-200 leading-relaxed">
              千葉・津田沼で味わう本格盛岡じゃじゃ麺。自分で完成させる「育てる麺」で、あなただけの最強ブレンドを見つけてください。
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-to-eat" className="text-amber-200 hover:text-white transition-colors duration-300 cursor-pointer">
                  食べ方ガイド
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jajakan1030" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors duration-300 cursor-pointer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors duration-300 cursor-pointer">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors duration-300 cursor-pointer">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">フォローしてください</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/jajakan1030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
            </div>
            <p className="text-amber-200 text-sm">
              最新情報やお得な特典情報をお届けします
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm mb-4 md:mb-0">
            © 2024 じゃじゃかん All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
