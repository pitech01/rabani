import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '../Logo'
import { site } from '../../data/site'
import { footerLinks } from '../../data/nav'

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sky-300">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="text-sm text-navy-200 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              An indigenous Nigerian conglomerate delivering integrated logistics, marine operations, and solid
              minerals mining and export, all under one corporate umbrella.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 size-4 shrink-0 text-sky-400" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${site.phonePrimary.replace(/\s/g, '')}`} className="hover:text-white">
                    {site.phonePrimary}
                  </a>
                  <a href={`tel:${site.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-white">
                    {site.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="size-4 shrink-0 text-sky-400" aria-hidden="true" />
                <a href={`mailto:${site.emailPrimary}`} className="hover:text-white">
                  {site.emailPrimary}
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Business Units" links={footerLinks.businessUnits} />
          <FooterColumn title="More" links={footerLinks.more} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. RC {site.rcNumber}. All rights reserved.
          </p>
          <p>Incorporated {site.incorporationDate} &middot; {site.country}</p>
        </div>
      </Container>
    </footer>
  )
}
