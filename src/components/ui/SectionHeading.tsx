import { cx } from '../../lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <div className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <div className={cx('flex items-center gap-2', align === 'center' && 'justify-center')}>
          <span className={cx('size-2 shrink-0 rounded-none', light ? 'bg-sky-400' : 'bg-ember-600')} aria-hidden="true" />
          <p
            className={cx(
              'font-heading text-xs font-bold uppercase tracking-[0.2em]',
              light ? 'text-sky-300' : 'text-ember-600',
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={cx(
          'mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-navy-950',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cx('mt-4 text-lg leading-relaxed', light ? 'text-navy-200' : 'text-navy-600')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
