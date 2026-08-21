import { BarChart3, Database, Satellite, Wrench } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FeatureCard } from '../components/ui/FeatureCard'
import { CTASection } from '../components/CTASection'
import { technologyAreas } from '../data/content'

const icons = [Satellite, Database, Wrench, BarChart3]

export function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Innovation"
        title="Technology across every division"
        subtitle="From GPS-enabled fleet tracking to digital maintenance systems, technology underpins how Rabani Geologistics runs logistics and mining operations reliably at scale."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Systems" title="Where technology is applied" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyAreas.map((area, index) => (
              <FeatureCard
                key={area.title}
                icon={icons[index]}
                title={area.title}
                description={area.description}
                tone={index % 2 === 0 ? 'navy' : 'ember'}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Curious how our technology supports your cargo or supply chain?"
        subtitle="Ask us about fleet tracking, reporting, and system integration for your account."
      />
    </>
  )
}
