export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Photo Collection. Simplified.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get families to submit photos in minutes, not days. PhotoKiosk makes school photo management effortless for administrators, families, and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-lg inline-block text-center">
              Request a Demo
            </a>
            <a href="/features" className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg inline-block text-center">
              View Features
            </a>
          </div>
        </div>
      </section>

      {/* Compatible With */}
      <section className="py-0 sm:py-1 pb-24 sm:pb-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm font-semibold uppercase tracking-wide mb-4">Works seamlessly with</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Google */}
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-gray-900 font-semibold">Google</span>
            </div>

            {/* Microsoft */}
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none">
                <path d="M0 0h11.4v11.4H0z" fill="#F25022"/>
                <path d="M12.6 0H24v11.4H12.6z" fill="#7FBA00"/>
                <path d="M0 12.6h11.4V24H0z" fill="#00A4EF"/>
                <path d="M12.6 12.6H24V24H12.6z" fill="#FFB900"/>
              </svg>
              <span className="text-gray-900 font-semibold">Microsoft</span>
            </div>

            {/* Google Drive */}
            <div className="flex flex-col items-center">
              <img src="/logos/google-drive.png" alt="Google Drive" className="h-12 mb-3 object-contain" />
              <span className="text-gray-900 font-semibold">Google Drive</span>
            </div>

            {/* Veracross */}
            <div className="flex flex-col items-center">
              <img src="/logos/veracross.png" alt="Veracross" className="h-12 mb-3 object-contain" />
              <span className="text-gray-900 font-semibold">Veracross</span>
            </div>

            {/* Custom SSO */}
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-gray-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-gray-900 font-semibold">Custom SSO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">The Problem</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">Without a centralized system, photo collection becomes a painful, time-consuming process.</p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-[10px]">
            <p className="text-lg text-gray-700 mb-4">
              Getting photo day ready is a logistical nightmare. You're chasing families for uploads, managing multiple submission channels, tracking who sent what, and dealing with lost files. By the time you get everything organized, you're exhausted.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Families submit photos via email, text, and random storage apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>No visibility into submission status — who's uploaded and who hasn't</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Managing photos across multiple devices and cloud services</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Manual follow-ups waste hours of administrative time</span>
              </li>
            </ul>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg mb-6">PhotoKiosk eliminates these pain points with a simple, centralized platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#how-it-works" className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                See How It Works
              </a>
              <a href="/features" className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Three simple steps to complete photo collection in minutes.</p>

          <div className="relative">
            {/* Simple connector line - desktop only */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-300" style={{ left: '8.33%', right: '8.33%' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-3xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Families Get Link</h3>
                <p className="text-gray-600">Share a simple link via email or text to families and collect photos easily.</p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-3xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authentication</h3>
                <p className="text-gray-600">Families sign in securely with Google, Microsoft, or Veracross SSO in seconds.</p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-3xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Photos Submitted Instantly</h3>
                <p className="text-gray-600">Families snap photos from their phones. Admin dashboard updates in real-time with coverage stats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why Schools Love PhotoKiosk</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Everything you need to collect, organize, and manage school photos.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-gray-200 border border-gray-200">
            {/* Feature 1 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600">Works on any smartphone. No app download required. Take a photo or upload from camera roll.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Coverage Stats</h3>
              <p className="text-gray-600">Admin dashboard shows real-time progress: how many students, staff, and families have submitted photos.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-5.5" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Cloud Storage</h3>
              <p className="text-gray-600">Photos stored securely in Google Drive. SSO support for Google, Microsoft, and custom providers.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Export</h3>
              <p className="text-gray-600">Download all photos as a ZIP file at any time. Perfect for yearbook or ID card production.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Privacy First</h3>
              <p className="text-gray-600">Role-based access, CSRF protection, secure sessions with auto-expiry. FERPA-friendly design.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.251a.75.75 0 0 0 .75.75h6.278a.75.75 0 1 0 0-1.5H8.861a.75.75 0 0 0-.75.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3v9.75m0 0-3-3m3 3 3-3M3.75 21h16.5" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Works Offline</h3>
              <p className="text-gray-600">Progressive Web App with offline-first design. Families can submit photos even with spotty connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What School Leaders Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "PhotoKiosk cut our photo collection time from two weeks to two days. Families love how easy it is, and the admin dashboard gives us visibility we never had before."
              </p>
              <p className="font-semibold text-gray-900">Sarah Mitchell</p>
              <p className="text-sm text-gray-600">Principal, Central High School</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "As IT director, I was impressed by the security features. CSRF protection, OAuth 2.0, and role-based access make it compliant with our district policies."
              </p>
              <p className="font-semibold text-gray-900">James Chen</p>
              <p className="text-sm text-gray-600">IT Director, Riverside Schools</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The mobile-first design is perfect for our community. We didn't have to explain anything—families just sent photos. The yearbook is already half done!"
              </p>
              <p className="font-semibold text-gray-900">Maria Rodriguez</p>
              <p className="text-sm text-gray-600">Admin, St. Anne's Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Built for Your Community</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* For Schools */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Schools & Admins</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Collect student directory photos at scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Capture staff and faculty headshots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Streamline ID card and yearbook production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Create family directories with parent photos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Export all photos for archival or printing</span>
                </li>
              </ul>
            </div>

            {/* For Families */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Families</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Submit photos from any smartphone in seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>No app download — just a simple link</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Upload for all household members at once</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>See submission confirmation immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Works even with spotty mobile connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Simplify Photo Collection?</h2>
          <p className="text-xl mb-8 text-gray-600">Join schools across the country using PhotoKiosk to save time and delight families.</p>
          <a href="/contact" className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors text-lg inline-block">
            Request a Demo Today
          </a>
        </div>
      </section>
    </div>
  );
}
