import { Shield, Users, Award, Activity, FileText, Zap } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Transforming Healthcare Through Technology
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform connects patients, doctors, and healthcare companies through a secure, transparent, and
              rewarding system.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <Shield className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Secure Medical Records</h3>
            <p className="text-center text-muted-foreground">
              Your medical records are stored as Soulbound NFTs, ensuring complete security and ownership.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <Users className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Seamless Sharing</h3>
            <p className="text-center text-muted-foreground">
              Share your medical records with doctors instantly via a secure QR code system.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <Award className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Token Rewards</h3>
            <p className="text-center text-muted-foreground">
              Earn tokens for participating in healthcare activities and completing health quests.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <Activity className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Health Quests</h3>
            <p className="text-center text-muted-foreground">
              Complete daily health-related quests tracked via smartwatch integration.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <FileText className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Anonymized Research</h3>
            <p className="text-center text-muted-foreground">
              Contribute to healthcare research with anonymized data while maintaining privacy.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <Zap className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold">Real-time Updates</h3>
            <p className="text-center text-muted-foreground">
              Get real-time updates to your medical records and instant token rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
