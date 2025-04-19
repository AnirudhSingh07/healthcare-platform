import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from patients and doctors who are already benefiting from our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "As a patient with chronic conditions, having all my medical records in one secure place has been
                life-changing. The token rewards for completing health quests keep me motivated to stay active."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Sarah Johnson"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Patient</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "The QR code system makes accessing patient records incredibly efficient. I can provide better care with
                complete medical histories at my fingertips, and the token rewards are a nice bonus."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Dr. Michael Chen"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Dr. Michael Chen</p>
                <p className="text-sm text-muted-foreground">Cardiologist</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "The anonymized data has been invaluable for our research while maintaining patient privacy. This
                platform is revolutionizing how healthcare data is shared and utilized."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Dr. Emily Rodriguez"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Dr. Emily Rodriguez</p>
                <p className="text-sm text-muted-foreground">Research Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
