export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About PhotoKiosk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PhotoKiosk is a product by <a href="https://school-stack.com" className="text-primary hover:underline font-semibold">School Stack</a>. Built to solve the chaos of school photo collection.
          </p>
        </div>
      </section>

      {/* The Problem & Why We Built It */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Problem We Solve</h2>

          <p className="text-lg text-gray-700 mb-6">
            Every year, photo day creates unnecessary chaos. Families submit photos via email, text, cloud drives, and USB sticks. Administrators spend days tracking who's submitted, managing files across multiple platforms, and chasing missing submissions. IT directors struggle to keep it all organized and secure. By the time photos are collected, it's a logistical nightmare.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            It shouldn't be this hard.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We Built PhotoKiosk</h2>

          <p className="text-lg text-gray-700 mb-6">
            The team at School Stack includes school administrators and education technologists who've experienced this firsthand. We watched brilliant educators waste countless hours managing submissions instead of focusing on student success.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            PhotoKiosk is our answer. A simple, secure, mobile-first platform designed specifically for schools. Share a link with families. They snap photos. Done. Admins get real-time visibility. Photos stay secure in your Google Drive. No complexity, no friction, no mess.
          </p>

          <p className="text-lg text-gray-700">
            We built PhotoKiosk to let schools focus on what matters: educating students.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to simplify photo collection?</h2>
          <a href="/contact" className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors text-lg inline-block">
            Request a Demo
          </a>
        </div>
      </section>
    </div>
  );
}
