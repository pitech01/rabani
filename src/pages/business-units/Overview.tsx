import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { CTASection } from '../../components/CTASection'
import { divisions } from '../../data/site'

export function BusinessUnitsOverview() {
  return (
    <>
      <PageHero
        eyebrow="Our Business Units"
        title="One conglomerate, two synergistic verticals"
        subtitle="Rabani Geologistics Limited operates two distinct business units under one corporate umbrella, each with its own capability, leadership focus, and growth path."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col overflow-hidden rounded-none border border-navy-200 bg-white">
              <div className="aspect-video w-full overflow-hidden border-b border-navy-200">
                <img 
                  src="/images/lagos_port_logistics.jpg" 
                  alt="Logistics & Marine Operations" 
                  className="h-full w-full object-cover rounded-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Badge tone="sky">Logistics &amp; Marine</Badge>
                <h2 className="mt-4 font-heading text-2xl font-bold text-navy-950">{divisions.logistics.name}</h2>
                <p className="mt-3 flex-1 text-navy-600">{divisions.logistics.description}</p>
                <Button to={divisions.logistics.href} variant="outline" className="mt-6 self-start">
                  View Division <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-none border border-navy-200 bg-white">
              <div className="aspect-video w-full overflow-hidden border-b border-navy-200">
                <img 
                  src="/images/nigerian_mining_site.jpg" 
                  alt="Solid Minerals Mining" 
                  className="h-full w-full object-cover rounded-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Badge tone="ember">Minerals &amp; Mining</Badge>
                <h2 className="mt-4 font-heading text-2xl font-bold text-navy-950">{divisions.mining.name}</h2>
                <p className="mt-3 flex-1 text-navy-600">{divisions.mining.description}</p>
                <Button to={divisions.mining.href} variant="outline" className="mt-6 self-start">
                  View Division <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
