"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@zenithup.com",
      description: "We'll respond within 24 hours",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+234 800 123 4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Lagos, Nigeria",
      description: "Victoria Island Office",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Fri: 8am - 6pm",
      description: "Weekend: Closed",
      color: "from-orange-500 to-red-500",
    },
  ];

  const offices = [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "123 Victoria Island, Lagos",
      email: "lagos@zenithup.com",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "456 Westlands, Nairobi",
      email: "nairobi@zenithup.com",
    },
    {
      city: "Accra",
      country: "Ghana",
      address: "789 Airport City, Accra",
      email: "accra@zenithup.com",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50 dark:from-orange-950/20 dark:via-transparent dark:to-orange-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <MessageSquare className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm text-orange-700 dark:text-orange-300">
                We&apos;re here to help
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up text-orange-900 dark:text-orange-100">
              Get in Touch
            </h1>

            <p className="text-xl md:text-2xl text-orange-700 dark:text-orange-300 mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 hover:scale-105 transition-all group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-orange-700 dark:text-orange-300 font-semibold mb-1">
                    {info.detail}
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 relative bg-linear-to-b from-background to-orange-50 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                Send us a Message
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-8">
                Fill out the form below and we&apos;ll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-orange-900 dark:text-orange-100"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-orange-900 dark:text-orange-100"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-orange-900 dark:text-orange-100"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-orange-900 dark:text-orange-100"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-orange-900 dark:text-orange-100"
                  >
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-orange-900 dark:text-orange-100"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50 border-orange-200 dark:border-orange-800 focus:border-orange-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                  Our Offices
                </h2>
                <p className="text-orange-700 dark:text-orange-300 mb-6">
                  Visit us at any of our locations across Africa
                </p>

                <div className="space-y-4">
                  {offices.map((office, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-orange-900 dark:text-orange-100">
                            {office.city}, {office.country}
                          </h3>
                          <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                            {office.address}
                          </p>
                          <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                  Connect With Us
                </h2>
                <p className="text-orange-700 dark:text-orange-300 mb-6">
                  Follow us on social media for updates and news
                </p>

                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center transition-all hover:scale-110">
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center transition-all hover:scale-110">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center transition-all hover:scale-110">
                    <Globe className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-24 relative bg-linear-to-b from-orange-50 to-background dark:from-orange-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 dark:text-orange-100 text-balance">
                Ready to Get Started?
              </h2>

              <p className="text-xl text-orange-700 dark:text-orange-300 mb-10 max-w-2xl mx-auto text-balance">
                Join thousands of users transforming African finance with
                AI-powered solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 text-lg px-8 h-14"
                >
                  Start Free Trial
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 dark:bg-orange-950/80 backdrop-blur-sm border-orange-300 dark:border-orange-700 hover:bg-orange-100 dark:hover:bg-orange-900/50 text-orange-700 hover:text-orange-900 dark:text-orange-300 text-lg px-8 h-14"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

