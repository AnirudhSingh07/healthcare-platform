"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"


export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [selectedWallet, setSelectedWallet] = useState<string>("")

  const connectWallet = async (walletType: string) => {
    if (!window.ethereum) {
      alert("Please install MetaMask or another Web3 wallet!")
      return
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      
      if (accounts.length > 0) {
        setWalletAddress(accounts[0])
        setSelectedWallet(walletType)
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      alert("Failed to connect wallet. Please try again.")
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
    setSelectedWallet("")
  }

  return (
    <div className="container flex h-full mt-10 mb-5 w-full flex-col items-center justify-center ">

      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      
      <div className="mx-auto flex w-full  flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Join our blockchain healthcare platform</p>
          
          {/* Wallet Connection Status */}
          
        </div>

        <Tabs defaultValue="patient" className="w-full ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
          </TabsList>

          <TabsContent value="patient">
            <Card className="bg-gray-200">
              <CardHeader>
                <CardTitle>Patient Registration</CardTitle>
                <CardDescription>Create your patient account to manage your health records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                {walletAddress ? (
            <Card className="mt-4 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Connected Wallet:</p>
                    <p className="truncate text-sm">{walletAddress}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Provider: {selectedWallet}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-2">
              <Button
                onClick={() => connectWallet("metamask")}
                className="w-full gap-2"
                variant="outline"
              >
                <Wallet className="h-4 w-4" />
                Connect MetaMask
              </Button>
            </div>
          )}
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-blue-500 hover:text-blue-600 underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-blue-500 hover:text-blue-600 underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </CardContent>
              
              
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Create Account
                </Button>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline text-blue-500 hover:text-blue-600">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="doctor">
            <Card className="bg-gray-200">
              <CardHeader>
                <CardTitle>Doctor Registration</CardTitle>
                <CardDescription>Create your doctor account to access patient records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-first-name">First name</Label>
                    <Input id="doctor-first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-last-name">Last name</Label>
                    <Input id="doctor-last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">Email</Label>
                  <Input id="doctor-email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="doctor-password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty</Label>
                  <Input id="specialty" placeholder="e.g., Cardiology, Family Medicine" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">Medical License Number</Label>
                  <Input id="license" placeholder="Enter your medical license ID" />
                </div>
                {walletAddress ? (
            <Card className="mt-4 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Connected Wallet:</p>
                    <p className="truncate text-sm">{walletAddress}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Provider: {selectedWallet}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-2">
              <Button
                onClick={() => connectWallet("metamask")}
                className="w-full gap-2"
                variant="outline"
              >
                <Wallet className="h-4 w-4" />
                Connect MetaMask
              </Button>
            </div>
          )}
                <div className="flex items-center space-x-2">
                  <Checkbox id="doctor-terms" />
                  <label
                    htmlFor="doctor-terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-emerald-500 hover:text-emerald-600 underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-emerald-500 hover:text-emerald-600 underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Create Account
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline text-emerald-500 hover:text-emerald-600">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}