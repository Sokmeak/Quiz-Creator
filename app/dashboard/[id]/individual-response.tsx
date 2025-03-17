"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

export function IndividualResponse() {
  // Add review state
  const [reviewStatus, setReviewStatus] = useState<"pending" | "reviewed">("pending")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle mark as reviewed action
  const handleMarkAsReviewed = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setReviewStatus("reviewed")
      setIsSubmitting(false)
      toast({
        title: "Response reviewed",
        description: "The response has been marked as reviewed.",
      })
    }, 500)
  }

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              How are you doing guys?
            </h3>
            <p className="mt-1 text-sm text-gray-500">5 points</p>
          </div>
          <div className="text-sm font-medium">5/5</div>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border-2 border-green-500 bg-white" />
            <span className="text-sm text-green-700">KPC</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Are you guys free at the afternoon?
            </h3>
            <p className="mt-1 text-sm text-gray-500">10 points</p>
          </div>
          <div className="text-sm font-medium">10/10</div>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded border-2 border-green-500 bg-green-500" />
            <span className="text-sm text-green-700">Yes</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="font-medium">Give me some idea for design mobile app?</h3>
          <p className="mt-1 text-sm text-gray-500">10 points</p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm">Start from view other design prototype and try to create by your own</p>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Feedback</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Score:</span>
              <div className="flex items-center">
                <Input type="number" min="0" max="10" defaultValue="8" className="w-16 h-8 text-sm" />
                <span className="ml-1 text-sm text-muted-foreground">/ 10</span>
              </div>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600">Good approach!</p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Badge
                  className={
                    reviewStatus === "reviewed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {reviewStatus === "reviewed" ? "Reviewed" : "Needs Review"}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  Paragraph responses require review before publishing
                </span>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleMarkAsReviewed}
              disabled={isSubmitting || reviewStatus === "reviewed"}
            >
              {reviewStatus === "reviewed" ? "Reviewed" : "Mark as Reviewed"}
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              You are single?
            </h3>
            <p className="mt-1 text-sm text-gray-500">10 points</p>
          </div>
          <div className="text-sm font-medium">10/10</div>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border-2 border-green-500 bg-white" />
            <span className="text-sm text-green-700">Yes</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

