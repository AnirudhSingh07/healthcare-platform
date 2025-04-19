import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 xl:py-48">
      
      <WavyBackground className="h-full w-full opacity-60" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-light">
                    Revolutionizing Healthcare with{" "}
                    <span className="bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      MediLayer
                    </span>
                  </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Secure, transparent, and rewarding healthcare for patients, doctors, and healthcare companies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="relative flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 mix-blend-overlay" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
