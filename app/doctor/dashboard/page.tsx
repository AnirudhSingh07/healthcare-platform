"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Activity,
  Bell,
  Calendar,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  QrCode,
  Search,
  Settings,
  User,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"

export default function DoctorDashboardPage() {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-50 flex w-64 flex-col bg-background border-r transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link href="/doctor/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="font-bold">HealthChain</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              href="/doctor/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/doctor/patients"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-5 w-5" />
              <span>Patients</span>
            </Link>
            <Link
              href="/doctor/scan"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <QrCode className="h-5 w-5" />
              <span>Scan QR Code</span>
            </Link>
            <Link
              href="/doctor/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </Link>
            <Link
              href="/doctor/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link
              href="/doctor/quests"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Activity className="h-5 w-5" />
              <span>Doctor Quests</span>
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              className="rounded-full"
              alt="Doctor avatar"
            />
            <div className="flex flex-col">
              <span className="font-medium">Dr. Michael Chen</span>
              <span className="text-xs text-muted-foreground">Cardiologist</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href="/doctor/settings">
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/logout">
              <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle sidebar"
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Doctor Dashboard</h1>
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile" className="md:hidden">
            <User className="h-5 w-5" />
          </Button>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">2 remaining for today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,450</div>
                <p className="text-xs text-muted-foreground">+320 earned this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Patients Seen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">+12 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Quest Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Monthly target: 90%</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="rounded-full bg-emerald-100 p-2">
                        <Calendar className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 text-xs font-medium text-white">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">10:30 AM</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Annual checkup</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <Calendar className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">11:45 AM</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Follow-up consultation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <Calendar className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">2:15 PM</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Cardiology consultation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Appointments
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Scan Patient QR Code</CardTitle>
                <CardDescription>Access patient records securely</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 rounded-lg border-2 border-dashed p-8 text-center">
                  <QrCode className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-sm font-medium">Scan QR Code</p>
                  <p className="text-xs text-muted-foreground">Use your device camera to scan a patient's QR code</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Open Scanner</Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-1">
                <CardTitle>Recent Patients</CardTitle>
                <CardDescription>Patients you've recently treated</CardDescription>
              </div>
              <div className="ml-auto">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search patients..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </form>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Health Score</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          width={32}
                          height={32}
                          className="rounded-full"
                          alt="Patient avatar"
                        />
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-xs text-muted-foreground">42 years old</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>May 2, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-500">Follow-up</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>87/100</span>
                        <Progress value={87} className="h-2 w-16" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Records
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          width={32}
                          height={32}
                          className="rounded-full"
                          alt="Patient avatar"
                        />
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">35 years old</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>April 28, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-500">Checkup</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>92/100</span>
                        <Progress value={92} className="h-2 w-16" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Records
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          width={32}
                          height={32}
                          className="rounded-full"
                          alt="Patient avatar"
                        />
                        <div>
                          <p className="font-medium">Robert Williams</p>
                          <p className="text-xs text-muted-foreground">58 years old</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>April 25, 2024</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>75/100</span>
                        <Progress value={75} className="h-2 w-16" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Records
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Patients
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
