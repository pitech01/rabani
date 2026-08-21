import { Gem, HeartHandshake, Ship, Target, Telescope } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { LeadershipCard } from '../components/ui/LeadershipCard'
import { CTASection } from '../components/CTASection'
import { site, divisions } from '../data/site'
import { companyOverview, milestones, missionVision } from '../data/content'
import { inMemoriam, leadership } from '../data/leadership'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An indigenous Nigerian conglomerate, built for the long term"
        subtitle="From a logistics operation founded in 2019 to a diversified group spanning marine transport, haulage, and solid minerals. This is the Rabani Geologistics story."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Company Overview" title="Who we are" />
              <p className="mt-6 text-lg leading-relaxed text-navy-700">{companyOverview}</p>
            </div>
            <dl className="grid grid-cols-1 gap-4 self-start rounded-none border border-navy-200 bg-navy-50 p-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">Legal Name</dt>
                <dd className="mt-1 font-heading font-bold text-navy-950">{site.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">RC Number</dt>
                <dd className="mt-1 font-heading font-bold text-navy-950">{site.rcNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">Incorporated</dt>
                <dd className="mt-1 font-heading font-bold text-navy-950">{site.incorporationDate}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">Registered Office</dt>
                <dd className="mt-1 font-heading font-bold text-navy-950">{site.address}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Conglomerate Structure"
            title="Two pillars, one corporate umbrella"
            subtitle="Rabani Geologistics Limited operates as a single legal entity governing two distinct, synergistic business units."
          />
          <div className="mt-12 rounded-none border border-navy-200 bg-white p-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-lg bg-navy-900 px-6 py-3 font-heading font-bold text-white">
                {site.name}
              </div>
              <div className="h-8 w-px bg-navy-200" aria-hidden="true" />
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-none border border-sky-200 bg-sky-50 p-6">
                  <Ship className="mx-auto size-8 text-sky-700" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy-950">{divisions.logistics.name}</h3>
                  <p className="mt-2 text-sm text-navy-600">Barge Operations &middot; Container Haulage &middot; Clearing &amp; Forwarding &middot; Supply Chain</p>
                </div>
                <div className="rounded-none border border-ember-200 bg-ember-50 p-6">
                  <Gem className="mx-auto size-8 text-ember-700" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy-950">{divisions.mining.name}</h3>
                  <p className="mt-2 text-sm text-navy-600">Mining Operations &middot; Mineral Trading &amp; Export &middot; Site Expansion</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Vision, Mission &amp; Strategy" title="What drives the group" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-none border border-navy-200 p-6">
              <Telescope className="size-8 text-sky-700" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-950">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{missionVision.vision}</p>
            </div>
            <div className="rounded-none border border-navy-200 p-6">
              <Target className="size-8 text-ember-600" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-950">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{missionVision.mission}</p>
            </div>
            <div className="rounded-none border border-navy-200 bg-navy-950 p-6 text-white">
              <h3 className="font-heading text-lg font-bold">Corporate Strategy</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-navy-200">
                {missionVision.strategy.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Milestones" title="Our journey" />
          <ol className="mt-12 space-y-8 border-l border-navy-200 pl-8">
            {milestones.map((milestone) => (
              <li key={milestone.title} className="relative">
                <span className="absolute -left-[38px] top-1 size-3 rounded-full bg-ember-600 ring-4 ring-navy-50" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{milestone.year}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy-950">{milestone.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-navy-600">{milestone.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="leadership" className="py-16 sm:py-24 scroll-mt-20">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Management profile"
            subtitle="The team steering Rabani Geologistics across logistics, marine operations, and mining."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {leadership.map((profile) => (
              <LeadershipCard key={profile.name} profile={profile} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-none border border-navy-200 bg-navy-50 p-10 text-center">
            <HeartHandshake className="size-9 text-ember-600" aria-hidden="true" />
            <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-ember-600">
              In Memoriam
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-navy-950">{inMemoriam.name}</h3>
            <p className="mt-4 leading-relaxed text-navy-600">{inMemoriam.note}</p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
