import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  salonName?: string
  tagline?: string
  bookingUrl?: string
}

export function Hero({
  salonName = 'Luxe Nail Studio',
  tagline = 'Where Beauty Meets Artistry',
  bookingUrl = '#',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Welcome to
          </p>
          <h1 className="mb-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {salonName}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">{tagline}</p>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            Experience the art of luxury nail care. Our expert technicians create stunning manicures,
            pedicures, and nail art in a relaxing, elegant atmosphere designed for your comfort.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="min-w-[200px]">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Your Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[200px]">
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
