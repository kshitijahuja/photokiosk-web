export default function Privacy() {
  return (
    <div className="w-full">
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> June 24, 2026 | <strong>Last Updated:</strong> June 24, 2026
          </p>

          <div className="prose prose-sm max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p>
                PhotoKiosk is a mobile-first school photo management platform designed to help educational institutions collect, organize, and manage school photos securely. Schools own their photo data and control access permissions. We are committed to protecting student privacy and educational data in accordance with FERPA, COPPA, and other applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p>
                <strong>Our Service:</strong> School Stack designs and maintains the PhotoKiosk platform, a secure cloud-based photo management tool for schools. Implementation, deployment, support, and consulting services are provided by our authorized implementation partners.
              </p>
              <p>
                <strong>Our Role:</strong> School Stack provides the PhotoKiosk platform and hosts the service. We do not directly implement the platform, provide support, or consult with schools. Schools work directly with authorized implementation partners who handle all deployment, configuration, and ongoing support.
              </p>
              <p>
                <strong>Implementation Partners:</strong> Authorized implementation partners work directly with schools to deploy PhotoKiosk, configure settings, manage user access, and provide technical support. Partners are responsible for ensuring FERPA compliance and proper data handling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Process</h2>
              <p>PhotoKiosk processes only the information that schools authorize:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Photos:</strong> Images submitted by families and students</li>
                <li><strong>User Information:</strong> Names and email addresses for authentication (via Google, Microsoft, or school SSO)</li>
                <li><strong>Submission Data:</strong> Timestamps and submission status for admin dashboard</li>
                <li><strong>System Logs:</strong> Technical logs for troubleshooting and security purposes</li>
              </ul>
              <p className="mt-4">
                <strong>Data Control:</strong> Schools control who has access to photos and retain the right to delete them at any time. Photos are stored securely on PhotoKiosk's server or the school's Google Drive, as configured by the school. Families can only submit photos; they cannot view, edit, or delete photos without school authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
              <p>Photo data is processed solely for authorized school purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Photo Collection: Enabling families to submit photos securely</li>
                <li>Admin Dashboard: Real-time coverage tracking and photo management</li>
                <li>Photo Export: Creating ZIP files for yearbooks, ID cards, and directories</li>
                <li>Technical Support: Troubleshooting issues and ensuring platform reliability</li>
                <li>Security: Detecting and preventing unauthorized access</li>
              </ul>
              <p className="mt-4">
                <strong>We Do NOT:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell, rent, or lease student photos or data to third parties</li>
                <li>Use photos for commercial purposes unrelated to the school</li>
                <li>Share data between different school clients</li>
                <li>Use photos to train AI models without explicit authorization</li>
                <li>Display or use photos for marketing or advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>PhotoKiosk implements industry-standard security measures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption in transit (HTTPS/TLS) and at rest</li>
                <li>Secure cloud storage via Google Drive with OAuth 2.0 authentication</li>
                <li>Role-based access controls (school admin vs. family member)</li>
                <li>Session management with auto-expiry and CSRF protection</li>
                <li>Regular security updates and monitoring</li>
                <li>Secure authentication via Google Sign-In, Microsoft, or school SSO</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention and Deletion</h2>
              <p>
                Schools control how long photos are retained. Schools may delete photos at any time through the admin dashboard. When a school closes an event or deletes their account, all associated photos can be deleted upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
              <p>
                PhotoKiosk does not share school or student photos with third parties. Photos are stored securely in Google Drive under the school's own Google account or a school-authorized cloud provider.
              </p>
              <p className="mt-4">
                School contact information (name, email, school name) may be shared only with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our cloud infrastructure providers (with appropriate data protection agreements)</li>
                <li>Legal authorities when required by law</li>
                <li>Emergency situations for health and safety purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">School and Student Rights</h2>
              <p>Schools retain full ownership of their data and may:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Download or export all photos at any time</li>
                <li>Delete photos and accounts</li>
                <li>Restrict who can view or access photos</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-4">
                Students and parents may exercise their privacy rights through their school, including accessing, correcting, or requesting deletion of their photos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p>
                PhotoKiosk uses Google Drive for cloud storage and relies on Google, Microsoft, and custom SSO providers for authentication. These third parties have their own privacy policies and maintain appropriate security standards for educational data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>For privacy-related questions or requests:</p>
              <p className="mt-2">
                <strong>PhotoKiosk</strong><br />
                Email: info@School Stack.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy to reflect changes in our practices or applicable laws. We will notify schools of any material changes and post the updated policy with a new effective date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
