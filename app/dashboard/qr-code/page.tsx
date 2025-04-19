"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, QrCode, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function QRCodePage() {
  const [includeAllRecords, setIncludeAllRecords] = useState(false)
  const [includeVitalSigns, setIncludeVitalSigns] = useState(true)
  const [includeMedications, setIncludeMedications] = useState(true)
  const [includeAllergies, setIncludeAllergies] = useState(true)
  const [includeImmunizations, setIncludeImmunizations] = useState(false)

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold">QR Code Sharing</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Share Your Medical Records</CardTitle>
              <CardDescription>
                Generate a QR code to securely share your medical records with healthcare providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <QrCode className="h-4 w-4" />
                <AlertTitle>Secure Sharing</AlertTitle>
                <AlertDescription>
                  Your medical records are shared securely as Soulbound NFTs. The QR code expires after 24 hours or
                  after being scanned once.
                </AlertDescription>
              </Alert>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="all-records" className="flex flex-col gap-1">
                    <span>Include All Records</span>
                    <span className="font-normal text-xs text-muted-foreground">
                      Share your complete medical history
                    </span>
                  </Label>
                  <Switch id="all-records" checked={includeAllRecords} onCheckedChange={setIncludeAllRecords} />
                </div>

                {!includeAllRecords && (
                  <>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="vital-signs" className="flex flex-col gap-1">
                        <span>Vital Signs</span>
                        <span className="font-normal text-xs text-muted-foreground">
                          Blood pressure, heart rate, etc.
                        </span>
                      </Label>
                      <Switch id="vital-signs" checked={includeVitalSigns} onCheckedChange={setIncludeVitalSigns} />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="medications" className="flex flex-col gap-1">
                        <span>Medications</span>
                        <span className="font-normal text-xs text-muted-foreground">Current and past medications</span>
                      </Label>
                      <Switch id="medications" checked={includeMedications} onCheckedChange={setIncludeMedications} />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="allergies" className="flex flex-col gap-1">
                        <span>Allergies</span>
                        <span className="font-normal text-xs text-muted-foreground">
                          Food, medication, and environmental allergies
                        </span>
                      </Label>
                      <Switch id="allergies" checked={includeAllergies} onCheckedChange={setIncludeAllergies} />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="immunizations" className="flex flex-col gap-1">
                        <span>Immunizations</span>
                        <span className="font-normal text-xs text-muted-foreground">Vaccination history</span>
                      </Label>
                      <Switch
                        id="immunizations"
                        checked={includeImmunizations}
                        onCheckedChange={setIncludeImmunizations}
                      />
                    </div>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Generate QR Code</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your QR Code</CardTitle>
              <CardDescription>Scan this code to share your selected medical records</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-white p-4 rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="QR Code"
                  className="w-[200px] h-[200px]"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                This QR code will expire in 24 hours on May 5, 2024 at 3:45 PM
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>QR Code History</CardTitle>
                <CardDescription>Previously generated QR codes</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="active">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                  </TabsList>
                  <TabsContent value="active">
                    <div className="text-center py-6 text-muted-foreground">No active QR codes</div>
                  </TabsContent>
                  <TabsContent value="expired">
                    <div className="space-y-4 py-2">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Dr. Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">Generated on April 15, 2024</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <QrCode className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">City Health Clinic</p>
                          <p className="text-xs text-muted-foreground">Generated on March 22, 2024</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <QrCode className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
