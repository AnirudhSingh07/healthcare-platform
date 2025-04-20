"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, FileText, QrCode, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Webcam from 'react-webcam'
import jsQR from 'jsqr'

export default function ScanQRCodePage() {
  const [scanComplete, setScanComplete] = useState(false)
  const [diagnosisSubmitted, setDiagnosisSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  
  const webcamRef = useRef(null)
  const processingRef = useRef(false)

  const handleScan = async () => {
    try {
      if (!webcamRef.current || processingRef.current || isProcessing) return
      
      setIsProcessing(true)
      const imageSrc = webcamRef.current.getScreenshot()
      
      if (!imageSrc) {
        throw new Error('Failed to capture image from webcam')
      }

      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = imageSrc
      
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          throw new Error('Failed to get canvas context')
        }
        
        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        
        try {
          const code = jsQR(
            imageData.data,
            imageData.width,
            imageData.height,
            {
              inversionAttempts: "dontInvert"
            }
          )
          
          if (code) {
            setScanComplete(true)
            setIsProcessing(false)
            processingRef.current = false
          } else {
            setIsProcessing(false)
            processingRef.current = false
          }
        } catch (err) {
          setIsProcessing(false)
          processingRef.current = false
          setError('QR code not found. Please try again.')
        }
      }
    } catch (err) {
      setIsProcessing(false)
      processingRef.current = false
      setError(err.message)
    }
  }

  useEffect(() => {
    if (scanComplete) return
    
    const interval = setInterval(() => {
      if (!isProcessing) {
        handleScan()
      }
    }, 500)
    
    return () => clearInterval(interval)
  }, [scanComplete, isProcessing])

  const handleSubmitDiagnosis = () => {
    setDiagnosisSubmitted(true)
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/doctor/dashboard"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Scan Patient QR Code</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>Scan a patient's QR code to access their medical records</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6 min-h-[300px]">
            {!scanComplete ? (
              <>
                {/* {error && (
                  <Alert variant="destructive" className="mb-4">
                    <X className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )} */}
                <div className="relative w-full max-w-md mx-auto">
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    height={300}
                    videoConstraints={{
                      facingMode: 'environment',
                      width: { ideal: 640 },
                      height: { ideal: 480 }
                    }}
                  />
                  {/* <Button
                    onClick={handleScan}
                    disabled={isProcessing}
                    className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-emerald-500 hover:bg-emerald-600"
                  >
                    {isProcessing ? 'Scanning...' : 'Scan QR Code'}
                  </Button> */}
                </div>
              </>
            ) : (
              <div className="w-full">
                <Alert className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
                  <Check className="h-4 w-4" />
                  <AlertTitle>QR Code Scanned Successfully</AlertTitle>
                  <AlertDescription>You now have access to medical records</AlertDescription>
                </Alert>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    width={64}
                    height={64}
                    className="rounded-full"
                    alt="Patient avatar"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Vaibhav Sharma</h3>
                    <p className="text-sm text-muted-foreground">42 years old • Male</p>
                    <p className="text-sm text-muted-foreground">Patient ID: #12345</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {!scanComplete ? (
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onClick={handleScan}
                disabled={isProcessing}
              >
                {isProcessing ? 'Scanning...' : 'Scan QR Code'}
              </Button>
            ) : (
              <div className="w-full grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setScanComplete(false)
                    setError('')
                    setIsProcessing(false)
                  }}
                >
                  Scan Again
                </Button>
                <Button className="bg-emerald-500 hover:bg-emerald-600">View Full Profile</Button>
              </div>
            )}
          </CardFooter>
        </Card>
        {scanComplete && !diagnosisSubmitted && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Add Diagnosis & Treatment</CardTitle>
              <CardDescription>Update the patient's medical record with your diagnosis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="diagnosis">Diagnosis</Label>
                <Textarea id="diagnosis" placeholder="Enter your diagnosis" rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatment">Treatment Plan</Label>
                <Textarea id="treatment" placeholder="Enter treatment recommendations" rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Prescribed Medications</Label>
                <Textarea id="medications" placeholder="Enter medications and dosage" rows={2} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Enter any additional notes" rows={2} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600" onClick={handleSubmitDiagnosis}>
                Submit & Earn Tokens
              </Button>
            </CardFooter>
          </Card>
        )}
        {diagnosisSubmitted && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Diagnosis Submitted</CardTitle>
              <CardDescription>You've successfully updated the patient's medical record</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <Check className="h-4 w-4" />
                <AlertTitle>Tokens Earned</AlertTitle>
                <AlertDescription>You've earned 1 Token for updating this medical record</AlertDescription>
              </Alert>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Both you and the patient have received tokens for this interaction
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Return to Dashboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
      {scanComplete && (
        <div>
          <Tabs defaultValue="records">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="records">Medical Records</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
            </TabsList>
            <TabsContent value="records">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>Patient's medical history</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Record Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-emerald-500" />
                            <span>Annual Physical</span>
                          </div>
                        </TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-emerald-500" />
                            <span>Blood Test Results</span>
                          </div>
                        </TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle>Medications</CardTitle>
                  <CardDescription>Current and past medications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Medication</TableHead>
                        <TableHead>Dosage</TableHead>
                        <TableHead>Frequency</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Lisinopril</TableCell>
                        <TableCell>10mg</TableCell>
                        <TableCell>Once daily</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-500">Active</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Atorvastatin</TableCell>
                        <TableCell>20mg</TableCell>
                        <TableCell>Once daily at bedtime</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-500">Active</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Metformin</TableCell>
                        <TableCell>500mg</TableCell>
                        <TableCell>Twice daily with meals</TableCell>
                        <TableCell>
                          <Badge variant="outline">Discontinued</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Allergies & Warnings</CardTitle>
              <CardDescription>Important patient information</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4 bg-red-50 text-red-700 border-red-200">
                <X className="h-4 w-4" />
                <AlertTitle>Allergies</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    {/* <li>Penicillin - Severe reaction</li>
                    <li>Sulfa drugs - Moderate reaction</li> */}
                  </ul>
                </AlertDescription>
              </Alert>
              <Alert className="bg-amber-50 text-amber-700 border-amber-200">
                <AlertTitle>Medical Conditions</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    {/* <li>Type 2 Diabetes - Diagnosed 2018</li>
                    <li>Hypertension - Diagnosed 2019</li>
                    <li>Hyperlipidemia - Diagnosed 2019</li> */}
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}