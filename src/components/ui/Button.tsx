import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cx } from '../../lib/utils'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost-light'

const variants: Record<Variant, string> = {
  primary: 'bg-navy-950 text-white border border-navy-950 hover:bg-transparent hover:text-navy-950',
  accent: 'bg-ember-600 text-white border border-ember-600 hover:bg-transparent hover:text-ember-600',
  outline: 'bg-transparent text-navy-950 border border-navy-950 hover:bg-navy-950 hover:text-white',
  'ghost-light': 'bg-transparent text-white border border-white hover:bg-white hover:text-navy-950',
}

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
}: {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}) {
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-150',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
