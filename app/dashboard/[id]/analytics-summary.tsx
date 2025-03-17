"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Badge } from "@/components/ui/badge"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export function AnalyticsSummary() {
  const barData = {
    labels: ["KPC", "PP", "SB"],
    datasets: [
      {
        label: "Responses",
        data: [5, 2, 1],
        backgroundColor: ["rgba(34, 197, 94, 0.5)", "rgba(209, 213, 219, 0.5)", "rgba(209, 213, 219, 0.5)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(209, 213, 219)", "rgb(209, 213, 219)"],
        borderWidth: 1,
      },
    ],
  }

  const pieData = {
    labels: ["Yes", "No", "Maybe"],
    datasets: [
      {
        data: [5, 2, 1],
        backgroundColor: ["rgba(124, 58, 237, 0.7)", "rgba(209, 213, 219, 0.5)", "rgba(234, 179, 8, 0.5)"],
        borderColor: ["rgb(124, 58, 237)", "rgb(209, 213, 219)", "rgb(234, 179, 8)"],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">34/39</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3:24</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How are you doing guys?</CardTitle>
            <CardDescription>8 responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar
                data={barData}
                options={{
                  indexAxis: "y",
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      beginAtZero: true,
                      max: 6,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>You are single?</CardTitle>
            <CardDescription>8 responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Pie
                data={pieData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Give me some idea for design mobile app?</h2>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">5 responses</span>
          <div className="flex gap-2">
            <Badge className="bg-yellow-100 text-yellow-800">3 Pending Review</Badge>
            <Badge className="bg-green-100 text-green-800">2 Reviewed</Badge>
          </div>
        </div>
        <div className="space-y-2">
          {[
            "Start from view other design prototype and try to create by your own",
            "Yes, start from zone",
            "Start with simple one",
            "Look at popular apps and identify what makes them successful",
            "Focus on user experience first, then aesthetics",
          ].map((response, i) => (
            <div key={i} className="rounded-lg border p-3">
              <p className="text-sm text-gray-600">{response}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

