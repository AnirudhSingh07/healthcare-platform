import Image from "next/image"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Secure, and Rewarding</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our blockchain-based platform makes healthcare more efficient and equitable for all stakeholders.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center mt-12">
          {/* <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Platform workflow"
              className="object-cover w-full h-full"
            />
          </div> */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-700">1</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Create Your Health Profile</h3>
                <p className="text-muted-foreground">
                  Register and create your secure health profile. Your medical records are stored as Soulbound NFTs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-700">2</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Share Via QR Code</h3>
                <p className="text-muted-foreground">
                  When visiting a doctor, share your medical records instantly by generating a secure QR code.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-700">3</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Receive Updates & Rewards</h3>
                <p className="text-muted-foreground">
                  Doctors update your records with diagnoses, and both parties receive token rewards for participation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-700">4</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Complete Health Quests</h3>
                <p className="text-muted-foreground">
                  Earn additional tokens by completing daily health-related quests tracked via smartwatch integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
