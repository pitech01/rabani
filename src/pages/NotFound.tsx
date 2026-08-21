import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-ember-600">404</p>
      <h1 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-navy-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button to="/" className="mt-8">
        Back to Home
      </Button>
    </Container>
  )
}
