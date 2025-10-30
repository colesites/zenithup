import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Shield } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "October 30, 2024";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using ZenithUp ('the Platform'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Platform.",
        "We reserve the right to modify these terms at any time. Your continued use of the Platform following any changes indicates your acceptance of the new terms.",
      ],
    },
    {
      title: "2. Use License",
      content: [
        "Permission is granted to temporarily access the Platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)",
        "• Attempt to decompile or reverse engineer any software contained on the Platform",
        "• Remove any copyright or other proprietary notations from the materials",
        "• Transfer the materials to another person or 'mirror' the materials on any other server",
      ],
    },
    {
      title: "3. Account Registration",
      content: [
        "To access certain features of the Platform, you may be required to register for an account. You agree to:",
        "• Provide accurate, current, and complete information during the registration process",
        "• Maintain the security of your password and identification",
        "• Notify us immediately of any unauthorized use of your account",
        "• Be responsible for all activities that occur under your account",
      ],
    },
    {
      title: "4. Service Description",
      content: [
        "ZenithUp provides an AI-powered financial operating system designed for African institutions, including but not limited to:",
        "• ATM predictive maintenance (ATM Genius)",
        "• Alternative credit scoring (CreditSense)",
        "• Digital marketplace for SMEs (SMEConnect)",
        "• Real-time dispute resolution (TrustHub)",
        "• Fraud detection systems (FraudShield)",
        "• Agent network management (AgentFlow)",
        "• And other financial technology services",
      ],
    },
    {
      title: "5. Payment Terms",
      content: [
        "Certain aspects of the Platform may require payment. You agree to:",
        "• Provide current, complete, and accurate purchase and account information",
        "• Promptly update your account and payment information",
        "• Pay all charges at the prices then in effect for your purchases",
        "• Pay all applicable taxes",
        "Subscription fees are billed in advance on a recurring basis (monthly or annually). Refunds are provided according to our refund policy.",
      ],
    },
    {
      title: "6. User Conduct",
      content: [
        "You agree not to use the Platform to:",
        "• Violate any applicable laws or regulations",
        "• Infringe upon the rights of others",
        "• Distribute viruses or any other harmful computer code",
        "• Engage in any activity that interferes with or disrupts the Platform",
        "• Attempt to gain unauthorized access to any portion of the Platform",
        "• Impersonate any person or entity",
      ],
    },
    {
      title: "7. Intellectual Property",
      content: [
        "The Platform and its original content, features, and functionality are owned by ZenithUp and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform without prior written consent.",
      ],
    },
    {
      title: "8. Data Protection",
      content: [
        "We take data protection seriously. Your use of the Platform is also governed by our Privacy Policy. By using the Platform, you consent to the collection and use of your information as described in the Privacy Policy.",
        "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.",
      ],
    },
    {
      title: "9. Disclaimer of Warranties",
      content: [
        "The Platform is provided on an 'AS IS' and 'AS AVAILABLE' basis. ZenithUp makes no representations or warranties of any kind, express or implied, as to the operation of the Platform or the information, content, materials, or products included.",
        "We do not warrant that the Platform will be uninterrupted or error-free, and we will not be liable for any interruptions or errors.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      content: [
        "In no event shall ZenithUp, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
        "Our total liability to you for all claims arising from or related to the Platform shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.",
      ],
    },
    {
      title: "11. Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless ZenithUp and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Platform.",
      ],
    },
    {
      title: "12. Termination",
      content: [
        "We may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason, including if you breach the Terms of Service.",
        "Upon termination, your right to use the Platform will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive.",
      ],
    },
    {
      title: "13. Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.",
        "Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Nigeria.",
      ],
    },
    {
      title: "14. Changes to Terms",
      content: [
        "We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the 'Last Updated' date.",
        "Your continued use of the Platform after any changes constitutes acceptance of those changes.",
      ],
    },
    {
      title: "15. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: legal@zenithup.com",
        "Phone: +234 800 123 4567",
        "Address: Victoria Island, Lagos, Nigeria",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50 dark:from-orange-950/20 dark:via-transparent dark:to-orange-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
              <FileText className="w-3 h-3 mr-1" />
              Legal
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-orange-900 dark:text-orange-100">
              Terms of Service
            </h1>

            <p className="text-lg md:text-xl text-orange-700 dark:text-orange-300 mb-4">
              Last Updated: {lastUpdated}
            </p>

            <p className="text-orange-600 dark:text-orange-400 max-w-2xl mx-auto">
              Please read these terms carefully before using ZenithUp
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-b border-orange-200 dark:border-orange-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                    Legally Binding Agreement
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                    User Protection
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                    Transparent Terms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                Introduction
              </h2>
              <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                Welcome to ZenithUp. These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of our platform, services, and
                applications. By accessing or using ZenithUp, you agree to be
                bound by these Terms and our Privacy Policy. If you do not agree
                with any part of these Terms, you must not use our services.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="glass rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-orange-700 dark:text-orange-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-6">
                Our legal team is here to help clarify any questions you may have
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

