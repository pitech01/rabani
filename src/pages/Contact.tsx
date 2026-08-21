import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { site } from '../data/site'

export function Contact() {
  const mapQuery = encodeURIComponent(site.address)

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start a conversation"
        subtitle="Whether you're a logistics client, a mining partner, an investor, or a prospective employee, our team is ready to hear from you."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Reach Us" title="Contact details" />
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-navy-950">Registered Office</p>
                    <p className="mt-1 text-navy-600">{site.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-navy-950">Phone</p>
                    <div className="mt-1 space-y-1">
                      <a href={`tel:${site.phonePrimary.replace(/\s/g, '')}`} className="block text-navy-600 hover:text-navy-900">
                        {site.phonePrimary}
                      </a>
                      <a href={`tel:${site.phoneSecondary.replace(/\s/g, '')}`} className="block text-navy-600 hover:text-navy-900">
                        {site.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-navy-950">Email</p>
                    <a href={`mailto:${site.emailPrimary}`} className="mt-1 block text-navy-600 hover:text-navy-900">
                      {site.emailPrimary}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-8 overflow-hidden rounded-none border border-navy-200">
                <iframe
                  title="Rabani Geologistics office location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-none border border-navy-200 bg-white p-6 sm:p-10 lg:col-span-3">
              <SectionHeading eyebrow="Send an Inquiry" title="Tell us how we can help" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
