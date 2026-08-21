import { HardHat, ShieldCheck, Umbrella, Wrench } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FeatureCard } from '../components/ui/FeatureCard'
import { CTASection } from '../components/CTASection'
import { safetyPillars } from '../data/content'

const icons = [ShieldCheck, HardHat, Umbrella, Wrench]

export function Safety() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Risk Management"
        title="Safety is non-negotiable"
        subtitle="Across marine operations, haulage, and mining sites, Rabani Geologistics runs on a zero-tolerance safety culture backed by compliance, insurance, and preventive maintenance."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Approach" title="How we manage risk" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safetyPillars.map((pillar, index) => (
              <FeatureCard
                key={pillar.title}
                icon={icons[index]}
                title={pillar.title}
                description={pillar.description}
                tone={index % 2 === 0 ? 'navy' : 'ember'}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Questions about our safety or compliance standards?"
        subtitle="We're glad to share our safety documentation and compliance record with partners and regulators."
      />
    </>
  )
}
