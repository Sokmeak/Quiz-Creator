"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Share2, BarChart3, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface CompletionProps {
  quizId: string
  score?: number
  totalScore?: number
  showScore?: boolean
}

export function Completion({ quizId, score = 35, totalScore = 39, showScore = true }: CompletionProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/quiz/${quizId}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card className="text-center">
        <CardHeader className="pb-2">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Thank You!</CardTitle>
          <CardDescription>Your response has been recorded</CardDescription>
        </CardHeader>

        {showScore && (
          <CardContent className="pb-2">
            <div className="mx-auto max-w-md space-y-4">
              <div className="text-center">
                <p className="text-lg font-medium">Your Score</p>
                <p className="text-3xl font-bold">
                  {score}/{totalScore}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                <Progress value={(score / totalScore) * 100} className="h-3" />
              </div>

              <div className="rounded-lg bg-muted p-4 text-sm">
                <p className="font-medium">Great job!</p>
                <p className="mt-1 text-muted-foreground">
                  You scored {Math.round((score / totalScore) * 100)}%, which is above average.
                </p>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter className="flex flex-col gap-4 pt-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Quiz
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share this Quiz</DialogTitle>
                  <DialogDescription>Copy the link below to share this quiz with others</DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <Input value={`${window.location.origin}/quiz/${quizId}`} readOnly />
                  <Button onClick={handleCopyLink}>{copied ? "Copied!" : "Copy"}</Button>
                </div>
                <DialogFooter className="mt-4">
                  <Button variant="outline" onClick={() => {}}>
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {showScore && (
              <Button variant="outline" asChild>
                <Link href={`/quiz/${quizId}/results`}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            )}

            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Want to create your own quiz?{" "}
            <Link href="/create" className="text-primary underline">
              Get started here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

