export default function Navigation() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logos/photokiosk.png" alt="PhotoKiosk" className="h-9" />
        </a>
        <div className="flex items-center gap-8">
          <a href="/#how-it-works" className="text-gray-700 hover:text-primary text-sm font-medium">How It Works</a>
          <a href="/features" className="text-gray-700 hover:text-primary text-sm font-medium">Features</a>
          <a href="/contact" className="text-gray-700 hover:text-primary text-sm font-medium">Contact</a>

          <div className="relative group -my-2 flex items-center">
            <button className="text-gray-700 hover:text-primary text-sm font-medium flex items-center gap-1 cursor-pointer px-4 sm:px-6 lg:px-8 bg-gray-200 hover:bg-gray-300 transition-colors py-6">
              Our Other Products
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="p-3">
                {/* SISBridge Product Card */}
                <a
                  href="https://sisbridge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                      SB
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary">SISBridge</h4>
                    <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">Connect your Student Information System with your school's digital tools.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
