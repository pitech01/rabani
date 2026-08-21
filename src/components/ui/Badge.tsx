import type { ReactNode } from 'react'
import { cx } from '../../lib/utils'

export function Badge({ children, tone = 'sky' }: { children: ReactNode; tone?: 'sky' | 'ember' | 'navy' }) {
  const tones = {
    sky: 'bg-sky-50 text-sky-700 border-sky-300',
    ember: 'bg-ember-50 text-ember-700 border-ember-300',
    navy: 'bg-navy-50 text-navy-800 border-navy-300',
  }

  return (
    <span
      className={cx(
        'inline-flex items-center rounded-none px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest border',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}
