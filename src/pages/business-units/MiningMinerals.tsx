import { ArrowRight, MapPin, TrendingUp } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Badge } from '../../components/ui/Badge'
import { CTASection } from '../../components/CTASection'
import { site } from '../../data/site'
import { miningValueChain } from '../../data/content'

export function MiningMinerals() {
  return (
    <>
      <PageHero
        eyebrow="Business Unit"
        title="Solid Minerals & Mining"
        subtitle="Mining operations in Ilesa, Osun State, with an expanding portfolio of sites, backed by mineral trading and export logistics."
        tone="ember"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge tone="ember">Active Site</Badge>
              <SectionHeading
                eyebrow="Diversification Strategy"
                title={`Operations at ${site.miningLocation}`}
                subtitle="Rabani Geologistics diversified from logistics into solid minerals to build a fully integrated value chain, from the ground to the export terminal. The group's active mining site is in Ilesa, Osun State, with additional sites currently being acquired across Nigeria."
              />
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy-700">
                <MapPin className="size-4 text-ember-600" aria-hidden="true" />
                {site.miningLocation}
              </div>
            </div>
            <div className="border border-navy-200 p-2 bg-navy-50 rounded-none">
              <img 
                src="/images/nigerian_mining_site.jpg" 
                alt="Ilesa Mining Site Operations" 
                className="w-full aspect-[4/3] object-cover rounded-none border border-navy-200"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Value Chain"
            title="From exploration to export"
            subtitle="The mining division is built as a full value chain, integrated with the group's own logistics capability."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {miningValueChain.map((step, index) => (
              <div key={step.title} className="relative rounded-none border border-navy-200 bg-white p-6">
                <span className="font-heading text-3xl font-bold text-ember-200">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
                {index < miningValueChain.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden size-6 -translate-y-1/2 text-navy-200 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="rounded-none border border-ember-200 bg-ember-50 p-8 sm:p-10">
            <TrendingUp className="size-9 text-ember-600" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-navy-950">Ongoing Site Expansion</h2>
            <p className="mt-3 max-w-2xl text-navy-700">
              Beyond Ilesa, Rabani Geologistics is actively pursuing the acquisition of additional mining sites across
              Nigeria, extending the group's solid minerals footprint and long-term export capacity.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for a solid minerals partner?"
        subtitle="Speak with us about mineral trading, export logistics, or site partnership opportunities."
      />
    </>
  )
}
