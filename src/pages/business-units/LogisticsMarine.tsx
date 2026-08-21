import { CheckCircle2, MapPinned, Truck } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { VisualPanel } from '../../components/ui/VisualPanel'
import { CTASection } from '../../components/CTASection'
import { logisticsCapabilities, logisticsServices } from '../../data/content'

export function LogisticsMarine() {
  return (
    <>
      <PageHero
        eyebrow="Business Unit"
        title="Logistics & Marine Operations"
        subtitle="Barge operations, container haulage, clearing and forwarding, and supply chain solutions moving cargo across Nigeria's waterways and trade corridors."
        tone="navy"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="An end-to-end logistics capability"
                subtitle="From marine transport to inland haulage and customs clearance, this division gives clients a single, accountable partner for moving cargo across Nigeria."
              />
              <ul className="mt-8 space-y-3">
                {logisticsCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy-700">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-navy-200 p-2 bg-navy-50 rounded-none">
              <img 
                src="/images/lagos_port_logistics.jpg" 
                alt="Marine & Barge Fleet Operations" 
                className="w-full aspect-[4/3] object-cover rounded-none border border-navy-200"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Services" title="What this division delivers" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {logisticsServices.map((service) => (
              <FeatureCard key={service.title} icon={Truck} title={service.title} description={service.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <VisualPanel icon={MapPinned} label="GPS-Enabled Fleet Tracking" tone="sky" className="order-last lg:order-first" />
            <div>
              <SectionHeading
                eyebrow="Technology"
                title="Fleet visibility, end to end"
                subtitle="GPS-enabled tracking gives clients and management real-time visibility of barges and haulage vehicles in transit, supporting reliable delivery timelines and cargo security."
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a logistics partner you can rely on?"
        subtitle="Talk to us about barge operations, haulage capacity, or clearing and forwarding support."
      />
    </>
  )
}
