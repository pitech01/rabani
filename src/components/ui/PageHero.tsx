import type { ReactNode } from 'react'
import { cx } from '../../lib/utils'
import { Container } from '../layout/Container'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = 'navy',
  children,
}: {
  eyebrow: string
  title: string
  subtitle: string
  tone?: 'navy' | 'ember'
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white border-b border-navy-900">
      <div className={cx('h-1.5 w-full', tone === 'ember' ? 'bg-ember-600' : 'bg-sky-500')} aria-hidden="true" />
      
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
      <Container className="relative py-16 sm:py-20">
        <p
          className={cx(
            'font-heading text-sm font-bold uppercase tracking-[0.2em]',
            tone === 'ember' ? 'text-ember-400' : 'text-sky-400',
          )}
        >
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{subtitle}</p>
        {children}
      </Container>
    </section>
  )
}
