"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Trash2, GripVertical, Copy, ArrowUp, ArrowDown, MoreVertical } from "lucide-react"
import type { QuestionType } from "@/lib/types"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

interface QuestionEditorProps {
  question: QuestionType
  index: number
  onUpdate: (data: Partial<QuestionType>) => void
  onRemove: () => void
}

export function QuestionEditor({ question, index, onUpdate, onRemove }: QuestionEditorProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const addOption = () => {
    if (!question.options) return
    onUpdate({ options: [...question.options, ""] })
  }

  const updateOption = (index: number, value: string) => {
    if (!question.options) return
    const newOptions = [...question.options]
    newOptions[index] = value
    onUpdate({ options: newOptions })
  }

  const removeOption = (index: number) => {
    if (!question.options || question.options.length <= 2) return
    const newOptions = [...question.options]
    newOptions.splice(index, 1)
    onUpdate({ options: newOptions })
  }

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GripVertical className="h-5 w-5 cursor-move text-muted-foreground" />
          <h3 className="text-lg font-medium">Question {index + 1}</h3>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {}}>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                <ArrowUp className="mr-2 h-4 w-4" />
                Move Up
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                <ArrowDown className="mr-2 h-4 w-4" />
                Move Down
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onRemove} className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Question Type</Label>
          <RadioGroup
            value={question.type}
            onValueChange={(value) =>
              onUpdate({
                type: value as "multiple" | "checkbox" | "paragraph" | "short",
                options: value === "multiple" || value === "checkbox" ? ["", ""] : undefined,
              })
            }
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multiple" id={`multiple-${question.id}`} />
              <Label htmlFor={`multiple-${question.id}`}>Multiple Choice</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="checkbox" id={`checkbox-${question.id}`} />
              <Label htmlFor={`checkbox-${question.id}`}>Checkbox</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paragraph" id={`paragraph-${question.id}`} />
              <Label htmlFor={`paragraph-${question.id}`}>Paragraph</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="short" id={`short-${question.id}`} />
              <Label htmlFor={`short-${question.id}`}>Short Answer</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`question-${question.id}`}>Question</Label>
          <Textarea
            id={`question-${question.id}`}
            placeholder="Enter your question"
            value={question.text}
            onChange={(e) => onUpdate({ text: e.target.value })}
          />
        </div>

        {(question.type === "multiple" || question.type === "checkbox") && question.options && (
          <div className="space-y-2">
            <Label>Options</Label>
            <div className="space-y-2">
              {question.options.map((option, i) => {
                const isCorrect =
                  question.hasCorrectAnswer &&
                  (question.type === "multiple"
                    ? question.correctAnswer === option
                    : Array.isArray(question.correctAnswer) && question.correctAnswer.includes(option))

                return (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border ${isCorrect ? "border-green-500" : ""}`}
                    >
                      {question.type === "multiple" ? (
                        <div
                          className={`h-4 w-4 rounded-full border-2 ${isCorrect ? "border-green-500 bg-green-500/20" : ""}`}
                        />
                      ) : (
                        <div
                          className={`h-4 w-4 rounded border ${isCorrect ? "border-green-500 bg-green-500/20" : ""}`}
                        />
                      )}
                    </div>
                    <Input
                      placeholder={`Option ${i + 1}`}
                      value={option}
                      onChange={(e) => updateOption(i, e.target.value)}
                      className={isCorrect ? "border-green-200 bg-green-50" : ""}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOption(i)}
                      disabled={question.options?.length <= 2}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {isCorrect && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Correct
                      </span>
                    )}
                  </div>
                )
              })}

              <Button variant="outline" size="sm" className="mt-2" onClick={addOption}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Option
              </Button>
            </div>
          </div>
        )}

        {(question.type === "multiple" || question.type === "checkbox") &&
          question.hasCorrectAnswer &&
          question.options && (
            <div className="mt-4 space-y-2 rounded-md bg-muted/50 p-4">
              <Label>Correct Answer(s)</Label>
              {question.type === "multiple" && (
                <RadioGroup
                  value={question.correctAnswer as string}
                  onValueChange={(value) => onUpdate({ correctAnswer: value })}
                  className="space-y-2"
                >
                  {question.options.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`correct-${question.id}-${i}`} />
                      <Label htmlFor={`correct-${question.id}-${i}`} className="text-sm">
                        {option || `Option ${i + 1}`}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {question.type === "checkbox" && (
                <div className="space-y-2">
                  {question.options.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Checkbox
                        id={`correct-checkbox-${question.id}-${i}`}
                        checked={Array.isArray(question.correctAnswer) && question.correctAnswer.includes(option)}
                        onCheckedChange={(checked) => {
                          const currentAnswers = Array.isArray(question.correctAnswer)
                            ? [...question.correctAnswer]
                            : []
                          if (checked) {
                            onUpdate({ correctAnswer: [...currentAnswers, option] })
                          } else {
                            onUpdate({
                              correctAnswer: currentAnswers.filter((answer) => answer !== option),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={`correct-checkbox-${question.id}-${i}`} className="text-sm">
                        {option || `Option ${i + 1}`}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-2 text-xs text-muted-foreground">
                {question.type === "multiple"
                  ? "Select the correct answer for this question."
                  : "Select all correct answers for this question."}
              </p>
            </div>
          )}

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <Switch
              id={`required-${question.id}`}
              checked={question.required}
              onCheckedChange={(checked) => onUpdate({ required: checked })}
            />
            <Label htmlFor={`required-${question.id}`}>Required</Label>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setShowAdvanced(!showAdvanced)}>
            {showAdvanced ? "Hide Advanced" : "Show Advanced"}
          </Button>
        </div>

        <div className={cn("space-y-4 rounded-md bg-muted/50 p-4", !showAdvanced && "hidden")}>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={`points-${question.id}`}>Points</Label>
              <div className="flex items-center gap-2">
                <Slider
                  id={`points-${question.id}`}
                  min={0}
                  max={20}
                  step={1}
                  value={[question.points || 0]}
                  onValueChange={(value) => onUpdate({ points: value[0] })}
                  className="w-[180px] mr-2"
                />
                <Input
                  type="number"
                  min={0}
                  max={20}
                  value={question.points || 0}
                  onChange={(e) => onUpdate({ points: Number.parseInt(e.target.value) || 0 })}
                  className="w-16 h-8"
                />
              </div>
            </div>
          </div>

          {(question.type === "multiple" || question.type === "checkbox") && (
            <div className="flex items-center gap-2">
              <Switch
                id={`shuffle-${question.id}`}
                checked={question.shuffleOptions}
                onCheckedChange={(checked) => onUpdate({ shuffleOptions: checked })}
              />
              <Label htmlFor={`shuffle-${question.id}`}>Shuffle Options</Label>
            </div>
          )}

          {(question.type === "multiple" || question.type === "checkbox") && (
            <div className="flex items-center gap-2">
              <Switch
                id={`correct-answer-${question.id}`}
                checked={question.hasCorrectAnswer}
                onCheckedChange={(checked) => {
                  if (checked) {
                    // Initialize correct answer when enabling
                    if (question.type === "multiple") {
                      onUpdate({
                        hasCorrectAnswer: checked,
                        correctAnswer: question.options?.[0] || "",
                      })
                    } else if (question.type === "checkbox") {
                      onUpdate({
                        hasCorrectAnswer: checked,
                        correctAnswer: [],
                      })
                    }
                  } else {
                    onUpdate({
                      hasCorrectAnswer: checked,
                      correctAnswer: undefined,
                    })
                  }
                }}
              />
              <Label htmlFor={`correct-answer-${question.id}`}>Set Correct Answer</Label>
            </div>
          )}

          {question.type === "paragraph" && (
            <>
              <div className="flex items-center gap-2">
                <Switch
                  id={`require-review-${question.id}`}
                  checked={question.requireReview}
                  onCheckedChange={(checked) => onUpdate({ requireReview: checked })}
                />
                <Label htmlFor={`require-review-${question.id}`}>Require Review Before Publishing</Label>
                <div className="ml-2">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Recommended for paragraph questions
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Switch
                  id={`manual-scoring-${question.id}`}
                  checked={question.manualScoring}
                  onCheckedChange={(checked) => onUpdate({ manualScoring: checked })}
                />
                <Label htmlFor={`manual-scoring-${question.id}`}>Enable Manual Scoring</Label>
                <div className="ml-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Allows reviewers to assign points
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

