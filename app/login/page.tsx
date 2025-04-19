"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  
  const connectWallet = async () => {
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
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      alert("Failed to connect wallet. Please try again.")
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          
          {/* Wallet Connection Status */}
          {walletAddress ? (
            <Card className="mt-4 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Connected Wallet:</p>
                    <p className="truncate text-sm">{walletAddress}</p>
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
            <Button 
              onClick={connectWallet}
              className="mt-4 w-full gap-2"
              variant="outline"
            >
              <Wallet className="h-4 w-4" />
              Connect Web3 Wallet
            </Button>
          )}
        </div>

        {/* Rest of your existing login tabs */}
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
          </TabsList>
          
          {/* Patient Tab Content */}
          <TabsContent value="patient">
            <Card>
              <CardHeader>
                <CardTitle>Patient Login</CardTitle>
                <CardDescription>Access your medical records and health quests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Your existing patient form fields */}
                <div className="space-y-2">
                  <Label htmlFor="patient-email">Email</Label>
                  <Input id="patient-email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="patient-password" 
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
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Sign In</Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="underline text-blue-500 hover:text-blue-600">
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Doctor Tab Content */}
          <TabsContent value="doctor">
            <Card>
              <CardHeader>
                <CardTitle>Doctor Login</CardTitle>
                <CardDescription>Access patient records and manage your practice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Your existing doctor form fields */}
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
                  <Label htmlFor="doctor-id">Medical License ID</Label>
                  <Input id="doctor-id" placeholder="Enter your medical license ID" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Sign In</Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="underline text-blue-500 hover:text-blue-600">
                    Sign up
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