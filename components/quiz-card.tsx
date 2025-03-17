import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Clock, Users } from "lucide-react"

interface QuizCardProps {
  id: string
  title: string
  createdAt: string
  responses: number
}

export function QuizCard({ id, title, createdAt, responses }: QuizCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {createdAt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-4 w-4" /> {responses} responses
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/10 px-6 py-3">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/quiz/${id}`}>View</Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dashboard/${id}`}>
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

