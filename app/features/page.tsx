export default function Features() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for Every User
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for families, designed for administrators, powered by security and reliability.
          </p>
        </div>
      </section>

      {/* For Families */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Families</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Simple, fast, and intuitive photo submission from any device.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📱 Mobile-Optimized Submission</h3>
              <p className="text-gray-700">Works flawlessly on any smartphone. No app download required — just open the link and start uploading.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📸 Take or Upload</h3>
              <p className="text-gray-700">Capture a live photo on the spot or upload from your camera roll. Full control over what you submit.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Household Members</h3>
              <p className="text-gray-700">Submit photos for all household members — students, parents, emergency contacts — in one place.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">✓ Instant Confirmation</h3>
              <p className="text-gray-700">See confirmation immediately after submitting. Check your recent submissions log anytime.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⏰ Session Management</h3>
              <p className="text-gray-700">Auto-expiry warnings keep your account secure. Sessions expire automatically after inactivity.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🌐 Works Offline</h3>
              <p className="text-gray-700">Upload photos even with spotty connection. Progressive Web App design syncs when you're back online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools & Admins */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Schools & Admins</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Complete control, real-time visibility, and powerful tools to manage photo collection at scale.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📊 Live Coverage Dashboard</h3>
              <p className="text-gray-700">Real-time stats show submission progress across students, staff, parents, and emergency contacts. Visual breakdown with percentage completion.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📝 Photo Update Feed</h3>
              <p className="text-gray-700">See who uploaded what and when. Track all activity in one centralized feed. Never miss an update.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📥 Bulk ZIP Export</h3>
              <p className="text-gray-700">Download all submitted photos as a single ZIP file. Perfect for yearbook production, ID cards, and archival.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">👥 User Management</h3>
              <p className="text-gray-700">Add multiple admin accounts. Assign roles and permissions. Keep sensitive operations secure with role-based access.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⚙️ Configurable Visibility</h3>
              <p className="text-gray-700">Choose which member types to collect: students, parents, staff, emergency contacts. Customize for your school's needs.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🌍 Timezone Localization</h3>
              <p className="text-gray-700">All timestamps adjust to your school's timezone. No confusion with display times across regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Enterprise-grade reliability, security, and integrations you can trust.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📦 Progressive Web App (PWA)</h3>
              <p className="text-gray-700">Installable on home screen like a native app. Works offline-first. Fast, reliable, no app store needed.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">☁️ Google Drive Integration</h3>
              <p className="text-gray-700">All photos stored securely in Google Drive. OAuth 2.0 authentication. Full control over photo storage location.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔐 SSO Support</h3>
              <p className="text-gray-700">Google Sign-In, Microsoft/Azure SSO, and custom SSO integrations. Works with your existing identity provider.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🛡️ CSRF Protection</h3>
              <p className="text-gray-700">All form submissions protected with CSRF tokens. Secure session handling with auto-expiry warnings.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📱 Mobile-First Design</h3>
              <p className="text-gray-700">Built from the ground up for mobile. Responsive design works perfectly on kiosks, tablets, and smartphones.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔒 Privacy Focused</h3>
              <p className="text-gray-700">FERPA-friendly design. Student data never shared with third parties. Role-based access control ensures compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See It in Action?</h2>
          <p className="text-xl mb-8 text-blue-100">Request a demo and let us show you how PhotoKiosk can transform your photo collection workflow.</p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
