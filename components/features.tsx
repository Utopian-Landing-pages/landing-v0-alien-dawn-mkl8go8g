import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Sparkles, Route } from 'lucide-react'

const features = [
  {
    title: 'Morally Gray Characters',
    description: 'Experience characters with realistic flaws and difficult choices',
    content:
      'Engage with characters that are not simply good or evil, but complex individuals grappling with challenging situations. Every choice reveals new depths of their personalities.',
    icon: Users,
  },
  {
    title: 'Diverse Backstories',
    description: 'Uncover the rich and complex histories of each character',
    content:
      'Explore the origins and motivations that drive the characters in Alien Dawn. Each backstory adds layers of meaning to their actions and decisions.',
    icon: Sparkles,
  },
  {
    title: 'Meaningful Gameplay',
    description: "Your choices directly impact the game's narrative and outcome",
    content:
      'Make decisions that shape the world and the fates of its inhabitants. Every action has consequences that ripple through the story.',
    icon: Route,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A platformer that gets you
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Unique features that resonate with players seeking a mature
            platformer experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group border-border/50 bg-card transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.content}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
