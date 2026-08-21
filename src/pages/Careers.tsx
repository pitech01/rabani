import { Anchor, Gem, HardHat, Users2 } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { careerAreas } from '../data/content'

const icons = [Anchor, Anchor, Gem, HardHat, Users2]

export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career across a growing conglomerate"
        subtitle="Rabani Geologistics offers opportunities across logistics, marine operations, mining, engineering, and administration, wherever the group grows, so do our people."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Where You Can Work" title="Opportunities across the group" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {careerAreas.map((area, index) => {
              const Icon = icons[index]
              return (
                <div key={area} className="flex flex-col items-center gap-3 rounded-none border border-navy-200 p-6 text-center">
                  <Icon className="size-8 text-sky-700" aria-hidden="true" strokeWidth={1.75} />
                  <p className="font-heading text-sm font-semibold text-navy-950">{area}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Apply"
              title="Send us your interest"
              subtitle="Tell us a bit about yourself and the area you'd like to work in. Our team reviews every application."
              align="center"
            />
            <div className="mt-10 rounded-none border border-navy-200 bg-white p-6 sm:p-10">
              <ContactForm defaultCategory="Careers" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
