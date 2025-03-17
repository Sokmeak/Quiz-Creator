"use client"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Check, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizThemesProps {
  selectedTheme: string
  onSelectTheme: (theme: string) => void
}

export function QuizThemes({ selectedTheme, onSelectTheme }: QuizThemesProps) {
  const themes = [
    {
      id: "default",
      name: "Default",
      description: "Clean and minimal design",
      primaryColor: "#0a43ff",
      bgColor: "#ffffff",
    },
    {
      id: "dark",
      name: "Dark Mode",
      description: "Modern dark theme",
      primaryColor: "#0a43ff",
      bgColor: "#1a1a1a",
    },
    {
      id: "colorful",
      name: "Colorful",
      description: "Vibrant and engaging",
      primaryColor: "#8b5cf6",
      bgColor: "#f0f9ff",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and distraction-free",
      primaryColor: "#64748b",
      bgColor: "#f8fafc",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Corporate and formal",
      primaryColor: "#0369a1",
      bgColor: "#f1f5f9",
    },
    {
      id: "playful",
      name: "Playful",
      description: "Fun and interactive",
      primaryColor: "#f97316",
      bgColor: "#fffbeb",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quiz Theme</CardTitle>
          <CardDescription>Choose a visual theme for your quiz</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedTheme} onValueChange={onSelectTheme} className="grid gap-4 md:grid-cols-3">
            {themes.map((theme) => (
              <Label
                key={theme.id}
                htmlFor={`theme-${theme.id}`}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                  selectedTheme === theme.id && "border-primary",
                )}
              >
                <RadioGroupItem value={theme.id} id={`theme-${theme.id}`} className="sr-only" />
                <div
                  className="mb-4 flex h-16 w-full items-center justify-center rounded-md"
                  style={{ backgroundColor: theme.bgColor }}
                >
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: theme.primaryColor }}></div>
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="font-medium">{theme.name}</h3>
                  <p className="text-xs text-muted-foreground">{theme.description}</p>
                </div>
                {selectedTheme === theme.id && (
                  <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Colors</CardTitle>
          <CardDescription>Customize the colors of your quiz</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-md" style={{ backgroundColor: "#0a43ff" }}></div>
                <Input id="primary-color" value="#0a43ff" readOnly />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="background-color">Background Color</Label>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: "#ffffff" }}></div>
                <Input id="background-color" value="#ffffff" readOnly />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Palette className="mr-2 h-4 w-4" />
            Customize Colors
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>See how your quiz will look with the selected theme</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="rounded-lg border p-4"
            style={{ backgroundColor: themes.find((t) => t.id === selectedTheme)?.bgColor }}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Sample Question</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full border-2"
                    style={{ borderColor: themes.find((t) => t.id === selectedTheme)?.primaryColor }}
                  >
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: themes.find((t) => t.id === selectedTheme)?.primaryColor }}
                    ></div>
                  </div>
                  <span>Option 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2"></div>
                  <span>Option 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2"></div>
                  <span>Option 3</span>
                </div>
              </div>
              <Button style={{ backgroundColor: themes.find((t) => t.id === selectedTheme)?.primaryColor }}>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

