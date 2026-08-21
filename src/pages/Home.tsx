import { ArrowRight, Gem, Quote, Ship } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { VisualPanel } from '../components/ui/VisualPanel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTASection } from '../components/CTASection'
import { site, divisions } from '../data/site'
import { homeStats } from '../data/content'
import { leadership } from '../data/leadership'

export function Home() {
  const md = leadership[0]

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white border-b border-navy-900">
        <div className="h-1.5 w-full bg-ember-600" aria-hidden="true" />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 flex pointer-events-none" aria-hidden="true">
          <div className="w-1/4 border-r border-white/5 h-full" />
          <div className="w-1/4 border-r border-white/5 h-full" />
          <div className="w-1/4 border-r border-white/5 h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col pointer-events-none" aria-hidden="true">
          <div className="h-1/3 border-b border-white/5 w-full" />
          <div className="h-1/3 border-b border-white/5 w-full" />
        </div>
        <Container className="relative py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge tone="sky">RC {site.rcNumber} &middot; Incorporated {site.incorporationDate}</Badge>
              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
                {site.tagline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy-200 sm:text-xl">
                Rabani Geologistics Limited is an indigenous Nigerian conglomerate delivering integrated logistics and
                marine operations alongside solid minerals mining and export: one corporate group, two synergistic
                business verticals.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/business-units" variant="accent">
                  Explore Our Business Units
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button to="/contact" variant="ghost-light">
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="border border-white/20 p-2 rounded-none bg-white/5">
                <img 
                  src="/images/lagos_port_logistics.jpg" 
                  alt="Rabani Geologistics Lagos Port Logistics Operations" 
                  className="w-full aspect-[4/3] object-cover rounded-none border border-white/10"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy-800 bg-navy-950">
        <Container>
          <dl className="grid grid-cols-1 divide-y divide-navy-800 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {homeStats.map((stat) => (
              <div key={stat.label} className="px-1 py-8 sm:px-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-sky-400">{stat.label}</dt>
                <dd className="mt-2 font-heading text-3xl font-extrabold text-white">{stat.value}</dd>
                <dd className="mt-1 text-sm text-navy-400">{stat.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Business Units"
            title="Two verticals. One conglomerate."
            subtitle="Rabani Geologistics operates as an integrated group: each division is a distinct, capable business, unified under one corporate shell and one standard of delivery."
          />

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-navy-200 bg-navy-100 lg:grid-cols-2">
            <div className="flex flex-col bg-white">
              <VisualPanel 
                icon={Ship} 
                imageSrc="/images/barge_operations.jpg" 
                label="Barge &amp; Haulage Operations" 
                tone="navy" 
                className="aspect-video" 
              />
              <div className="flex flex-1 flex-col p-8">
                <Badge tone="sky">Logistics &amp; Marine</Badge>
                <h3 className="mt-4 font-heading text-2xl font-bold text-navy-950">{divisions.logistics.name}</h3>
                <p className="mt-3 flex-1 text-navy-600">{divisions.logistics.description}</p>
                <Button to={divisions.logistics.href} variant="outline" className="mt-6 self-start">
                  View Division
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col bg-white">
              <VisualPanel 
                icon={Gem} 
                imageSrc="/images/mining_operations.jpg" 
                label="Mining &amp; Mineral Export" 
                tone="ember" 
                className="aspect-video" 
              />
              <div className="flex flex-1 flex-col p-8">
                <Badge tone="ember">Minerals &amp; Mining</Badge>
                <h3 className="mt-4 font-heading text-2xl font-bold text-navy-950">{divisions.mining.name}</h3>
                <p className="mt-3 flex-1 text-navy-600">{divisions.mining.description}</p>
                <Button to={divisions.mining.href} variant="outline" className="mt-6 self-start">
                  View Division
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-200 bg-navy-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto size-9 text-ember-600" aria-hidden="true" />
            <p className="mt-6 font-heading text-2xl font-semibold leading-snug text-navy-950 sm:text-3xl">
              &ldquo;We built Rabani Geologistics on the belief that logistics and minerals are not two separate
              businesses; they are one value chain, from extraction to export.&rdquo;
            </p>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-ember-600" aria-hidden="true" />
            <p className="mt-6 font-heading text-base font-bold text-navy-900">{md.name}</p>
            <p className="text-sm text-navy-500">{md.role}, Rabani Geologistics Limited</p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
