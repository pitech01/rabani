import { useEffect, useState } from 'react'

export function Preloader() {
  const [active, setActive] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fading out after 1.2s (faster loading feedback)
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 1200)

    // Remove from DOM after transition finishes (1.8s total)
    const removeTimer = setTimeout(() => {
      setActive(false)
    }, 1800)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!active) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none transition-all duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Clean centered brand icon/logo */}
        <div className="relative animate-fade-in-scale">
          <img 
            src="/logo.png" 
            alt="Rabani Geologistics Logo" 
            className="h-14 w-auto object-contain animate-pulse-gentle"
          />
        </div>

        {/* Minimal elegant slider progress bar */}
        <div className="relative w-16 h-[2px] bg-navy-100 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-sky-500 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}
