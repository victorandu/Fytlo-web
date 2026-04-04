"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components"

const navLinks = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2025]/80 backdrop-blur-xl border-b border-white/[0.06] supports-[backdrop-filter]:bg-[#1F2025]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        <div className="relative flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" aria-label="Fytlo home" className="shrink-0">
            <Logo size={32} />
          </a>

          {/* Centered wordmark */}
          <a
            href="/"
            aria-label="Go to homepage"
            className="absolute left-1/2 -translate-x-1/2 text-xl font-light tracking-[0.25em] text-[#EBDCCB] uppercase transition-opacity hover:opacity-75 md:text-2xl"
          >
            Fytlo
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#EBDCCB]/70 hover:text-[#EBDCCB] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#EBDCCB] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button
              asChild
              className="rounded-full text-sm px-4 h-8 bg-[#EBDCCB] text-[#1F2025] hover:bg-[#F5EDE2] font-semibold transition-all hover:scale-105"
            >
              <a href="/#hero">Join Early Access</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#EBDCCB] hover:bg-white/10 rounded-full"
                  aria-label="Open menu"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#1F2025]/95 backdrop-blur-xl w-[280px]"
              >
                <div className="flex flex-col h-full p-6 pt-12">
                  <nav className="flex flex-col gap-1 flex-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-[#EBDCCB]/75 hover:text-[#EBDCCB] py-3 px-4 rounded-lg hover:bg-white/5 transition-all"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <Button
                    asChild
                    className="w-full rounded-full bg-[#EBDCCB] text-[#1F2025] hover:bg-[#F5EDE2] font-semibold"
                  >
                    <a href="/#hero" onClick={() => setIsOpen(false)}>
                      Join Early Access
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  )
}
