"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Download, Filter, ArrowLeft, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default function OptionAnalyticsPage() {
  // Sample data for charts
  const multipleChoiceData = {
    labels: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
    datasets: [
      {
        label: "Responses",
        data: [42, 28, 18, 12],
        backgroundColor: [
          "rgba(10, 67, 255, 0.7)",
          "rgba(10, 67, 255, 0.5)",
          "rgba(10, 67, 255, 0.3)",
          "rgba(10, 67, 255, 0.1)",
        ],
        borderColor: ["rgb(10, 67, 255)", "rgb(10, 67, 255)", "rgb(10, 67, 255)", "rgb(10, 67, 255)"],
        borderWidth: 1,
      },
    ],
  }

  const checkboxData = {
    labels: ["Feature A", "Feature B", "Feature C", "Feature D"],
    datasets: [
      {
        label: "Responses",
        data: [65, 48, 32, 27],
        backgroundColor: "rgba(10, 67, 255, 0.5)",
        borderColor: "rgb(10, 67, 255)",
        borderWidth: 1,
      },
    ],
  }

  const demographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Respondents",
        data: [15, 35, 25, 18, 7],
        backgroundColor: "rgba(10, 67, 255, 0.5)",
        borderColor: "rgb(10, 67, 255)",
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

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Option Analytics</h1>
          <p className="text-muted-foreground">Detailed analysis of response options</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="customer-satisfaction">
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select quiz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer-satisfaction">Customer Satisfaction Survey</SelectItem>
              <SelectItem value="product-feedback">Product Feedback</SelectItem>
              <SelectItem value="team-evaluation">Team Evaluation</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/dashboard/1">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">Question 1 of 5</span>
          <Button variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How satisfied are you with our service?</CardTitle>
          <CardDescription>Multiple choice question • 100 responses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="h-[300px]">
              <Bar
                data={multipleChoiceData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
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
            <div className="h-[300px]">
              <Pie
                data={multipleChoiceData}
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

          <div className="mt-6 rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Option</th>
                  <th className="px-4 py-3 text-left font-medium">Count</th>
                  <th className="px-4 py-3 text-left font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Very Satisfied</td>
                  <td className="px-4 py-3">42</td>
                  <td className="px-4 py-3">42%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Satisfied</td>
                  <td className="px-4 py-3">28</td>
                  <td className="px-4 py-3">28%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Neutral</td>
                  <td className="px-4 py-3">18</td>
                  <td className="px-4 py-3">18%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Dissatisfied</td>
                  <td className="px-4 py-3">12</td>
                  <td className="px-4 py-3">12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="breakdown" className="space-y-4">
        <TabsList>
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="breakdown" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Breakdown</CardTitle>
              <CardDescription>Analysis by respondent segments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">By Age Group</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Age Group</th>
                          <th className="px-4 py-3 text-left font-medium">Very Satisfied</th>
                          <th className="px-4 py-3 text-left font-medium">Satisfied</th>
                          <th className="px-4 py-3 text-left font-medium">Neutral</th>
                          <th className="px-4 py-3 text-left font-medium">Dissatisfied</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">18-24</td>
                          <td className="px-4 py-3">35%</td>
                          <td className="px-4 py-3">40%</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">10%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">25-34</td>
                          <td className="px-4 py-3">45%</td>
                          <td className="px-4 py-3">30%</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">10%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">35-44</td>
                          <td className="px-4 py-3">50%</td>
                          <td className="px-4 py-3">25%</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">10%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">45-54</td>
                          <td className="px-4 py-3">40%</td>
                          <td className="px-4 py-3">30%</td>
                          <td className="px-4 py-3">20%</td>
                          <td className="px-4 py-3">10%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">55+</td>
                          <td className="px-4 py-3">35%</td>
                          <td className="px-4 py-3">25%</td>
                          <td className="px-4 py-3">25%</td>
                          <td className="px-4 py-3">15%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">By Location</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Location</th>
                          <th className="px-4 py-3 text-left font-medium">Very Satisfied</th>
                          <th className="px-4 py-3 text-left font-medium">Satisfied</th>
                          <th className="px-4 py-3 text-left font-medium">Neutral</th>
                          <th className="px-4 py-3 text-left font-medium">Dissatisfied</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">North America</td>
                          <td className="px-4 py-3">48%</td>
                          <td className="px-4 py-3">32%</td>
                          <td className="px-4 py-3">12%</td>
                          <td className="px-4 py-3">8%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Europe</td>
                          <td className="px-4 py-3">42%</td>
                          <td className="px-4 py-3">28%</td>
                          <td className="px-4 py-3">18%</td>
                          <td className="px-4 py-3">12%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Asia</td>
                          <td className="px-4 py-3">38%</td>
                          <td className="px-4 py-3">32%</td>
                          <td className="px-4 py-3">20%</td>
                          <td className="px-4 py-3">10%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Other</td>
                          <td className="px-4 py-3">35%</td>
                          <td className="px-4 py-3">30%</td>
                          <td className="px-4 py-3">20%</td>
                          <td className="px-4 py-3">15%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Demographics</CardTitle>
              <CardDescription>Respondent demographic information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Age Distribution</h3>
                  <div className="h-[300px]">
                    <Bar
                      data={demographicsData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
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
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Gender Distribution</h3>
                  <div className="h-[300px]">
                    <Pie
                      data={{
                        labels: ["Male", "Female", "Other"],
                        datasets: [
                          {
                            data: [45, 52, 3],
                            backgroundColor: [
                              "rgba(10, 67, 255, 0.7)",
                              "rgba(99, 102, 241, 0.7)",
                              "rgba(168, 85, 247, 0.7)",
                            ],
                            borderColor: ["rgb(10, 67, 255)", "rgb(99, 102, 241)", "rgb(168, 85, 247)"],
                            borderWidth: 1,
                          },
                        ],
                      }}
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
                  <h3 className="mb-4 text-lg font-medium">Location</h3>
                  <div className="h-[300px]">
                    <Pie
                      data={{
                        labels: ["North America", "Europe", "Asia", "Other"],
                        datasets: [
                          {
                            data: [45, 30, 20, 5],
                            backgroundColor: [
                              "rgba(10, 67, 255, 0.7)",
                              "rgba(99, 102, 241, 0.7)",
                              "rgba(168, 85, 247, 0.7)",
                              "rgba(217, 70, 239, 0.7)",
                            ],
                            borderColor: [
                              "rgb(10, 67, 255)",
                              "rgb(99, 102, 241)",
                              "rgb(168, 85, 247)",
                              "rgb(217, 70, 239)",
                            ],
                            borderWidth: 1,
                          },
                        ],
                      }}
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
                  <h3 className="mb-4 text-lg font-medium">Customer Type</h3>
                  <div className="h-[300px]">
                    <Pie
                      data={{
                        labels: ["New Customer", "Returning Customer", "Potential Customer"],
                        datasets: [
                          {
                            data: [25, 65, 10],
                            backgroundColor: [
                              "rgba(10, 67, 255, 0.7)",
                              "rgba(99, 102, 241, 0.7)",
                              "rgba(168, 85, 247, 0.7)",
                            ],
                            borderColor: ["rgb(10, 67, 255)", "rgb(99, 102, 241)", "rgb(168, 85, 247)"],
                            borderWidth: 1,
                          },
                        ],
                      }}
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Analytics</CardTitle>
              <CardDescription>How respondents accessed the quiz</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Device Types</h3>
                  <div className="h-[300px]">
                    <Pie
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
                  <h3 className="mb-4 text-lg font-medium">Response Time by Device</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Device</th>
                          <th className="px-4 py-3 text-left font-medium">Avg. Time</th>
                          <th className="px-4 py-3 text-left font-medium">Completion Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Desktop</td>
                          <td className="px-4 py-3">3:45</td>
                          <td className="px-4 py-3">92%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Mobile</td>
                          <td className="px-4 py-3">5:12</td>
                          <td className="px-4 py-3">78%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Tablet</td>
                          <td className="px-4 py-3">4:30</td>
                          <td className="px-4 py-3">85%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Option Selection by Device</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left font-medium">Option</th>
                          <th className="px-4 py-3 text-left font-medium">Desktop</th>
                          <th className="px-4 py-3 text-left font-medium">Mobile</th>
                          <th className="px-4 py-3 text-left font-medium">Tablet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Very Satisfied</td>
                          <td className="px-4 py-3">45%</td>
                          <td className="px-4 py-3">38%</td>
                          <td className="px-4 py-3">42%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Satisfied</td>
                          <td className="px-4 py-3">30%</td>
                          <td className="px-4 py-3">25%</td>
                          <td className="px-4 py-3">28%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium">Neutral</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">22%</td>
                          <td className="px-4 py-3">18%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Dissatisfied</td>
                          <td className="px-4 py-3">10%</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Trends</CardTitle>
              <CardDescription>How responses have changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <Bar
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                      {
                        label: "Very Satisfied",
                        data: [35, 38, 40, 42, 45, 48],
                        backgroundColor: "rgba(10, 67, 255, 0.7)",
                        borderColor: "rgb(10, 67, 255)",
                        borderWidth: 1,
                      },
                      {
                        label: "Satisfied",
                        data: [30, 28, 26, 28, 30, 28],
                        backgroundColor: "rgba(10, 67, 255, 0.5)",
                        borderColor: "rgb(10, 67, 255)",
                        borderWidth: 1,
                      },
                      {
                        label: "Neutral",
                        data: [20, 22, 20, 18, 15, 14],
                        backgroundColor: "rgba(10, 67, 255, 0.3)",
                        borderColor: "rgb(10, 67, 255)",
                        borderWidth: 1,
                      },
                      {
                        label: "Dissatisfied",
                        data: [15, 12, 14, 12, 10, 10],
                        backgroundColor: "rgba(10, 67, 255, 0.1)",
                        borderColor: "rgb(10, 67, 255)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        stacked: true,
                      },
                      x: {
                        stacked: true,
                      },
                    },
                  }}
                />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Key Insights</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Increasing Satisfaction</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        "Very Satisfied" responses have increased by 13% over the last 6 months.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Decreasing Dissatisfaction</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        "Dissatisfied" responses have decreased by 5% over the same period.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Seasonal Patterns</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Satisfaction tends to increase during spring and summer months.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Recommendations</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Focus on Neutral Respondents</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Target the 15% of neutral respondents to convert them to satisfied customers.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Maintain Improvements</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Continue with recent service improvements that have increased satisfaction.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Follow-up Surveys</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Conduct targeted follow-up surveys with previously dissatisfied customers.
                      </p>
                    </div>
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

