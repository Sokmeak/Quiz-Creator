"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LinkIcon, Printer, Download } from "lucide-react"
import { AnalyticsSummary } from "./analytics-summary"
import { QuestionAnalytics } from "./question-analytics"
import { IndividualResponses } from "./individual-responses"

export default function Dashboard({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <Card className="mx-auto">
        <div className="border-b p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Customer Satisfaction Survey</h1>
              <p className="text-sm text-muted-foreground">8 responses • Last response: 2 hours ago</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm">
                <LinkIcon className="mr-2 h-4 w-4" />
                Share
              </Button>
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

        <Tabs defaultValue="summary" className="p-6">
          <div className="mb-6">
            <TabsList>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="question">Question</TabsTrigger>
              <TabsTrigger value="individual">Individual</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="summary">
            <AnalyticsSummary />
          </TabsContent>

          <TabsContent value="question">
            <QuestionAnalytics />
          </TabsContent>

          <TabsContent value="individual">
            <IndividualResponses quizId={params.id} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

