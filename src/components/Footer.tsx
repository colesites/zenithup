import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/#features" },
      { label: "Demo", href: "/demo" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Security", href: "/security" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Compliance", href: "/compliance" },
    ],
    modules: [
      { label: "ATM Genius", href: "/dashboard/atm-optimization" },
      { label: "CreditSense", href: "/dashboard/credit-scoring" },
      { label: "SMEConnect", href: "/dashboard/marketplace" },
      { label: "TrustHub", href: "/dashboard/trust-center" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-background to-orange-50 dark:to-orange-950/20 border-t border-orange-200 dark:border-orange-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                  ZenithUp
                </span>
              </Link>
              <p className="text-orange-700 dark:text-orange-300 mb-6 max-w-sm">
                Africa&apos;s Intelligent Financial OS. One platform. Infinite
                possibilities. Built for Africa, powered by AI.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@zenithup.com"
                  className="flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@zenithup.com</span>
                </a>
                <a
                  href="tel:+2348001234567"
                  className="flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+234 800 123 4567</span>
                </a>
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules Links */}
            <div>
              <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
                Modules
              </h3>
              <ul className="space-y-2">
                {footerLinks.modules.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-orange-700 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-orange-200 dark:border-orange-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-orange-700 dark:text-orange-300">
              © {currentYear} ZenithUp. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Made with love */}
            <p className="text-sm text-orange-700 dark:text-orange-300">
              Made with ❤️ for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

