"use client"

import { Card } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">How are you doing guys?</h2>
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
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Give me some idea for design mobile app?</h2>
        <div className="space-y-2">
          {[
            "Start from view other design prototype and try to create by your own",
            "Yes, start from zone",
            "Start with simple one",
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

