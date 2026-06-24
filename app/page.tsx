export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Photo Collection. Simplified.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get families to submit photos in minutes, not days. PhotoKiosk makes school photo management effortless for administrators, families, and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-lg">
              Request a Demo
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              View Features
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Three simple steps to complete photo collection in minutes.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">School Sets Up</h3>
              <p className="text-gray-600">Admins create a photo kiosk and configure which members to collect photos for.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Families Get Link</h3>
              <p className="text-gray-600">Share a simple link via email or text. Families sign in with Google, Microsoft, or school credentials.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Photos Submitted Instantly</h3>
              <p className="text-gray-600">Families snap photos from their phones. Admin dashboard updates in real-time with coverage stats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why Schools Love PhotoKiosk</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Everything you need to collect, organize, and manage school photos.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600">Works on any smartphone. No app download required. Take a photo or upload from camera roll.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Coverage Stats</h3>
              <p className="text-gray-600">Admin dashboard shows real-time progress: how many students, staff, and families have submitted photos.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Cloud Storage</h3>
              <p className="text-gray-600">Photos stored securely in Google Drive. SSO support for Google, Microsoft, and custom providers.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Export</h3>
              <p className="text-gray-600">Download all photos as a ZIP file at any time. Perfect for yearbook or ID card production.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Privacy First</h3>
              <p className="text-gray-600">Role-based access, CSRF protection, secure sessions with auto-expiry. FERPA-friendly design.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Works Offline</h3>
              <p className="text-gray-600">Progressive Web App with offline-first design. Families can submit photos even with spotty connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What School Leaders Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Simplify Photo Collection?</h2>
          <p className="text-xl mb-8 text-blue-100">Join schools across the country using PhotoKiosk to save time and delight families.</p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Request a Demo Today
          </button>
        </div>
      </section>
    </div>
  );
}
