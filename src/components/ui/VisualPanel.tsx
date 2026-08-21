import type { LucideIcon } from 'lucide-react'
import { cx } from '../../lib/utils'

const tones = {
  navy: { bg: 'bg-navy-950', accent: 'bg-sky-500', icon: 'text-sky-500/20', border: 'border-white/10' },
  sky: { bg: 'bg-navy-900', accent: 'bg-sky-500', icon: 'text-sky-500/25', border: 'border-white/10' },
  ember: { bg: 'bg-navy-950', accent: 'bg-ember-600', icon: 'text-ember-600/20', border: 'border-white/10' },
}

export function VisualPanel({
  icon: Icon,
  imageSrc,
  label,
  tone = 'navy',
  className,
}: {
  icon?: LucideIcon
  imageSrc?: string
  label: string
  tone?: 'navy' | 'sky' | 'ember'
  className?: string
}) {
  const t = tones[tone]

  return (
    <div className={cx('relative flex aspect-4/3 w-full flex-col overflow-hidden rounded-none border border-navy-950/20', t.bg, className)}>
      {imageSrc && (
        <>
          <img 
            src={imageSrc} 
            alt={label} 
            className="absolute inset-0 h-full w-full object-cover" 
          />
          {/* Overlay to blend the image with corporate branding and ensure text contrast */}
          <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/45" />
        </>
      )}
      
      <div className={cx('h-1.5 w-full relative z-10', t.accent)} aria-hidden="true" />
      
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 flex pointer-events-none z-10" aria-hidden="true">
        <div className={cx('w-1/3 border-r h-full', t.border)} />
        <div className={cx('w-1/3 border-r h-full', t.border)} />
      </div>
      <div className="absolute inset-0 flex flex-col pointer-events-none z-10" aria-hidden="true">
        <div className={cx('h-1/3 border-b w-full', t.border)} />
        <div className={cx('h-1/3 border-b w-full', t.border)} />
      </div>

      <div className="relative flex flex-1 items-center justify-center z-10">
        {Icon && !imageSrc && (
          <Icon className={cx('size-24', t.icon)} aria-hidden="true" strokeWidth={1} />
        )}
      </div>
      <div className="relative flex items-center gap-2 border-t border-white/10 px-5 py-3.5 bg-navy-950/90 backdrop-blur-xs z-10">
        <span className={cx('size-2 shrink-0 rounded-none', t.accent)} aria-hidden="true" />
        <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">{label}</p>
      </div>
    </div>
  )
}
