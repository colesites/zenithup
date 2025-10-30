"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-700 dark:via-orange-800 dark:to-orange-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-orange-950 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-2xl font-bold text-white">ZenithUp</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-orange-50 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/demo"
              className="text-sm text-orange-50 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#features"
              className="text-sm text-orange-50 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#cta"
              className="text-sm text-orange-50 hover:text-white transition-colors"
            >
              CTA
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Menu className="w-6 h-6 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link href="/demo">
                  <DropdownMenuItem>Demo</DropdownMenuItem>
                </Link>
                <Link href="#features">
                  <DropdownMenuItem>Features</DropdownMenuItem>
                </Link>
                <Link href="#cta">
                  <DropdownMenuItem>CTA</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/sign-in" className="max-md:hidden">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up" className="max-md:hidden">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
