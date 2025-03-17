import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Acme Inc." />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-destructive/20 p-4">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. All your data will be permanently removed.
                </p>
                <Button variant="destructive" className="mt-4">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Customize the appearance of the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Color Mode</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="light" name="theme" className="h-4 w-4" defaultChecked />
                    <Label htmlFor="light">Light</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="dark" name="theme" className="h-4 w-4" />
                    <Label htmlFor="dark">Dark</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="system" name="theme" className="h-4 w-4" />
                    <Label htmlFor="system">System</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="grid grid-cols-6 gap-2">
                  <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0a43ff] ring-2 ring-[#0a43ff] ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="h-10 w-10 cursor-pointer rounded-full bg-[#8b5cf6]"></div>
                  <div className="h-10 w-10 cursor-pointer rounded-full bg-[#ec4899]"></div>
                  <div className="h-10 w-10 cursor-pointer rounded-full bg-[#f97316]"></div>
                  <div className="h-10 w-10 cursor-pointer rounded-full bg-[#10b981]"></div>
                  <div className="h-10 w-10 cursor-pointer rounded-full bg-[#64748b]"></div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Layout</CardTitle>
              <CardDescription>Customize the layout of the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">Reduce spacing and padding throughout the UI</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sidebar</Label>
                  <p className="text-sm text-muted-foreground">Show or hide the sidebar navigation</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable or disable UI animations</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Layout</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Manage your email notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Quiz Responses</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications when someone completes your quiz
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Quiz Comments</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications when someone comments on your quiz
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about new features and improvements</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Summary</Label>
                  <p className="text-sm text-muted-foreground">Receive a weekly summary of your quiz performance</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-App Notifications</CardTitle>
              <CardDescription>Manage your in-app notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Quiz Responses</Label>
                  <p className="text-sm text-muted-foreground">Show notifications when someone completes your quiz</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Quiz Comments</Label>
                  <p className="text-sm text-muted-foreground">Show notifications when someone comments on your quiz</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Show notifications about system updates and maintenance
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quiz Branding</CardTitle>
              <CardDescription>Customize the branding of your quizzes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-md border bg-muted"></div>
                  <Button variant="outline">Upload Logo</Button>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 200x200px. Max file size: 2MB.</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Brand Color</Label>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-md bg-[#0a43ff]"></div>
                  <Input defaultValue="#0a43ff" className="w-32" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="brand-name">Brand Name</Label>
                <Input id="brand-name" defaultValue="QuizMaster" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand-tagline">Tagline (Optional)</Label>
                <Input id="brand-tagline" defaultValue="Create and analyze quizzes with ease" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand-website">Website URL (Optional)</Label>
                <Input id="brand-website" defaultValue="https://quizmaster.example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Branding</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Customize the email templates sent to respondents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="invitation-subject">Invitation Email Subject</Label>
                <Input id="invitation-subject" defaultValue="You've been invited to take a quiz" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invitation-template">Invitation Email Template</Label>
                <Textarea
                  id="invitation-template"
                  rows={4}
                  defaultValue="Hello,

You've been invited to take the quiz: {{quiz_title}}. 

Click the link below to start:
{{quiz_link}}

Thank you,
{{sender_name}}"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="completion-subject">Completion Email Subject</Label>
                <Input id="completion-subject" defaultValue="Thank you for completing the quiz" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="completion-template">Completion Email Template</Label>
                <Textarea
                  id="completion-template"
                  rows={4}
                  defaultValue="Hello {{respondent_name}},

Thank you for completing the quiz: {{quiz_title}}.

{{#if show_score}}
Your score: {{score}}/{{total_score}}
{{/if}}

{{#if custom_message}}
{{custom_message}}
{{/if}}

Thank you,
{{sender_name}}"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Templates</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>Manage your connected third-party services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4285F4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-1.5"></path>
                      <path d="M22 6l-10 7L2 6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Google</h3>
                    <p className="text-sm text-muted-foreground">Connected as john.doe@gmail.com</p>
                  </div>
                </div>
                <Button variant="outline">Disconnect</Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1DA1F2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0077B5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EA4335]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Slack</h3>
                    <p className="text-sm text-muted-foreground">Connected to Acme Inc. workspace</p>
                  </div>
                </div>
                <Button variant="outline">Disconnect</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Add Integration</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage your API keys and access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
                <div className="flex items-center gap-2">
                  <Input type="password" value="••••••••••••••••••••••••••••••" readOnly />
                  <Button variant="outline">Show</Button>
                  <Button variant="outline">Copy</Button>
                </div>
                <p className="text-xs text-muted-foreground">Last used: 2 days ago</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Webhook URL</Label>
                <div className="flex items-center gap-2">
                  <Input defaultValue="https://example.com/webhook" />
                  <Button variant="outline">Test</Button>
                </div>
                <p className="text-xs text-muted-foreground">Receive real-time updates when events occur</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>API Access Level</Label>
                <Select defaultValue="read_write">
                  <SelectTrigger>
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="read_only">Read Only</SelectItem>
                    <SelectItem value="read_write">Read & Write</SelectItem>
                    <SelectItem value="full_access">Full Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Regenerate API Key</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

