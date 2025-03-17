import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { PlusCircle, Sparkles } from "lucide-react"
import { QuizCard } from "@/components/quiz-card"

export default function Home() {
  const recentQuizzes = [
    { id: "1", title: "Customer Satisfaction Survey", responses: 24, created: "2 days ago" },
    { id: "2", title: "Product Feedback", responses: 18, created: "1 week ago" },
    { id: "3", title: "Team Evaluation", responses: 12, created: "2 weeks ago" },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link href="/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Quiz
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">256</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 mb-4 text-xl font-semibold">Recent Quizzes</h2>
      <div className="mb-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="rounded-full bg-blue-100 p-3">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">New Feature Preview</h2>
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} id={quiz.id} title={quiz.title} createdAt={quiz.created} responses={quiz.responses} />
        ))}
        <Card className="flex h-[180px] flex-col items-center justify-center border-dashed">
          <Button variant="ghost" asChild>
            <Link href="/create" className="flex flex-col items-center gap-1">
              <PlusCircle className="h-10 w-10 text-muted-foreground" />
              <span className="text-muted-foreground">Create New Quiz</span>
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}

