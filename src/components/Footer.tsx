import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent"
              style={{ fontFamily: "Outfit, sans-serif" }}
              data-testid="text-footer-brand"
            >
              Deaudere
            </h3>
            <p className="text-sm text-white/70" data-testid="text-footer-tagline">
              Building eCommerce brands that inspire confidence, comfort, and
              individuality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white" data-testid="text-footer-links-heading">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <button className="text-sm text-white/70 hover:text-white transition-colors text-left" data-testid="link-footer-home">
                  Home
                </button>
              </Link>
              <Link href="/about">
                <button className="text-sm text-white/70 hover:text-white transition-colors text-left" data-testid="link-footer-about">
                  About
                </button>
              </Link>
              <Link href="/privacy">
                <button className="text-sm text-white/70 hover:text-white transition-colors text-left" data-testid="link-footer-privacy">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/terms">
                <button className="text-sm text-white/70 hover:text-white transition-colors text-left" data-testid="link-footer-terms">
                  Terms of Service
                </button>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white" data-testid="text-footer-legal-heading">brands</h4>
            <nav className="flex flex-col gap-2">
              <a href="https://soulxy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors" data-testid="link-footer-soulxy">
                Soulxy
              </a>
              <a href="https://cubulystore.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors" data-testid="link-footer-cubuly">
                Cubuly
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60" data-testid="text-footer-copyright">
            © 2025 Deaudere Inc. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
