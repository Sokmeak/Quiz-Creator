"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function QuizResults() {
  // This would come from your actual quiz submission
  const results = {
    quizTitle: "Customer Satisfaction Survey",
    score: 80,
    totalQuestions: 5,
    correctAnswers: 4,
    incorrectAnswers: 1,
    answers: [
      {
        question: "How satisfied are you with our service?",
        userAnswer: "Very Satisfied",
        correctAnswer: "Very Satisfied",
        isCorrect: true,
      },
      {
        question: "Which features do you use most?",
        userAnswer: ["Feature A", "Feature C"],
        correctAnswer: ["Feature A", "Feature B"],
        isCorrect: false,
      },
      {
        question: "Would you recommend our service to others?",
        userAnswer: "Yes",
        correctAnswer: "Yes",
        isCorrect: true,
      },
    ],
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{results.quizTitle} - Results</CardTitle>
          <CardDescription>
            You scored {results.score}% ({results.correctAnswers} out of {results.totalQuestions} questions)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex w-full justify-between text-sm">
              <span>0%</span>
              <span>Passing Score: 70%</span>
              <span>100%</span>
            </div>
            <Progress value={results.score} className="h-3 w-full" />
            <div className="mt-2 text-center">
              {results.score >= 70 ? (
                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Passed</div>
              ) : (
                <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">Failed</div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Question Review</h3>

            {results.answers.map((answer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`border-l-4 ${answer.isCorrect ? "border-green-500" : "border-red-500"}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">
                        {index + 1}. {answer.question}
                      </CardTitle>
                      {answer.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">Your Answer:</p>
                        <p className="text-sm">
                          {Array.isArray(answer.userAnswer) ? answer.userAnswer.join(", ") : answer.userAnswer}
                        </p>
                      </div>

                      {!answer.isCorrect && (
                        <div>
                          <p className="text-sm font-medium">Correct Answer:</p>
                          <p className="text-sm">
                            {Array.isArray(answer.correctAnswer)
                              ? answer.correctAnswer.join(", ")
                              : answer.correctAnswer}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">Back to Dashboard</Link>
            </Button>
            <Button asChild>
              <Link href={`/quiz/1`}>Retake Quiz</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

