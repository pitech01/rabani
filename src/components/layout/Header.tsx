import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '../Logo'
import { navItems } from '../../data/nav'
import { site } from '../../data/site'
import { cx } from '../../lib/utils'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const [lastPathname, setLastPathname] = useState(location.pathname)

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-navy-950 text-navy-300 lg:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            RC {site.rcNumber} &middot; {site.country}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a href={`tel:${site.phonePrimary.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="size-3.5" aria-hidden="true" />
                {site.phonePrimary}
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${site.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-white">
                {site.phoneSecondary}
              </a>
            </div>
            <a href={`mailto:${site.emailPrimary}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" aria-hidden="true" />
              {site.emailPrimary}
            </a>
          </div>
        </Container>
      </div>

      <div
        className={cx(
          'w-full border-b bg-white transition-colors',
          scrolled ? 'border-navy-300' : 'border-navy-100',
        )}
      >
        <Container className="flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-20 w-72 translate-y-1 rounded-none border border-navy-300 bg-white p-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          cx(
                            'block rounded-none px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-950',
                            isActive && 'bg-navy-50 text-navy-950',
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    cx(
                      'relative rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-950',
                      isActive && 'text-navy-950',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-3 h-0.5 bg-ember-600" aria-hidden="true" />
                      )}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-none border border-navy-950 bg-navy-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-150 hover:bg-transparent hover:text-navy-950"
            >
              Partner With Us
            </NavLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-none p-2 text-navy-900 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>

        {mobileOpen && (
          <div className="border-t border-navy-200 bg-white lg:hidden">
            <Container className="flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <div key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      cx(
                        'block rounded-md px-3 py-2.5 text-base font-medium text-navy-800',
                        isActive && 'bg-navy-50 text-navy-950',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-navy-200 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            cx(
                              'block rounded-md px-3 py-2 text-sm text-navy-600',
                              isActive && 'text-navy-950 font-medium',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <NavLink
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-none border border-navy-950 bg-navy-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-150 hover:bg-transparent hover:text-navy-950"
              >
                Partner With Us
              </NavLink>
            </Container>
          </div>
        )}
      </div>
    </header>
  )
}
