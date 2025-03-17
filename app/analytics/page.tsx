"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js"
import { ArrowUpRight, Download, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

export default function AnalyticsPage() {
  // Sample data for charts
  const responseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Responses",
        data: [65, 78, 52, 91, 83, 106],
        backgroundColor: "rgba(10, 67, 255, 0.5)",
        borderColor: "rgb(10, 67, 255)",
        borderWidth: 1,
      },
    ],
  }

  const completionRateData = {
    labels: ["Completed", "Abandoned"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["rgba(10, 67, 255, 0.7)", "rgba(226, 232, 240, 0.7)"],
        borderColor: ["rgb(10, 67, 255)", "rgb(226, 232, 240)"],
        borderWidth: 1,
      },
    ],
  }

  const deviceData = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [55, 40, 5],
        backgroundColor: ["rgba(10, 67, 255, 0.7)", "rgba(99, 102, 241, 0.7)", "rgba(168, 85, 247, 0.7)"],
        borderColor: ["rgb(10, 67, 255)", "rgb(99, 102, 241)", "rgb(168, 85, 247)"],
        borderWidth: 1,
      },
    ],
  }

  const trendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Average Score",
        data: [72, 75, 70, 78, 82, 85],
        borderColor: "rgb(10, 67, 255)",
        backgroundColor: "rgba(10, 67, 255, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track performance and engagement across all quizzes</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">1,248</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                12.5%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">85%</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                3.2%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">78%</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                5.7%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">4:32</div>
              <div className="flex items-center text-sm text-red-600">
                <ArrowUpRight className="mr-1 h-4 w-4 rotate-90" />
                1.8%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="completion">Completion</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Overview</CardTitle>
              <CardDescription>Total responses over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <Bar
                  data={responseData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Completion Rate</CardTitle>
                <CardDescription>Completed vs abandoned quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Doughnut
                    data={completionRateData}
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

            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>Responses by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Doughnut
                    data={deviceData}
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
        </TabsContent>

        <TabsContent value="responses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Metrics</CardTitle>
              <CardDescription>Detailed response analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Top Performing Quizzes</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Quiz Title</th>
                          <th className="px-4 py-3 text-left font-medium">Responses</th>
                          <th className="px-4 py-3 text-left font-medium">Completion Rate</th>
                          <th className="px-4 py-3 text-left font-medium">Avg. Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Customer Satisfaction Survey</td>
                          <td className="px-4 py-3">245</td>
                          <td className="px-4 py-3">92%</td>
                          <td className="px-4 py-3">85%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Product Feedback</td>
                          <td className="px-4 py-3">187</td>
                          <td className="px-4 py-3">88%</td>
                          <td className="px-4 py-3">79%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Team Evaluation</td>
                          <td className="px-4 py-3">156</td>
                          <td className="px-4 py-3">95%</td>
                          <td className="px-4 py-3">82%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Website Usability Test</td>
                          <td className="px-4 py-3">124</td>
                          <td className="px-4 py-3">78%</td>
                          <td className="px-4 py-3">73%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Conference Feedback</td>
                          <td className="px-4 py-3">98</td>
                          <td className="px-4 py-3">90%</td>
                          <td className="px-4 py-3">88%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Response Time Distribution</h3>
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-muted-foreground">Under 2 min</p>
                        <p className="text-2xl font-bold">15%</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-muted-foreground">2-5 min</p>
                        <p className="text-2xl font-bold">42%</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-muted-foreground">5-10 min</p>
                        <p className="text-2xl font-bold">28%</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-muted-foreground">Over 10 min</p>
                        <p className="text-2xl font-bold">15%</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Completion Analysis</CardTitle>
              <CardDescription>Understand where users drop off</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Completion Funnel</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">Started</div>
                      <div className="flex-1">
                        <div className="h-8 w-full rounded-md bg-primary"></div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">100%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">Question 1</div>
                      <div className="flex-1">
                        <div className="h-8 w-[95%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">95%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">Question 2</div>
                      <div className="flex-1">
                        <div className="h-8 w-[92%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">92%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">Question 3</div>
                      <div className="flex-1">
                        <div className="h-8 w-[88%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">88%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium">Completed</div>
                      <div className="flex-1">
                        <div className="h-8 w-[85%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">85%</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Abandonment Reasons</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm font-medium">Too Long</p>
                        <p className="text-2xl font-bold">42%</p>
                        <p className="mt-1 text-xs text-muted-foreground">Users found the quiz too lengthy</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm font-medium">Technical Issues</p>
                        <p className="text-2xl font-bold">28%</p>
                        <p className="mt-1 text-xs text-muted-foreground">Users experienced technical problems</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm font-medium">Lost Interest</p>
                        <p className="text-2xl font-bold">30%</p>
                        <p className="mt-1 text-xs text-muted-foreground">Users lost interest midway</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Device & Platform Analytics</CardTitle>
              <CardDescription>Understand how users access your quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Device Types</h3>
                  <div className="h-[300px]">
                    <Doughnut
                      data={deviceData}
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
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Browsers</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Chrome</div>
                      <div className="flex-1">
                        <div className="h-6 w-[65%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">65%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Safari</div>
                      <div className="flex-1">
                        <div className="h-6 w-[18%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">18%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Firefox</div>
                      <div className="flex-1">
                        <div className="h-6 w-[10%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">10%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Edge</div>
                      <div className="flex-1">
                        <div className="h-6 w-[5%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">5%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Other</div>
                      <div className="flex-1">
                        <div className="h-6 w-[2%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">2%</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Operating Systems</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Windows</div>
                      <div className="flex-1">
                        <div className="h-6 w-[48%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">48%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">iOS</div>
                      <div className="flex-1">
                        <div className="h-6 w-[25%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">25%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Android</div>
                      <div className="flex-1">
                        <div className="h-6 w-[15%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">15%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">macOS</div>
                      <div className="flex-1">
                        <div className="h-6 w-[10%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">10%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Linux</div>
                      <div className="flex-1">
                        <div className="h-6 w-[2%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">2%</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Screen Sizes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Mobile</div>
                      <div className="flex-1">
                        <div className="h-6 w-[40%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">40%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Tablet</div>
                      <div className="flex-1">
                        <div className="h-6 w-[5%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">5%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Laptop</div>
                      <div className="flex-1">
                        <div className="h-6 w-[45%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">45%</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">Desktop</div>
                      <div className="flex-1">
                        <div className="h-6 w-[10%] rounded-md bg-primary"></div>
                      </div>
                      <div className="w-12 text-right text-sm font-medium">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Track quiz performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <Line
                  data={trendsData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: false,
                        min: 60,
                        max: 100,
                      },
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Increasing Completion Rates</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Completion rates have increased by 8% over the last quarter, likely due to improved UI and shorter
                      quizzes.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Mobile Usage Growth</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mobile responses have grown by 15% in the last 3 months, suggesting a need for further mobile
                      optimization.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Question Difficulty</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Questions with multiple choice options show 22% higher completion rates than open-ended questions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Optimize for Mobile</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Consider further mobile optimizations to improve the experience for the growing mobile user base.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Shorten Quizzes</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Data suggests that quizzes with 5-7 questions have the highest completion rates.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Add Progress Indicators</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Quizzes with clear progress indicators show 12% higher completion rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

