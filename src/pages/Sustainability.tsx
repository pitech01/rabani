import { Leaf, Landmark, Users, Handshake } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FeatureCard } from '../components/ui/FeatureCard'
import { CTASection } from '../components/CTASection'
import { sustainabilityPillars } from '../data/content'

const icons = [Users, Landmark, Handshake, Leaf]

export function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Economic Impact"
        title="Growing responsibly, alongside our communities"
        subtitle="From employment creation to environmental stewardship in mining, Rabani Geologistics builds impact into every site and route it operates."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Impact" title="Where we create value" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityPillars.map((pillar, index) => (
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
        title="Interested in our community and environmental practices?"
        subtitle="Reach out for details on our local content and host community engagement programmes."
      />
    </>
  )
}
