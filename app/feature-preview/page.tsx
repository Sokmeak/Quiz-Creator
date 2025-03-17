import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Clock, Zap, Lightbulb, ThumbsUp, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function FeaturePreviewPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Feature Preview</h1>
          <p className="text-muted-foreground">Explore upcoming features and provide feedback</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Features</TabsTrigger>
          <TabsTrigger value="beta">Beta Features</TabsTrigger>
          <TabsTrigger value="requested">Most Requested</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="AI Question Generator"
              description="Generate quiz questions automatically using AI based on your topic"
              status="development"
              progress={75}
              icon={<Zap className="h-10 w-10 text-primary" />}
              eta="Q2 2024"
            />

            <FeatureCard
              title="Advanced Analytics Dashboard"
              description="Get deeper insights with our new analytics dashboard featuring heatmaps and user journey visualization"
              status="planning"
              progress={30}
              icon={<Lightbulb className="h-10 w-10 text-primary" />}
              eta="Q3 2024"
            />

            <FeatureCard
              title="Team Collaboration"
              description="Create and edit quizzes collaboratively with your team members in real-time"
              status="development"
              progress={60}
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              eta="Q2 2024"
            />

            <FeatureCard
              title="Quiz Branching Logic"
              description="Create dynamic quizzes that adapt based on user responses"
              status="testing"
              progress={90}
              icon={<Zap className="h-10 w-10 text-primary" />}
              eta="Q1 2024"
            />

            <FeatureCard
              title="Custom Scoring Algorithms"
              description="Create your own scoring algorithms with weighted questions and partial credit"
              status="planning"
              progress={15}
              icon={<Lightbulb className="h-10 w-10 text-primary" />}
              eta="Q4 2024"
            />

            <FeatureCard
              title="Interactive Question Types"
              description="New question types including drag-and-drop, hotspot, and ranking questions"
              status="development"
              progress={45}
              icon={<Zap className="h-10 w-10 text-primary" />}
              eta="Q3 2024"
            />
          </div>
        </TabsContent>

        <TabsContent value="beta" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BetaFeatureCard
              title="Quiz Leaderboards"
              description="Add competitive elements to your quizzes with public or private leaderboards"
              participants={124}
              feedback={4.7}
              icon={<Star className="h-10 w-10 text-yellow-500" />}
            />

            <BetaFeatureCard
              title="Advanced Export Options"
              description="Export quiz results in multiple formats including PDF, Excel, and CSV with custom filtering"
              participants={87}
              feedback={4.2}
              icon={<Star className="h-10 w-10 text-yellow-500" />}
            />

            <BetaFeatureCard
              title="Quiz Templates Marketplace"
              description="Browse, buy, and sell quiz templates in our new marketplace"
              participants={156}
              feedback={4.5}
              icon={<Star className="h-10 w-10 text-yellow-500" />}
            />

            <BetaFeatureCard
              title="Respondent Profiles"
              description="Create and manage detailed profiles for quiz respondents"
              participants={92}
              feedback={3.9}
              icon={<Star className="h-10 w-10 text-yellow-500" />}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Join the Beta Program</CardTitle>
              <CardDescription>
                Get early access to new features and help shape the future of QuizMaster
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                As a beta tester, you'll get access to experimental features before they're released to the public. Your
                feedback helps us improve and refine these features.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Apply for Beta Access</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="requested" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Requested Features</CardTitle>
              <CardDescription>Features our users are asking for the most</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RequestedFeature
                  title="Offline Mode"
                  description="Allow respondents to take quizzes without an internet connection"
                  votes={342}
                  status="planned"
                />

                <RequestedFeature
                  title="Custom Themes"
                  description="Create and save custom themes for your quizzes"
                  votes={287}
                  status="in-progress"
                />

                <RequestedFeature
                  title="Quiz Timer Options"
                  description="More options for timing quizzes including per-question timers"
                  votes={253}
                  status="planned"
                />

                <RequestedFeature
                  title="Question Bank"
                  description="Create a bank of questions that can be reused across multiple quizzes"
                  votes={241}
                  status="in-progress"
                />

                <RequestedFeature
                  title="Advanced Conditional Logic"
                  description="Show or hide questions based on previous answers"
                  votes={198}
                  status="planned"
                />

                <RequestedFeature
                  title="Multilingual Support"
                  description="Create quizzes in multiple languages with automatic translation"
                  votes={176}
                  status="considering"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <p className="text-sm text-muted-foreground">
                Have a feature idea? Submit your suggestion and vote on features you'd like to see.
              </p>
              <Button>Suggest a Feature</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  status: "planning" | "development" | "testing" | "released"
  progress: number
  icon: React.ReactNode
  eta: string
}

function FeatureCard({ title, description, status, progress, icon, eta }: FeatureCardProps) {
  const statusColors = {
    planning: "bg-yellow-100 text-yellow-800",
    development: "bg-blue-100 text-blue-800",
    testing: "bg-purple-100 text-purple-800",
    released: "bg-green-100 text-green-800",
  }

  const statusText = {
    planning: "Planning",
    development: "In Development",
    testing: "In Testing",
    released: "Released",
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-2 flex justify-between">
          <div className="rounded-full bg-primary/10 p-2">{icon}</div>
          <Badge className={statusColors[status]}>{statusText[status]}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Estimated release: {eta}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}

interface BetaFeatureCardProps {
  title: string
  description: string
  participants: number
  feedback: number
  icon: React.ReactNode
}

function BetaFeatureCard({ title, description, participants, feedback, icon }: BetaFeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-2 flex justify-between">
          <div className="rounded-full bg-primary/10 p-2">{icon}</div>
          <Badge className="bg-blue-100 text-blue-800">Beta</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Beta Participants</span>
            <span className="font-medium">{participants}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Feedback Rating</span>
            <div className="flex items-center gap-1">
              <span className="font-medium">{feedback}</span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(feedback) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Try It</Button>
        <Button variant="outline">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Give Feedback
        </Button>
      </CardFooter>
    </Card>
  )
}

interface RequestedFeatureProps {
  title: string
  description: string
  votes: number
  status: "planned" | "in-progress" | "considering" | "completed"
}

function RequestedFeature({ title, description, votes, status }: RequestedFeatureProps) {
  const statusColors = {
    planned: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    considering: "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
  }

  const statusText = {
    planned: "Planned",
    "in-progress": "In Progress",
    considering: "Considering",
    completed: "Completed",
  }

  return (
    <div className="flex items-start justify-between rounded-lg border p-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <Badge className={statusColors[status]}>{statusText[status]}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <ThumbsUp className="mr-1 h-4 w-4" />
          Vote
        </Button>
        <span className="text-xs font-medium">{votes} votes</span>
      </div>
    </div>
  )
}

