import { ArrowDownRight, ArrowUpRight, CreditCard, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TokenSection() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 HC</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span>+145 tokens (11.6%) from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Earned This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">450 HC</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span>+75 tokens (20%) from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Spent This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120 HC</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span>-30 tokens (20%) from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Marketplace Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124.50</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>Current exchange rate: $0.10 per token</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Token Activity</CardTitle>
          <CardDescription>Your recent token transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">Quest Reward</p>
                      <p className="text-xs text-muted-foreground">10,000 Steps Completed</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Today, 2:30 PM</TableCell>
                <TableCell className="font-medium text-emerald-500">+50 HC</TableCell>
                <TableCell className="text-right">Confirmed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">Doctor Visit</p>
                      <p className="text-xs text-muted-foreground">Medical Record Update</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Yesterday, 10:15 AM</TableCell>
                <TableCell className="font-medium text-emerald-500">+75 HC</TableCell>
                <TableCell className="text-right">Confirmed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-2">
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Marketplace Purchase</p>
                      <p className="text-xs text-muted-foreground">Premium Health Report</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>May 2, 2024</TableCell>
                <TableCell className="font-medium text-red-500">-100 HC</TableCell>
                <TableCell className="text-right">Confirmed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">Weekly Challenge</p>
                      <p className="text-xs text-muted-foreground">Fitness Champion</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>April 30, 2024</TableCell>
                <TableCell className="font-medium text-emerald-500">+200 HC</TableCell>
                <TableCell className="text-right">Confirmed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-1">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
          <Button variant="outline" className="gap-1">
            <CreditCard className="h-4 w-4" />
            Redeem Tokens
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
