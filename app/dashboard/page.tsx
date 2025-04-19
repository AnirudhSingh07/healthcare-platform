"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Activity,
  Bell,
  Calendar,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  QrCode,
  Settings,
  User,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthRecordsSection } from "@/components/dashboard/health-records-section"
import { QuestSection } from "@/components/dashboard/quest-section"
import { TokenSection } from "@/components/dashboard/token-section"
import { useMobile } from "@/hooks/use-mobile"

export default function DashboardPage() {
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
          <Link href="/dashboard" className="flex items-center gap-2">
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
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/records"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <FileText className="h-5 w-5" />
              <span>Health Records</span>
            </Link>
            <Link
              href="/dashboard/quests"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Activity className="h-5 w-5" />
              <span>Health Quests</span>
            </Link>
            <Link
              href="/dashboard/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link
              href="/dashboard/qr-code"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <QrCode className="h-5 w-5" />
              <span>QR Code</span>
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
              alt="User avatar"
            />
            <div className="flex flex-col">
              <span className="font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href="/dashboard/settings">
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
            <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
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
                <CardTitle className="text-sm font-medium">Total Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87/100</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                <Progress value={87} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">+145 earned this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed Quests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/30</div>
                <p className="text-xs text-muted-foreground">80% completion rate</p>
                <Progress value={80} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">May 15</div>
                <p className="text-xs text-muted-foreground">Dr. Sarah Johnson - Cardiology</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="records" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="records">Health Records</TabsTrigger>
              <TabsTrigger value="quests">Health Quests</TabsTrigger>
              <TabsTrigger value="tokens">Token Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="records">
              <HealthRecordsSection />
            </TabsContent>
            <TabsContent value="quests">
              <QuestSection />
            </TabsContent>
            <TabsContent value="tokens">
              <TokenSection />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
