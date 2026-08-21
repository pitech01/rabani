import { Container } from './layout/Container'
import { Button } from './ui/Button'

export function CTASection({
  title = 'Ready to work with an integrated conglomerate?',
  subtitle = 'Whether you need logistics capacity, mineral supply, or a growth partner, our team is ready to talk.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="border-t-4 border-ember-600 bg-navy-950">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-navy-300">{subtitle}</p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button to="/contact" variant="accent">
            Make an Inquiry
          </Button>
          <Button to="/about" variant="ghost-light">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  )
}
