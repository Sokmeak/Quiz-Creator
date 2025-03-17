import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QuizSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure the basic settings for your quiz</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Collect Email Addresses</Label>
              <p className="text-sm text-muted-foreground">Require respondents to sign in with email</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Limit to One Response</Label>
              <p className="text-sm text-muted-foreground">Respondents can only submit once</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Progress Bar</Label>
              <p className="text-sm text-muted-foreground">Display progress through the quiz</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Shuffle Question Order</Label>
              <p className="text-sm text-muted-foreground">Randomize the order of questions</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Presentation</CardTitle>
          <CardDescription>Customize how your quiz appears to respondents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="theme">Theme</Label>
            <Select defaultValue="default">
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="colorful">Colorful</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmation">Confirmation Message</Label>
            <Input id="confirmation" placeholder="Thank you for completing the quiz!" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scoring & Results</CardTitle>
          <CardDescription>Configure how the quiz is scored and results are displayed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Scoring</Label>
              <p className="text-sm text-muted-foreground">Grade responses based on correct answers</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Score to Respondents</Label>
              <p className="text-sm text-muted-foreground">Display score after submission</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Correct Answers</Label>
              <p className="text-sm text-muted-foreground">Reveal correct answers after submission</p>
            </div>
            <Switch />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="passing-score">Passing Score (%)</Label>
            <div className="flex items-center gap-2">
              <Input id="passing-score" type="number" min="0" max="100" defaultValue="70" />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">Set the minimum percentage required to pass the quiz</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="feedback-correct">Feedback for Correct Answers</Label>
            <Input
              id="feedback-correct"
              placeholder="Great job! That's correct."
              defaultValue="Great job! That's correct."
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="feedback-incorrect">Feedback for Incorrect Answers</Label>
            <Input
              id="feedback-incorrect"
              placeholder="Sorry, that's not correct."
              defaultValue="Sorry, that's not correct."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

