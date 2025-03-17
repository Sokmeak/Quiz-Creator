"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import type { QuestionType } from "@/lib/types"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

interface QuizPreviewProps {
  title: string
  description: string
  questions: QuestionType[]
  theme: string
}

export function QuizPreview({ title, description, questions, theme }: QuizPreviewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const getThemeStyles = () => {
    switch (theme) {
      case "dark":
        return { background: "#1a1a1a", text: "#ffffff", primary: "#0a43ff" }
      case "colorful":
        return { background: "#f0f9ff", text: "#1e293b", primary: "#8b5cf6" }
      case "minimal":
        return { background: "#f8fafc", text: "#334155", primary: "#64748b" }
      case "professional":
        return { background: "#f1f5f9", text: "#0f172a", primary: "#0369a1" }
      case "playful":
        return { background: "#fffbeb", text: "#1e293b", primary: "#f97316" }
      default:
        return { background: "#ffffff", text: "#0f172a", primary: "#0a43ff" }
    }
  }

  const themeStyles = getThemeStyles()

  return (
    <div
      className="mx-auto max-w-2xl space-y-6 rounded-xl p-6"
      style={{ backgroundColor: themeStyles.background, color: themeStyles.text }}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch
              id="show-answers"
              checked={showCorrectAnswers}
              onCheckedChange={setShowCorrectAnswers}
              style={
                {
                  "--primary": themeStyles.primary,
                } as React.CSSProperties
              }
            />
            <Label htmlFor="show-answers" className="text-xs" style={{ color: themeStyles.text }}>
              {showCorrectAnswers ? (
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" /> Show Answers
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <EyeOff className="h-3 w-3" /> Hide Answers
                </span>
              )}
            </Label>
          </div>
          <Progress
            value={((currentQuestion + 1) / questions.length) * 100}
            className="h-2 w-24"
            style={
              {
                backgroundColor: `${themeStyles.primary}20`,
                "--primary": themeStyles.primary,
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      {currentQuestion === 0 && (
        <Card
          style={{
            backgroundColor: themeStyles.background,
            color: themeStyles.text,
            borderColor: `${themeStyles.text}20`,
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: themeStyles.text }}>{title || "Untitled Quiz"}</CardTitle>
            {description && <CardDescription style={{ color: `${themeStyles.text}80` }}>{description}</CardDescription>}
          </CardHeader>
        </Card>
      )}

      <Card
        style={{
          backgroundColor: themeStyles.background,
          color: themeStyles.text,
          borderColor: `${themeStyles.text}20`,
        }}
      >
        <CardHeader>
          <CardTitle className="text-base" style={{ color: themeStyles.text }}>
            {questions[currentQuestion]?.text || "Question"}
            {questions[currentQuestion]?.points && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({questions[currentQuestion].points} {questions[currentQuestion].points === 1 ? "point" : "points"})
              </span>
            )}
          </CardTitle>
          {questions[currentQuestion]?.required && (
            <CardDescription className="text-sm" style={{ color: "#ef4444" }}>
              * Required
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {questions[currentQuestion]?.type === "multiple" && questions[currentQuestion]?.options && (
            <RadioGroup>
              {questions[currentQuestion].options.map((option, i) => {
                const isCorrect =
                  questions[currentQuestion].hasCorrectAnswer && questions[currentQuestion].correctAnswer === option

                return (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option || `option-${i}`}
                      id={`option-${currentQuestion}-${i}`}
                      style={
                        {
                          borderColor: showCorrectAnswers && isCorrect ? "#10b981" : themeStyles.primary,
                          "--primary": themeStyles.primary,
                        } as React.CSSProperties
                      }
                    />
                    <Label
                      htmlFor={`option-${currentQuestion}-${i}`}
                      style={{ color: themeStyles.text }}
                      className="flex items-center gap-2"
                    >
                      {option || `Option ${i + 1}`}
                      {showCorrectAnswers && isCorrect && questions[currentQuestion].hasCorrectAnswer && (
                        <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Correct
                        </span>
                      )}
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          )}

          {questions[currentQuestion]?.type === "checkbox" && questions[currentQuestion]?.options && (
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, i) => {
                const isCorrect =
                  questions[currentQuestion].hasCorrectAnswer &&
                  Array.isArray(questions[currentQuestion].correctAnswer) &&
                  questions[currentQuestion].correctAnswer.includes(option)

                return (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox
                      id={`checkbox-${currentQuestion}-${i}`}
                      style={
                        {
                          borderColor: showCorrectAnswers && isCorrect ? "#10b981" : themeStyles.primary,
                          "--primary": themeStyles.primary,
                        } as React.CSSProperties
                      }
                    />
                    <Label
                      htmlFor={`checkbox-${currentQuestion}-${i}`}
                      style={{ color: themeStyles.text }}
                      className="flex items-center gap-2"
                    >
                      {option || `Option ${i + 1}`}
                      {showCorrectAnswers && isCorrect && questions[currentQuestion].hasCorrectAnswer && (
                        <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Correct
                        </span>
                      )}
                    </Label>
                  </div>
                )
              })}
            </div>
          )}

          {questions[currentQuestion]?.type === "paragraph" && (
            <Textarea
              placeholder="Your answer"
              style={{
                backgroundColor: `${themeStyles.text}10`,
                borderColor: `${themeStyles.text}20`,
                color: themeStyles.text,
              }}
            />
          )}

          {questions[currentQuestion]?.type === "short" && (
            <Input
              placeholder="Your answer"
              style={{
                backgroundColor: `${themeStyles.text}10`,
                borderColor: `${themeStyles.text}20`,
                color: themeStyles.text,
              }}
            />
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          style={{
            borderColor: themeStyles.primary,
            color: themeStyles.primary,
          }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        {currentQuestion < questions.length - 1 ? (
          <Button
            onClick={handleNext}
            style={{
              backgroundColor: themeStyles.primary,
              color: "#ffffff",
            }}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: themeStyles.primary,
              color: "#ffffff",
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  )
}

