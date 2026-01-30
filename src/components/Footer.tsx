import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/yourpage', label: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com/yourpage', label: 'Facebook' },
    { icon: Linkedin, url: 'https://linkedin.com/company/yourpage', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <div className="w-10 h-10 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="The Growth Studio Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-xl font-bold">
                The Growth Studio
              </span>
            </div>

            <p className="text-gray-400 text-sm max-w-sm">
              Creating, marketing, and scaling digital brands with innovative strategies
              and creative excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['home', 'services', 'gallery', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The Growth Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
