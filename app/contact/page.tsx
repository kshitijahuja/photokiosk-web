export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600">
            Let's show you how PhotoKiosk can simplify photo collection at your school. Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="John Smith"
                  />
                </div>

                {/* School Name */}
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-900 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Lincoln High School"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select your role</option>
                    <option value="principal">Principal / Administrator</option>
                    <option value="teacher">Teacher</option>
                    <option value="it">IT Director</option>
                    <option value="office">Office Manager</option>
                    <option value="photographer">Photographer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="john@lincolnhigh.edu"
                  />
                </div>

                {/* School Size */}
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-900 mb-2">
                    School Size (Students) *
                  </label>
                  <select
                    id="size"
                    name="size"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select school size</option>
                    <option value="100-500">100–500 students</option>
                    <option value="500-1000">500–1,000 students</option>
                    <option value="1000-2000">1,000–2,000 students</option>
                    <option value="2000+">2,000+ students</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your photo collection challenges..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-lg"
                >
                  Request a Demo
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Support Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  {/* Email Support */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:support@photokiosk.co" className="text-primary hover:underline">
                      support@photokiosk.co
                    </a>
                  </div>

                  {/* Phone Support */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-700 text-sm">
                      We typically respond to demo requests within 24 hours on business days.
                    </p>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700 text-sm">
                      Monday – Friday<br />
                      8:00 AM – 5:00 PM PT
                    </p>
                  </div>

                  {/* Why Demo */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Why Request a Demo?</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>✓ See it in action</li>
                      <li>✓ Ask questions</li>
                      <li>✓ Learn pricing</li>
                      <li>✓ Custom setup</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Trusted by 500+ schools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>30-day free trial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>No credit card required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Have other questions? Email us at support@photokiosk.co</p>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>What's included in the free trial?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                The 30-day free trial includes full access to all features: photo submission, admin dashboard, bulk export, and SSO integrations. No credit card required to start.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Do families need to download an app?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                No. PhotoKiosk is a Progressive Web App that works on any smartphone without downloading anything. Families just open a link and start uploading.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Where are photos stored?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Photos are stored securely in Google Drive with OAuth 2.0 authentication. Your school maintains full control over the storage location and access.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Is PhotoKiosk FERPA compliant?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. We've designed PhotoKiosk with FERPA compliance in mind. Role-based access control, secure sessions, and encrypted data storage ensure student privacy and data security.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Can we use our existing login system?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. PhotoKiosk supports Google Sign-In, Microsoft/Azure SSO, and custom SSO integrations. We can work with your existing identity provider.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
