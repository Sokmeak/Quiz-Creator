import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, Pie } from "react-chartjs-2"

export function QuestionAnalytics() {
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
      <Tabs defaultValue="q1">
        <TabsList className="mb-4">
          <TabsTrigger value="q1">Question 1</TabsTrigger>
          <TabsTrigger value="q2">Question 2</TabsTrigger>
          <TabsTrigger value="q3">Question 3</TabsTrigger>
          <TabsTrigger value="q4">Question 4</TabsTrigger>
        </TabsList>

        <TabsContent value="q1">
          <Card>
            <CardHeader>
              <CardTitle>How are you doing guys?</CardTitle>
              <CardDescription>8 responses • Multiple choice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
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

              <div className="mt-6 space-y-2">
                <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm font-medium">
                  <div>Option</div>
                  <div>Count</div>
                  <div>Percentage</div>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                  <div>KPC</div>
                  <div>5</div>
                  <div>62.5%</div>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                  <div>PP</div>
                  <div>2</div>
                  <div>25%</div>
                </div>
                <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                  <div>SB</div>
                  <div>1</div>
                  <div>12.5%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="q2">
          <Card>
            <CardHeader>
              <CardTitle>Are you guys free at the afternoon?</CardTitle>
              <CardDescription>8 responses • Checkbox</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
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

                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm font-medium">
                    <div>Option</div>
                    <div>Count</div>
                    <div>Percentage</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                    <div>Yes</div>
                    <div>5</div>
                    <div>62.5%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                    <div>No</div>
                    <div>2</div>
                    <div>25%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 rounded-lg border p-3 text-sm">
                    <div>Maybe</div>
                    <div>1</div>
                    <div>12.5%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

