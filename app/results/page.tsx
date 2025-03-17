"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default function ResultsPage() {
  const barData = {
    labels: ["Option 1", "Option 2", "Option 3"],
    datasets: [
      {
        label: "Responses",
        data: [12, 19, 3],
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        borderColor: "rgb(99, 102, 241)",
        borderWidth: 1,
      },
    ],
  }

  const pieData = {
    labels: ["Yes", "No", "Maybe"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: ["rgba(99, 102, 241, 0.5)", "rgba(244, 63, 94, 0.5)", "rgba(234, 179, 8, 0.5)"],
        borderColor: ["rgb(99, 102, 241)", "rgb(244, 63, 94)", "rgb(234, 179, 8)"],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-2xl font-bold">Quiz Results</h1>

        <Tabs defaultValue="question1" className="w-full">
          <TabsList>
            <TabsTrigger value="question1">Question 1</TabsTrigger>
            <TabsTrigger value="question2">Question 2</TabsTrigger>
            <TabsTrigger value="question3">Question 3</TabsTrigger>
          </TabsList>

          <TabsContent value="question1">
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Multiple Choice Question</h2>
              <div className="h-[300px]">
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="question2">
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Checkbox Question</h2>
              <div className="h-[300px]">
                <Pie
                  data={pieData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="question3">
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Text Responses</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-gray-600">Response 1</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-gray-600">Response 2</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-gray-600">Response 3</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

