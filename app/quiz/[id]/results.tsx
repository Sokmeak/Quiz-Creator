"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, ArrowLeft, Download, Printer } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function QuizResults({ params }: { params: { id: string } }) {
  // This would come from your actual quiz submission
  const results = {
    quizTitle: "Customer Satisfaction Survey",
    score: 35,
    totalPoints: 39,
    totalQuestions: 5,
    correctAnswers: 4,
    incorrectAnswers: 1,
    answers: [
      {
        question: "How satisfied are you with our service?",
        userAnswer: "Very Satisfied",
        correctAnswer: "Very Satisfied",
        isCorrect: true,
        points: 5,
        maxPoints: 5,
      },
      {
        question: "Which features do you use most?",
        userAnswer: ["Feature A", "Feature C"],
        correctAnswer: ["Feature A", "Feature B"],
        isCorrect: false,
        points: 5,
        maxPoints: 10,
      },
      {
        question: "Would you recommend our service to others?",
        userAnswer: "Yes",
        correctAnswer: "Yes",
        isCorrect: true,
        points: 10,
        maxPoints: 10,
      },
      {
        question: "How often do you use our product?",
        userAnswer: "Daily",
        correctAnswer: "Daily",
        isCorrect: true,
        points: 5,
        maxPoints: 5,
      },
      {
        question: "What improvements would you suggest?",
        userAnswer: "Better mobile support and faster loading times",
        points: 10,
        maxPoints: 10,
      },
    ],
  }

  const percentage = Math.round((results.score / results.totalPoints) * 100)

  return (
    <div className="container max-w-3xl py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">{results.quizTitle} - Results</h1>
          <p className="text-muted-foreground">Completed on March 15, 2024</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Score Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary text-center">
              <div>
                <div className="text-3xl font-bold">{percentage}%</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">
                {results.score} out of {results.totalPoints} points
              </p>
              <p className="text-xs text-muted-foreground">
                {results.correctAnswers} correct, {results.incorrectAnswers} incorrect
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0%</span>
              <span>Passing Score: 70%</span>
              <span>100%</span>
            </div>
            <Progress value={percentage} className="h-3" />
            <div className="mt-2 text-center">
              {percentage >= 70 ? (
                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Passed</div>
              ) : (
                <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">Failed</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="mb-4 text-xl font-semibold">Question Review</h2>

      <div className="space-y-4">
        {results.answers.map((answer, index) => (
          <Card key={index} className="overflow-hidden">
            <div
              className={
                answer.isCorrect === undefined
                  ? ""
                  : answer.isCorrect
                    ? "border-l-4 border-green-500"
                    : "border-l-4 border-red-500"
              }
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">
                      {index + 1}. {answer.question}
                    </CardTitle>
                    <CardDescription>
                      {answer.points}/{answer.maxPoints} points
                    </CardDescription>
                  </div>
                  {answer.isCorrect !== undefined &&
                    (answer.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Your Answer:</p>
                    <p className="text-sm">
                      {Array.isArray(answer.userAnswer) ? answer.userAnswer.join(", ") : answer.userAnswer}
                    </p>
                  </div>

                  {answer.isCorrect === false && answer.correctAnswer && (
                    <div>
                      <Separator className="my-2" />
                      <p className="text-sm font-medium">Correct Answer:</p>
                      <p className="text-sm">
                        {Array.isArray(answer.correctAnswer) ? answer.correctAnswer.join(", ") : answer.correctAnswer}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/quiz/${params.id}/completion`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/quiz/${params.id}`}>Take Quiz Again</Link>
        </Button>
      </div>
    </div>
  )
}

