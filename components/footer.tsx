import { Gamepad2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Alien Dawn</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A realistic, modern-day platformer for adults featuring compelling
              characters and meaningful choices.
            </p>
          </div>

          {/* Game */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Game</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-foreground"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Characters
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Alien Dawn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
