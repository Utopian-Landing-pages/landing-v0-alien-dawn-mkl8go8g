'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Email submitted:', email)
    // Handle email submission
    setEmail('')
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to dive into a platformer that gets you?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg md:text-xl">
            Sign up for exclusive updates and early access!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background pl-10 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="h-12 min-w-[120px]"
            >
              Sign Up
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            {'We respect your privacy. Unsubscribe at any time.'}
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
    </section>
  )
}
