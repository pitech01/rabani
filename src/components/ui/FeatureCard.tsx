import type { LucideIcon } from 'lucide-react'
import { cx } from '../../lib/utils'

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone = 'navy',
}: {
  icon: LucideIcon
  title: string
  description: string
  tone?: 'navy' | 'ember'
}) {
  const iconTones = {
    navy: 'bg-navy-50 text-navy-800 border border-navy-200',
    ember: 'bg-ember-50 text-ember-700 border border-ember-200',
  }

  return (
    <div className="rounded-none border border-navy-200 bg-white p-6 transition-all duration-150 hover:-translate-y-1 hover:border-navy-950">
      <div className={cx('flex size-11 items-center justify-center rounded-none', iconTones[tone])}>
        <Icon className="size-5.5" aria-hidden="true" strokeWidth={1.5} />
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold text-navy-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
    </div>
  )
}
