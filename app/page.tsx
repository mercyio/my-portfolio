import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowRight, Star } from "lucide-react";
import { AppSetting } from "../data/appSetting";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <Link
              href="/templates"
              className="text-sm text-gray-400 hover:text-white"
            >
              Templates
            </Link>
            <Button>Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-2 text-center">
              <h1 className="mb-6 text-5xl md:text-7xl font-bold">
                Create your portfolio in minutes
              </h1>
              <p className="mb-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Choose from stunning templates, customize your profile, and
                share your work with a unique URL. No coding required.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-black text-black hover:bg-black hover:text-white"
                >
                  View Templates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 bg-neutral-950 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">10k+</h3>
              <p className="text-gray-400">Portfolios Created</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Templates</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Loved by creators worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-neutral-900 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to showcase your work?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of professionals who trust us to power their online
              presence.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Create Your Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-neutral-800">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 {AppSetting.appName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/templates"
              className="text-sm text-gray-400 hover:text-white"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-400 hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-white"
            >
              About
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

const testimonials = [
  {
    text: "Portify made creating my portfolio a breeze. The templates are beautiful and customization is super intuitive.",
    name: "Sarah Chen",
    role: "UX Designer",
    avatar: "https://api.dicebear.com/9.x/micah/svg",
  },
  {
    text: "As a developer, I appreciate how well-structured and performant the generated portfolios are.",
    name: "Mark Thompson",
    role: "Full-stack Developer",
    avatar: "https://api.dicebear.com/9.x/micah/svg",
  },
  {
    text: "The best investment I've made for my personal brand. Got multiple client inquiries after launching.",
    name: "Jessica Patel",
    role: "Freelance Artist",
    avatar: "https://api.dicebear.com/9.x/micah/svg",
  },
];
