import { Link } from 'react-router-dom'
import { cx } from '../lib/utils'

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const isLight = variant === 'light'

  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <img 
        src="/logo.png" 
        alt="Rabani Geologistics Logo" 
        className="h-9 w-auto object-contain"
      />
      <span className={cx('font-heading leading-tight', isLight ? 'text-white' : 'text-navy-950')}>
        <span className="block text-[15px] font-extrabold tracking-tight sm:text-[17px]">Rabani Geologistics</span>
        <span className={cx('block text-[10px] font-semibold tracking-[0.2em] uppercase', isLight ? 'text-sky-400' : 'text-sky-700')}>
          Limited
        </span>
      </span>
    </Link>
  )
}
