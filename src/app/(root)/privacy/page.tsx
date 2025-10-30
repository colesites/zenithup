import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, AlertCircle, FileText } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "October 30, 2024";

  const sections = [
    {
      title: "1. Information We Collect",
      icon: Database,
      content: [
        "We collect several types of information to provide and improve our services:",
        "Personal Information: Name, email address, phone number, business information, identification documents for KYC purposes.",
        "Financial Information: Bank account details, transaction history, credit information (when you use CreditSense).",
        "Usage Data: Information about how you interact with our platform, including IP address, browser type, pages visited, time spent on pages.",
        "Device Information: Hardware model, operating system, unique device identifiers.",
        "Location Data: General location information based on IP address to provide localized services.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      icon: Eye,
      content: [
        "We use the collected information for various purposes:",
        "• To provide, maintain, and improve our services",
        "• To process transactions and send related information",
        "• To provide customer support and respond to inquiries",
        "• To detect, prevent, and address fraud, security, or technical issues",
        "• To comply with legal obligations and enforce our Terms of Service",
        "• To send you marketing communications (with your consent)",
        "• To perform AI-powered analytics and credit scoring",
        "• To personalize your experience on our platform",
      ],
    },
    {
      title: "3. Data Sharing and Disclosure",
      icon: Shield,
      content: [
        "We may share your information in the following circumstances:",
        "Service Providers: We share data with third-party vendors who perform services on our behalf (cloud hosting, payment processing, analytics).",
        "Business Partners: When you use specific features (like SMEConnect marketplace), we may share relevant information with business partners.",
        "Legal Requirements: We may disclose information when required by law, court order, or government request.",
        "Business Transfers: In connection with any merger, sale of assets, financing, or acquisition of our business.",
        "With Your Consent: We may share information with your explicit consent for specific purposes.",
        "We never sell your personal information to third parties.",
      ],
    },
    {
      title: "4. Data Security",
      icon: Lock,
      content: [
        "We implement industry-standard security measures to protect your information:",
        "• Encryption of data in transit and at rest using AES-256",
        "• Regular security audits and penetration testing",
        "• Multi-factor authentication for account access",
        "• Secure data centers with physical and digital access controls",
        "• Employee training on data protection and privacy",
        "• Incident response procedures for potential breaches",
        "While we strive to protect your personal information, no method of transmission over the Internet is 100% secure.",
      ],
    },
    {
      title: "5. Data Retention",
      icon: FileText,
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
        "Account Information: Retained while your account is active and for a reasonable period thereafter.",
        "Transaction Records: Retained for 7 years to comply with financial regulations.",
        "Marketing Data: Retained until you unsubscribe or request deletion.",
        "After the retention period, we securely delete or anonymize your personal information.",
      ],
    },
    {
      title: "6. Your Privacy Rights",
      icon: Shield,
      content: [
        "Depending on your location, you may have the following rights:",
        "• Access: Request copies of your personal data",
        "• Rectification: Request correction of inaccurate or incomplete data",
        "• Erasure: Request deletion of your personal data ('right to be forgotten')",
        "• Restriction: Request limitation of processing your data",
        "• Data Portability: Request transfer of your data to another service",
        "• Object: Object to processing of your personal data",
        "• Withdraw Consent: Withdraw previously given consent at any time",
        "To exercise these rights, contact us at privacy@zenithup.com",
      ],
    },
    {
      title: "7. Cookies and Tracking Technologies",
      icon: Eye,
      content: [
        "We use cookies and similar tracking technologies to track activity on our platform:",
        "Essential Cookies: Required for the platform to function properly.",
        "Analytics Cookies: Help us understand how users interact with our platform.",
        "Marketing Cookies: Used to deliver relevant advertisements.",
        "You can control cookie settings through your browser preferences. Note that disabling cookies may limit platform functionality.",
      ],
    },
    {
      title: "8. Third-Party Services",
      icon: Database,
      content: [
        "Our platform integrates with third-party services that may collect information about you:",
        "• Payment processors (Stripe, Flutterwave, Paystack)",
        "• Analytics providers (Google Analytics)",
        "• Cloud service providers (AWS, Google Cloud)",
        "• Communication tools (Twilio, SendGrid)",
        "These third parties have their own privacy policies. We encourage you to review them.",
      ],
    },
    {
      title: "9. Children's Privacy",
      icon: AlertCircle,
      content: [
        "ZenithUp is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
        "If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information immediately.",
        "If you believe we have collected information from a child, please contact us at privacy@zenithup.com",
      ],
    },
    {
      title: "10. International Data Transfers",
      icon: Database,
      content: [
        "Your information may be transferred to and maintained on servers located outside of your country, where data protection laws may differ.",
        "We ensure appropriate safeguards are in place when transferring data internationally, including:",
        "• Standard contractual clauses approved by regulatory authorities",
        "• Adequacy decisions confirming adequate protection levels",
        "• Your explicit consent for specific transfers",
      ],
    },
    {
      title: "11. AI and Automated Decision-Making",
      icon: Eye,
      content: [
        "We use AI and machine learning for various services, including:",
        "• Credit scoring (CreditSense)",
        "• Fraud detection (FraudShield)",
        "• ATM predictive maintenance (ATM Genius)",
        "• Customer support (Zeni AI Copilot)",
        "You have the right to:",
        "• Be informed about automated decision-making",
        "• Request human review of automated decisions",
        "• Challenge decisions made solely by automated processing",
      ],
    },
    {
      title: "12. Changes to This Privacy Policy",
      icon: FileText,
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by:",
        "• Posting the new Privacy Policy on this page",
        "• Updating the 'Last Updated' date",
        "• Sending you an email notification (for significant changes)",
        "We encourage you to review this Privacy Policy periodically for any changes.",
      ],
    },
    {
      title: "13. Contact Us",
      icon: Shield,
      content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@zenithup.com",
        "Phone: +234 800 123 4567",
        "Address: Victoria Island, Lagos, Nigeria",
        "Data Protection Officer: dpo@zenithup.com",
      ],
    },
  ];

  const highlights = [
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description: "AES-256 encryption & secure data centers",
    },
    {
      icon: Shield,
      title: "Your Data Rights",
      description: "Full control over your personal information",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication about data usage",
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
              <Shield className="w-3 h-3 mr-1" />
              Privacy & Security
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-orange-900 dark:text-orange-100">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl text-orange-700 dark:text-orange-300 mb-4">
              Last Updated: {lastUpdated}
            </p>

            <p className="text-orange-600 dark:text-orange-400 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect,
              use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 border-b border-orange-200 dark:border-orange-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="glass rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                At ZenithUp, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy describes how we collect, use, disclose, and safeguard your
                information when you use our platform. We encourage you to read
                this policy carefully to understand our practices.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="glass rounded-3xl p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-4 ml-14">
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
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 glass rounded-3xl p-8 md:p-12 text-center">
              <Shield className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                Privacy Questions or Concerns?
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-6">
                Our Data Protection Officer is available to address your privacy
                concerns
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:privacy@zenithup.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all"
                >
                  Email Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg glass border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300 font-semibold transition-all hover:bg-orange-100 dark:hover:bg-orange-900/50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

