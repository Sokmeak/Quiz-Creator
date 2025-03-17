import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, Filter, Mail, MoreHorizontal, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function RespondentsPage() {
  // Sample data for respondents
  const respondents = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      quizzes: 3,
      lastResponse: "2 days ago",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      quizzes: 5,
      lastResponse: "1 week ago",
      status: "active",
    },
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob@example.com",
      quizzes: 2,
      lastResponse: "3 days ago",
      status: "active",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      quizzes: 4,
      lastResponse: "1 day ago",
      status: "active",
    },
    {
      id: "5",
      name: "Charlie Davis",
      email: "charlie@example.com",
      quizzes: 1,
      lastResponse: "2 weeks ago",
      status: "inactive",
    },
    {
      id: "6",
      name: "Eva Martinez",
      email: "eva@example.com",
      quizzes: 6,
      lastResponse: "5 days ago",
      status: "active",
    },
    {
      id: "7",
      name: "David Lee",
      email: "david@example.com",
      quizzes: 3,
      lastResponse: "1 month ago",
      status: "inactive",
    },
    {
      id: "8",
      name: "Grace Wang",
      email: "grace@example.com",
      quizzes: 2,
      lastResponse: "4 days ago",
      status: "active",
    },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Respondents</h1>
          <p className="text-muted-foreground">Manage and analyze quiz respondents</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search respondents..." className="pl-8 md:w-[300px]" />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Respondent
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Respondent</DialogTitle>
                <DialogDescription>Add a new respondent to your quiz platform</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Add any notes about this respondent" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Respondent</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All Respondents</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="quizzes">Most Quizzes</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Respondent List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="w-12 px-4 py-3 text-left">
                    <Checkbox />
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Name</th>
                  <th className="px-4 py-3 text-left font-medium">Email</th>
                  <th className="px-4 py-3 text-left font-medium">Quizzes Taken</th>
                  <th className="px-4 py-3 text-left font-medium">Last Response</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {respondents.map((respondent) => (
                  <tr key={respondent.id} className="border-b">
                    <td className="px-4 py-3">
                      <Checkbox />
                    </td>
                    <td className="px-4 py-3 font-medium">{respondent.name}</td>
                    <td className="px-4 py-3">{respondent.email}</td>
                    <td className="px-4 py-3">{respondent.quizzes}</td>
                    <td className="px-4 py-3">{respondent.lastResponse}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          respondent.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {respondent.status.charAt(0).toUpperCase() + respondent.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>View Responses</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>8</strong> of <strong>8</strong> respondents
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Respondents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">248</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Respondents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">186</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Quizzes Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

