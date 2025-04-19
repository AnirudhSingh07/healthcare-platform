import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                M
              </span>
              <span className="font-extralight text-xl">MediLayer</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-500 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              M
            </span>
            <span className="font-bold  text-xl">MediLayer</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 MediLayer. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
