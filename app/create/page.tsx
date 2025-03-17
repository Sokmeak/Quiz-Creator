"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PlusCircle,
  Settings,
  Eye,
  Save,
  ArrowLeft,
  ArrowRight,
  Image,
  FileText,
  Clock,
  AlertCircle,
} from "lucide-react"
import { QuestionEditor } from "./question-editor"
import { QuizSettings } from "./quiz-settings"
import { QuizPreview } from "./quiz-preview"
import { QuizThemes } from "./quiz-themes"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { QuestionType } from "@/lib/types"

export default function CreateQuiz() {
  const [activeTab, setActiveTab] = useState("edit")
  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      id: "1",
      type: "multiple",
      text: "How are you doing guys?",
      options: ["KPC", "PP", "SB"],
      required: true,
      points: 5,
    },
  ])
  const [quizTitle, setQuizTitle] = useState("Untitled Quiz")
  const [quizDescription, setQuizDescription] = useState("")
  const [selectedTheme, setSelectedTheme] = useState("default")
  const { toast } = useToast()
  const router = useRouter()

  const addQuestion = (type: string) => {
    const newQuestion: QuestionType = {
      id: `question-${Date.now()}`,
      type: type as "multiple" | "checkbox" | "paragraph" | "short",
      text: "",
      options: type === "multiple" || type === "checkbox" ? ["", ""] : undefined,
      required: false,
      points: 5,
    }

    setQuestions([...questions, newQuestion])
  }

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const updateQuestion = (id: string, data: Partial<QuestionType>) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, ...data } : q)))
  }

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your quiz has been saved as a draft.",
    })
  }

  const handlePublish = () => {
    toast({
      title: "Quiz published!",
      description: "Your quiz is now live and ready to share.",
    })
    router.push("/")
  }

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{quizTitle || "Create Quiz"}</h1>
          <p className="text-muted-foreground">Design your quiz and customize settings</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Publish</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Publish Quiz</DialogTitle>
                <DialogDescription>
                  Are you sure you want to publish this quiz? Once published, it will be available to respondents.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <p className="text-sm">Please review your quiz before publishing.</p>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <p className="font-medium">{quizTitle}</p>
                  <p className="text-sm text-muted-foreground">{questions.length} questions</p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {}}>
                  Cancel
                </Button>
                <Button onClick={handlePublish}>Publish Quiz</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="theme" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Last edited: Just now
          </div>
        </div>

        <TabsContent value="edit" className="space-y-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Quiz Title</Label>
                <Input
                  id="title"
                  placeholder="Enter quiz title"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Enter quiz description"
                  value={quizDescription}
                  onChange={(e) => setQuizDescription(e.target.value)}
                />
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Questions</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Question
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <div className="grid gap-2">
                    <Button variant="ghost" className="justify-start" onClick={() => addQuestion("multiple")}>
                      Multiple Choice
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => addQuestion("checkbox")}>
                      Checkbox
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => addQuestion("paragraph")}>
                      Paragraph
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => addQuestion("short")}>
                      Short Answer
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <ScrollArea className="h-[calc(100vh-350px)]">
              <div className="space-y-4 pr-4">
                {questions.map((question, index) => (
                  <QuestionEditor
                    key={question.id}
                    question={question}
                    index={index}
                    onUpdate={(data) => updateQuestion(question.id, data)}
                    onRemove={() => removeQuestion(question.id)}
                  />
                ))}

                {questions.length === 0 && (
                  <Card className="border-dashed p-6">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-medium">No questions yet</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Get started by adding your first question</p>
                      <Button className="mt-4" onClick={() => addQuestion("multiple")}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Question
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            </ScrollArea>

            {questions.length > 0 && (
              <Card className="border-dashed p-6">
                <Button
                  variant="ghost"
                  className="mx-auto flex w-full max-w-md flex-col items-center gap-2 py-8"
                  onClick={() => addQuestion("multiple")}
                >
                  <PlusCircle className="h-8 w-8 text-muted-foreground" />
                  <span className="text-muted-foreground">Add Another Question</span>
                </Button>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="theme">
          <QuizThemes selectedTheme={selectedTheme} onSelectTheme={setSelectedTheme} />
        </TabsContent>

        <TabsContent value="settings">
          <QuizSettings />
        </TabsContent>

        <TabsContent value="preview">
          <QuizPreview title={quizTitle} description={quizDescription} questions={questions} theme={selectedTheme} />
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>

        <TooltipProvider>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (activeTab === "edit") return
                    const tabs = ["edit", "theme", "settings", "preview"]
                    const currentIndex = tabs.indexOf(activeTab)
                    setActiveTab(tabs[currentIndex - 1])
                  }}
                  disabled={activeTab === "edit"}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous step</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (activeTab === "preview") return
                    const tabs = ["edit", "theme", "settings", "preview"]
                    const currentIndex = tabs.indexOf(activeTab)
                    setActiveTab(tabs[currentIndex + 1])
                  }}
                  disabled={activeTab === "preview"}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next step</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  )
}

