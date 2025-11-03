import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tight bg-white bg-clip-text text-transparent"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Deaudere
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  data-testid={`link-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                    location === link.href
                      ? "text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <a href="https://soulxy.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" data-testid="button-visit-soulxy">
                Visit Soulxy
              </Button>
            </a>
            <a href="https://cubulystore.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" data-testid="button-visit-cubuly">
                Visit Cubuly
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate ${
                      location === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <a href="https://soulxy.com" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full" data-testid="button-mobile-soulxy">
                  Visit Soulxy
                </Button>
              </a>
              <a href="https://cubulystore.com" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="default" className="w-full" data-testid="button-mobile-cubuly">
                  Visit Cubuly
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
