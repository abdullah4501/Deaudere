import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_workspace_background_image_68e01820.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            {/* Enhanced dark overlay layers */}
            <div className="absolute inset-0 bg-black/65" />
            {/* Subtle blue accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-500/4" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "Outfit, sans-serif" }}
              data-testid="text-privacy-heading"
            >
              Privacy Policy
            </h1>
            <p className="text-white/70" data-testid="text-privacy-updated">
              Last Updated: January 2025
            </p>
          </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-24 overflow-hidden bg-black">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 space-y-8 bg-black/40 backdrop-blur-sm border-white/10 shadow-xl">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-introduction">
                  1. Introduction
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Welcome to Deaudere Inc. ("we," "our," or "us"). We are committed
                  to protecting your personal information and your right to privacy.
                  This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website and use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-information">
                  2. Information We Collect
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Communication preferences</li>
                  <li>Messages and inquiries you send to us</li>
                  <li>Information about your interactions with our brands</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-usage">
                  3. How We Use Your Information
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates about our brands and services</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-sharing">
                  4. Information Sharing
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third
                  parties. We may share your information with trusted service
                  providers who assist us in operating our website and conducting our
                  business, as long as they agree to keep this information
                  confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-security">
                  5. Data Security
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to
                  protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-rights">
                  6. Your Rights
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-cookies">
                  7. Cookies and Tracking
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We use cookies and similar tracking technologies to improve your
                  browsing experience, analyze site traffic, and understand where our
                  visitors are coming from. You can control cookies through your
                  browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-children">
                  8. Children's Privacy
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Our services are not intended for children under 13 years of age.
                  We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and believe your child
                  has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-changes">
                  9. Changes to This Policy
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify
                  you of any changes by posting the new Privacy Policy on this page
                  and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-contact-privacy">
                  10. Contact Us
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-black/60 border border-white/10 p-4 rounded-md backdrop-blur-sm">
                  <p className="text-white/80">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:privacy@deaudere.com"
                      className="text-primary hover:underline"
                    >
                      privacy@deaudere.com
                    </a>
                  </p>
                  <p className="text-white/80 mt-2">
                    <strong>Address:</strong> Toronto, Canada
                  </p>
                </div>
              </section>
            </Card>
          </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
