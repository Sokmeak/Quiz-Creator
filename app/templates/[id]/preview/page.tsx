import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// This would typically come from your database based on the template ID
const getTemplateData = (id: string) => {
  const templates = {
    "1": {
      title: "Customer Satisfaction",
      description: "Gather feedback about your products or services",
      category: "feedback",
      questions: [
        {
          id: "q1",
          type: "multiple",
          text: "How satisfied are you with our service?",
          options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
          required: true,
        },
        {
          id: "q2",
          type: "multiple",
          text: "How likely are you to recommend our product to others?",
          options: ["Very Likely", "Likely", "Neutral", "Unlikely", "Very Unlikely"],
          required: true,
        },
        {
          id: "q3",
          type: "checkbox",
          text: "Which features do you use most? (Select all that apply)",
          options: ["Feature A", "Feature B", "Feature C", "Feature D"],
          required: false,
        },
        {
          id: "q4",
          type: "paragraph",
          text: "How can we improve our service?",
          required: false,
        },
        {
          id: "q5",
          type: "multiple",
          text: "How would you rate the quality of our product?",
          options: ["Excellent", "Good", "Average", "Below Average", "Poor"],
          required: true,
        },
      ],
    },
    // Add other templates as needed
  }

  return templates[id as keyof typeof templates]
}

export default function TemplatePreviewPage({ params }: { params: { id: string } }) {
  const template = getTemplateData(params.id)

  if (!template) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Template not found</h1>
        <Button asChild>
          <Link href="/templates">Back to Templates</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{template.title}</h1>
          <p className="text-muted-foreground">{template.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/templates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/create?template=${params.id}`}>
              <Plus className="mr-2 h-4 w-4" />
              Use Template
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
          </Badge>
          <span className="text-sm text-muted-foreground">{template.questions.length} questions</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Question 1 of {template.questions.length}</span>
          <Progress value={(1 / template.questions.length) * 100} className="h-2 w-24" />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">{template.questions[0].text}</CardTitle>
          {template.questions[0].required && (
            <CardDescription className="text-sm text-red-500">* Required</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {template.questions[0].type === "multiple" && (
            <RadioGroup>
              {template.questions[0].options?.map((option, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${i}`} />
                  <Label htmlFor={`option-${i}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">All Questions</h2>
        {template.questions.map((question, index) => (
          <Card key={question.id} className={index === 0 ? "border-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  {index + 1}. {question.text}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {question.type.charAt(0).toUpperCase() + question.type.slice(1)}
                </span>
              </div>
              {question.required && <CardDescription className="text-sm text-red-500">* Required</CardDescription>}
            </CardHeader>
            <CardContent>
              {question.type === "multiple" && (
                <div className="space-y-2">
                  {question.options?.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border-2" />
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
                </div>
              )}

              {question.type === "checkbox" && (
                <div className="space-y-2">
                  {question.options?.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded border-2" />
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
                </div>
              )}

              {question.type === "paragraph" && (
                <Textarea placeholder="Long answer text" disabled className="bg-muted/50" />
              )}

              {question.type === "short" && <Input placeholder="Short answer text" disabled className="bg-muted/50" />}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/templates">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/create?template=${params.id}`}>
            <Plus className="mr-2 h-4 w-4" />
            Use Template
          </Link>
        </Button>
      </div>
    </div>
  )
}

