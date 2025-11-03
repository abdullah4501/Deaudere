import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_workspace_background_image_68e01820.png";

export default function TermsOfService() {
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
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "Outfit, sans-serif" }}
              data-testid="text-terms-heading"
            >
              Terms of Service
            </h1>
            <p className="text-white/70" data-testid="text-terms-updated">
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
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-acceptance">
                  1. Acceptance of Terms
                </h2>
                <p className="text-white/80 leading-relaxed">
                  By accessing and using the Deaudere Inc. website and services, you
                  accept and agree to be bound by the terms and provisions of this
                  agreement. If you do not agree to these Terms of Service, please do
                  not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-services">
                  2. Description of Services
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Deaudere Inc. operates as an eCommerce parent company managing
                  multiple online brands, including Soulxy and Cubuly. We provide
                  information about our brands, facilitate connections with our
                  online stores, and offer customer support services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-use-license">
                  3. Use License
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on
                  Deaudere's website for personal, non-commercial use only. This
                  license does not include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Modifying or copying the materials</li>
                  <li>
                    Using the materials for commercial purposes or public display
                  </li>
                  <li>
                    Attempting to decompile or reverse engineer any software on our
                    website
                  </li>
                  <li>
                    Removing copyright or proprietary notations from materials
                  </li>
                  <li>
                    Transferring materials to another person or mirroring materials
                    on another server
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-user-conduct">
                  4. User Conduct
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>Use our services for any unlawful purpose</li>
                  <li>
                    Attempt to gain unauthorized access to our systems or networks
                  </li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-intellectual">
                  5. Intellectual Property
                </h2>
                <p className="text-white/80 leading-relaxed">
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of Deaudere Inc. or its
                  content suppliers and is protected by international copyright laws.
                  The compilation of all content is the exclusive property of
                  Deaudere Inc.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-disclaimer">
                  6. Disclaimer
                </h2>
                <p className="text-white/80 leading-relaxed">
                  The materials on Deaudere's website are provided on an "as is"
                  basis. Deaudere makes no warranties, expressed or implied, and
                  hereby disclaims all other warranties including, without
                  limitation, implied warranties of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual property.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-limitations">
                  7. Limitations of Liability
                </h2>
                <p className="text-white/80 leading-relaxed">
                  In no event shall Deaudere Inc. or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of data or
                  profit, or due to business interruption) arising out of the use or
                  inability to use our services, even if we have been notified of the
                  possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-links">
                  8. Third-Party Links
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Our website may contain links to third-party websites, including
                  our owned brands (Soulxy and Cubuly). We are not responsible for
                  the content, privacy policies, or practices of third-party
                  websites. We encourage you to review the terms and privacy policies
                  of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-modifications">
                  9. Modifications to Terms
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Deaudere may revise these Terms of Service at any time without
                  notice. By using this website, you agree to be bound by the current
                  version of these Terms of Service. We recommend reviewing this page
                  periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-governing">
                  10. Governing Law
                </h2>
                <p className="text-white/80 leading-relaxed">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Canada, and you irrevocably submit to
                  the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-section-contact-terms">
                  11. Contact Information
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-black/60 border border-white/10 p-4 rounded-md backdrop-blur-sm">
                  <p className="text-white/80">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:legal@deaudere.com"
                      className="text-primary hover:underline"
                    >
                      legal@deaudere.com
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
