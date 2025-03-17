"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Completion } from "./completion"

// This would typically come from your database
const demoQuiz = {
  title: "Customer Satisfaction Survey",
  description: "Help us improve our products and services",
  questions: [
    {
      id: "1",
      type: "multiple",
      text: "How satisfied are you with our service?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      required: true,
      correctAnswer: "Very Satisfied",
      hasCorrectAnswer: true,
    },
    {
      id: "2",
      type: "checkbox",
      text: "Which features do you use most? (Select all that apply)",
      options: ["Feature A", "Feature B", "Feature C", "Feature D"],
      required: false,
      correctAnswer: ["Feature A", "Feature B"],
      hasCorrectAnswer: true,
    },
    {
      id: "3",
      type: "paragraph",
      text: "How can we improve our service?",
      required: false,
    },
  ],
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [submitted, setSubmitted] = useState(false)
  const [startTime] = useState(new Date())
  const [elapsedTime, setElapsedTime] = useState(0)

  // Update elapsed time every second
  useState(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000))
    }, 1000)
    return () => clearInterval(timer)
  })

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNext = () => {
    if (currentQuestion < demoQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    // Here you would typically submit the answers to your backend
    console.log("Submitted answers:", answers)
    setSubmitted(true)
  }

  const isQuestionAnswered = (questionId: string) => {
    if (!answers[questionId]) return false
    if (Array.isArray(answers[questionId]) && answers[questionId].length === 0) return false
    return true
  }

  const isCurrentQuestionRequired = demoQuiz.questions[currentQuestion]?.required
  const isCurrentQuestionAnswered = isQuestionAnswered(demoQuiz.questions[currentQuestion]?.id)
  const canProceed = !isCurrentQuestionRequired || isCurrentQuestionAnswered

  if (submitted) {
    return <Completion quizId={params.id} showScore={true} />
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        {currentQuestion === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>{demoQuiz.title}</CardTitle>
              <CardDescription>{demoQuiz.description}</CardDescription>
            </CardHeader>
          </Card>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {demoQuiz.questions.length}
            </span>
            <Progress value={((currentQuestion + 1) / demoQuiz.questions.length) * 100} className="h-2 w-24" />
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{demoQuiz.questions[currentQuestion].text}</CardTitle>
            {demoQuiz.questions[currentQuestion].required && (
              <CardDescription className="text-sm text-red-500">* Required</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {demoQuiz.questions[currentQuestion].type === "multiple" && (
              <RadioGroup
                value={answers[demoQuiz.questions[currentQuestion].id]}
                onValueChange={(value) =>
                  setAnswers({
                    ...answers,
                    [demoQuiz.questions[currentQuestion].id]: value,
                  })
                }
              >
                {demoQuiz.questions[currentQuestion].options?.map((option, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${i}`} />
                    <Label htmlFor={`option-${i}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {demoQuiz.questions[currentQuestion].type === "checkbox" && (
              <div className="space-y-2">
                {demoQuiz.questions[currentQuestion].options?.map((option, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox
                      id={`checkbox-${i}`}
                      checked={answers[demoQuiz.questions[currentQuestion].id]?.includes(option)}
                      onCheckedChange={(checked) => {
                        const currentAnswers = answers[demoQuiz.questions[currentQuestion].id] || []
                        setAnswers({
                          ...answers,
                          [demoQuiz.questions[currentQuestion].id]: checked
                            ? [...currentAnswers, option]
                            : currentAnswers.filter((a: string) => a !== option),
                        })
                      }}
                    />
                    <Label htmlFor={`checkbox-${i}`}>{option}</Label>
                  </div>
                ))}
              </div>
            )}

            {demoQuiz.questions[currentQuestion].type === "paragraph" && (
              <Textarea
                placeholder="Your answer"
                value={answers[demoQuiz.questions[currentQuestion].id] || ""}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [demoQuiz.questions[currentQuestion].id]: e.target.value,
                  })
                }
              />
            )}

            {demoQuiz.questions[currentQuestion].type === "short" && (
              <Input
                placeholder="Your answer"
                value={answers[demoQuiz.questions[currentQuestion].id] || ""}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [demoQuiz.questions[currentQuestion].id]: e.target.value,
                  })
                }
              />
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentQuestion < demoQuiz.questions.length - 1 ? (
            <Button onClick={handleNext} disabled={!canProceed}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!canProceed}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

