"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ArrowLeft, ArrowRight, Filter } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

// Mock data - replace with actual data from your backend
const mockResponses = [
  { id: "1", name: "John Doe", email: "john@example.com", score: 35, maxScore: 39, timestamp: "2024-03-15T10:00:00Z" },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    score: 38,
    maxScore: 39,
    timestamp: "2024-03-15T11:30:00Z",
  },
  { id: "3", name: "Bob Wilson", email: "bob@example.com", score: 32, maxScore: 39, timestamp: "2024-03-15T12:15:00Z" },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    score: 37,
    maxScore: 39,
    timestamp: "2024-03-15T13:45:00Z",
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie@example.com",
    score: 39,
    maxScore: 39,
    timestamp: "2024-03-15T14:20:00Z",
  },
  {
    id: "6",
    name: "Eva Martinez",
    email: "eva@example.com",
    score: 34,
    maxScore: 39,
    timestamp: "2024-03-15T15:10:00Z",
  },
  {
    id: "7",
    name: "David Lee",
    email: "david@example.com",
    score: 36,
    maxScore: 39,
    timestamp: "2024-03-15T16:00:00Z",
  },
  {
    id: "8",
    name: "Grace Wang",
    email: "grace@example.com",
    score: 33,
    maxScore: 39,
    timestamp: "2024-03-15T16:45:00Z",
  },
]

interface IndividualResponsesProps {
  quizId: string
}

export function IndividualResponses({ quizId }: IndividualResponsesProps) {
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0)
  const [filters, setFilters] = useState({
    showPerfectScores: true,
    showIncompleteResponses: true,
    sortBy: "newest",
  })

  const filteredResponses = mockResponses
    .filter((response) => {
      if (!filters.showPerfectScores && response.score === response.maxScore) return false
      if (!filters.showIncompleteResponses && response.score < response.maxScore) return false
      return true
    })
    .sort((a, b) => {
      if (filters.sortBy === "newest") {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      }
      if (filters.sortBy === "oldest") {
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      }
      if (filters.sortBy === "highest") {
        return b.score - a.score
      }
      if (filters.sortBy === "lowest") {
        return a.score - b.score
      }
      return 0
    })

  const currentResponse = filteredResponses[currentResponseIndex]

  const handlePrevious = () => {
    if (currentResponseIndex > 0) {
      setCurrentResponseIndex(currentResponseIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentResponseIndex < filteredResponses.length - 1) {
      setCurrentResponseIndex(currentResponseIndex + 1)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  // Add review state
  const [reviewStatuses, setReviewStatuses] = useState<Record<string, "pending" | "approved" | "rejected">>({
    "paragraph-question-1": "pending",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle approve action
  const handleApprove = (questionId: string) => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setReviewStatuses((prev) => ({
        ...prev,
        [questionId]: "approved",
      }))
      setIsSubmitting(false)
      toast({
        title: "Response approved",
        description: "The response has been approved and points awarded.",
      })
    }, 500)
  }

  // Handle reject action
  const handleReject = (questionId: string) => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setReviewStatuses((prev) => ({
        ...prev,
        [questionId]: "rejected",
      }))
      setIsSubmitting(false)
      toast({
        title: "Response rejected",
        description: "The response has been rejected.",
      })
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Select
            value={currentResponse?.id}
            onValueChange={(value) => {
              const index = filteredResponses.findIndex((r) => r.id === value)
              if (index !== -1) setCurrentResponseIndex(index)
            }}
          >
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select respondent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Respondents</SelectLabel>
                {filteredResponses.map((response, index) => (
                  <SelectItem key={response.id} value={response.id}>
                    {response.name} ({response.score}/{response.maxScore})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious} disabled={currentResponseIndex === 0}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Response {currentResponseIndex + 1} of {filteredResponses.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentResponseIndex === filteredResponses.length - 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Score:</span>
            <span className="text-sm">
              {currentResponse?.score} / {currentResponse?.maxScore} points
            </span>
            <Progress value={(currentResponse?.score / currentResponse?.maxScore) * 100} className="h-2 w-24" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter Responses</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filters.showPerfectScores}
                onCheckedChange={(checked) => setFilters((f) => ({ ...f, showPerfectScores: checked }))}
              >
                Show Perfect Scores
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.showIncompleteResponses}
                onCheckedChange={(checked) => setFilters((f) => ({ ...f, showIncompleteResponses: checked }))}
              >
                Show Incomplete Responses
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={filters.sortBy === "newest"}
                onCheckedChange={() => setFilters((f) => ({ ...f, sortBy: "newest" }))}
              >
                Newest First
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.sortBy === "oldest"}
                onCheckedChange={() => setFilters((f) => ({ ...f, sortBy: "oldest" }))}
              >
                Oldest First
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.sortBy === "highest"}
                onCheckedChange={() => setFilters((f) => ({ ...f, sortBy: "highest" }))}
              >
                Highest Score
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.sortBy === "lowest"}
                onCheckedChange={() => setFilters((f) => ({ ...f, sortBy: "lowest" }))}
              >
                Lowest Score
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {currentResponse && (
        <div className="space-y-4">
          <Card className="p-6">
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{currentResponse.name}</h3>
                <span className="text-sm text-muted-foreground">
                  Submitted: {formatDate(currentResponse.timestamp)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{currentResponse.email}</p>
            </div>
          </Card>

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
              <div className="flex items-center gap-2">
                <Textarea
                  placeholder="Add feedback for this response"
                  defaultValue="Good approach!"
                  className="text-sm resize-none h-20"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Needs Review</Badge>
                  <span className="text-xs text-muted-foreground">Paragraph responses require review</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleReject("paragraph-question-1")}
                    disabled={isSubmitting || reviewStatuses["paragraph-question-1"] === "rejected"}
                  >
                    {reviewStatuses["paragraph-question-1"] === "rejected" ? "Rejected" : "Reject"}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleApprove("paragraph-question-1")}
                    disabled={isSubmitting || reviewStatuses["paragraph-question-1"] === "approved"}
                  >
                    {reviewStatuses["paragraph-question-1"] === "approved" ? "Approved" : "Approve"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

