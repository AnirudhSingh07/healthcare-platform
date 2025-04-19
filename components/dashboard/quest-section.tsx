"use client"

import { useState } from "react"
import { Award, CheckCircle, Circle, Footprints, Heart, Timer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function QuestSection() {
  const [dailySteps, setDailySteps] = useState(7500)
  const [dailyStepsCompleted, setDailyStepsCompleted] = useState(false)

  const completeStepsQuest = () => {
    setDailySteps(10000)
    setDailyStepsCompleted(true)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Daily Quests</CardTitle>
          <CardDescription>Complete these quests to earn tokens</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {dailyStepsCompleted ? (
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium">10,000 Steps</p>
                <p className="text-sm text-muted-foreground">Walk 10,000 steps today</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+50 tokens</p>
              <div className="flex items-center justify-end gap-1">
                <Footprints className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{dailySteps}/10,000</p>
              </div>
            </div>
          </div>
          <Progress value={dailySteps / 100} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Medication Reminder</p>
                <p className="text-sm text-muted-foreground">Take your daily medication</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+25 tokens</p>
              <p className="text-sm text-emerald-500">Completed</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Blood Pressure Check</p>
                <p className="text-sm text-muted-foreground">Record your blood pressure</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+30 tokens</p>
              <div className="flex items-center justify-end gap-1">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Expires in 6h</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {!dailyStepsCompleted && (
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600" onClick={completeStepsQuest}>
              Sync Smartwatch Data
            </Button>
          )}
          {dailyStepsCompleted && (
            <Button className="w-full" variant="outline">
              View All Quests
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Challenges</CardTitle>
          <CardDescription>Earn bonus tokens with these challenges</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Fitness Champion</p>
                <p className="text-sm text-muted-foreground">Complete 5 workouts this week</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+200 tokens</p>
              <p className="text-sm text-muted-foreground">3/5 completed</p>
            </div>
          </div>
          <Progress value={60} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Healthy Eating</p>
                <p className="text-sm text-muted-foreground">Log your meals for 7 days</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+150 tokens</p>
              <p className="text-sm text-muted-foreground">4/7 days</p>
            </div>
          </div>
          <Progress value={57} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Sleep Well</p>
                <p className="text-sm text-muted-foreground">Get 7+ hours of sleep for 5 nights</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">+100 tokens</p>
              <p className="text-sm text-muted-foreground">2/5 nights</p>
            </div>
          </div>
          <Progress value={40} />
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            View All Challenges
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
