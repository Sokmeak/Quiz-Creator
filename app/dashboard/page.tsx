import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Printer, Download } from "lucide-react"
import { AnalyticsSummary } from "./analytics-summary"
import { IndividualResponse } from "./individual-response"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Card className="mx-auto max-w-6xl">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">8 responses</h1>
              <p className="text-sm text-gray-500">Quiz: Design Mobile App</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="summary" className="p-4">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="question">Question</TabsTrigger>
            <TabsTrigger value="individual">Individual</TabsTrigger>
          </TabsList>

          <div className="mt-4">
            <TabsContent value="summary">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Response Summary</h2>
                <Badge className="bg-yellow-100 text-yellow-800">3 Responses Need Review</Badge>
              </div>
              <AnalyticsSummary />
            </TabsContent>

            <TabsContent value="individual">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">Response 4 of 8</span>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">35</span> / 39 points
                  </div>
                </div>
                <IndividualResponse />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}

