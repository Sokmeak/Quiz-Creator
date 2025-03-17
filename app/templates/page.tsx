import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, Sparkles } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const templates = [
    {
      id: "1",
      title: "Customer Satisfaction",
      description: "Gather feedback about your products or services",
      category: "feedback",
      questions: 10,
    },
    {
      id: "2",
      title: "Event Registration",
      description: "Collect information from event attendees",
      category: "registration",
      questions: 8,
    },
    {
      id: "3",
      title: "Job Application",
      description: "Screen candidates for open positions",
      category: "hr",
      questions: 15,
    },
    {
      id: "4",
      title: "Product Knowledge Quiz",
      description: "Test knowledge about your products",
      category: "education",
      questions: 12,
    },
    {
      id: "5",
      title: "Website Feedback",
      description: "Gather insights about your website usability",
      category: "feedback",
      questions: 7,
    },
    {
      id: "6",
      title: "Training Assessment",
      description: "Evaluate training effectiveness",
      category: "education",
      questions: 20,
    },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Templates</h1>
          <p className="text-muted-foreground">Start with a pre-built quiz template</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search templates..." className="pl-8 md:w-[300px]" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="rounded-full bg-blue-100 p-3">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Feature Preview Available</h2>
                <p className="text-muted-foreground mb-4">
                  Check out our upcoming features and provide feedback to help shape the future of QuizMaster.
                </p>
                <Button asChild>
                  <Link href="/feature-preview">View Feature Preview</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="hr">HR</TabsTrigger>
          <TabsTrigger value="registration">Registration</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                    </span>
                    <span>{template.questions} questions</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/templates/${template.id}/preview`}>Preview</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/create?template=${template.id}`}>
                      <Plus className="mr-2 h-4 w-4" />
                      Use Template
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {["feedback", "education", "hr", "registration"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templates
                .filter((template) => template.category === category)
                .map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <CardTitle>{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                        </span>
                        <span>{template.questions} questions</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <Link href={`/templates/${template.id}/preview`}>Preview</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/create?template=${template.id}`}>
                          <Plus className="mr-2 h-4 w-4" />
                          Use Template
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10 rounded-lg border-2 border-dashed p-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Plus className="h-10 w-10 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-medium">Create Custom Template</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Don't see what you need? Create your own template from scratch.
        </p>
        <Button className="mt-4" asChild>
          <Link href="/create">Create Template</Link>
        </Button>
      </div>
    </div>
  )
}

