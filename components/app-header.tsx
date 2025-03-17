"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, HelpCircle, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="h-6 w-6 rounded-full bg-primary"></span>
            <span>QuizMaster</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-64 rounded-full bg-background pl-8 md:w-80" />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>

          <ModeToggle />

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

