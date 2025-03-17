"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Home, Settings, Users, PlusCircle, FolderOpen, Sparkles } from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "My Quizzes",
      icon: FileText,
      href: "/quizzes",
      active: pathname === "/quizzes",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/analytics",
      active: pathname === "/analytics",
    },
    {
      label: "Templates",
      icon: FolderOpen,
      href: "/templates",
      active: pathname === "/templates",
    },
    {
      label: "Feature Preview",
      icon: Sparkles,
      href: "/feature-preview",
      active: pathname === "/feature-preview",
    },
    {
      label: "Respondents",
      icon: Users,
      href: "/respondents",
      active: pathname === "/respondents",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <Button asChild className="mb-4 justify-start gap-2">
          <Link href="/create">
            <PlusCircle className="h-4 w-4" />
            Create Quiz
          </Link>
        </Button>

        <nav className="flex flex-col gap-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                route.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

