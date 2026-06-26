import type { Metadata } from 'next';
import './globals.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'PhotoKiosk - School Photo Management Made Easy',
  description: 'Mobile-first photo collection platform for schools, families, and administrators. Simplify photo day with instant uploads and secure cloud storage.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <ScrollToTopButton />
        <Navigation />

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">PhotoKiosk</h4>
                <p className="text-gray-600 text-sm">School photo management made simple.</p>
                <p className="text-gray-600 text-xs mt-6">&copy; 2026 School Stack. All rights reserved.</p>
                <p className="text-gray-500 text-xs mt-1">Logos and trademarks remain the property of their respective owners.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/features" className="hover:text-primary">Features</a></li>
                  <li><a href="/how-it-works" className="hover:text-primary">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/about" className="hover:text-primary">About</a></li>
                  <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/privacy" className="hover:text-primary">Privacy</a></li>
                  <li><a href="/terms" className="hover:text-primary">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
