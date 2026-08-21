import { useEffect, useState } from 'react'

const loadingLogs = [
  'INITIALIZING LOGISTICS CONTROL PANEL...',
  'SYNCING VESSEL BARGE GPS TRACKING...',
  'CONNECTING SOLID MINERALS DATABASE...',
  'ESTABLISHING SECURE GATEWAY PIPELINE...',
  'RABANI GEOLOGISTICS OPERATIONS ONLINE'
]

export function Preloader() {
  const [active, setActive] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const [currentLogIdx, setCurrentLogIdx] = useState(0)
  const [typedText, setTypedText] = useState('')

  // Handle fading and cleanup
  useEffect(() => {
    // Start fading out after 2.8s
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2800)

    // Remove from DOM after transition finishes (3.5s total)
    const removeTimer = setTimeout(() => {
      setActive(false)
    }, 3500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  // Cycle and type through corporate terminal messages
  useEffect(() => {
    if (currentLogIdx >= loadingLogs.length) return

    const fullText = loadingLogs[currentLogIdx]
    let charIdx = 0
    let typingInterval: any

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setTypedText(fullText.substring(0, charIdx + 1))
        charIdx++
        if (charIdx >= fullText.length) {
          clearInterval(typingInterval)
          // Hold the message briefly before moving to next log
          setTimeout(() => {
            setCurrentLogIdx((prev) => prev + 1)
          }, 400)
        }
      }, 25)
    }

    startTyping()
    return () => clearInterval(typingInterval)
  }, [currentLogIdx])

  if (!active) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950 text-white select-none transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blueprint Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Technical Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse-grid"
        />
        {/* Tech lines */}
        <div className="absolute top-10 left-10 text-[9px] font-mono text-white/20 space-y-1">
          <p>SYS.INIT // RC:1639228</p>
          <p>LOC // LAT: 6.5916° N &middot; LON: 3.3675° E</p>
          <p>STATUS // ESTABLISHED_2019</p>
        </div>
        <div className="absolute bottom-10 right-10 text-[9px] font-mono text-white/20 text-right space-y-1">
          <p>SYS // CONGLOMERATE_CORE_v2.0</p>
          <p>FRAME // REACT_VITE_TAILWIND</p>
          <p>VAL // MARINE.SOLID_MINERALS</p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* SVG Drawing Logo */}
        <div className="relative h-32 w-32 flex items-center justify-center">
          <svg width="128" height="128" viewBox="0 0 100 100" fill="none" className="relative drop-shadow-[0_0_15px_rgba(5,123,255,0.15)]">
            {/* Outer crescent arch representing marine/circulation */}
            <path
              d="M 60,10 A 42,42 0 1,0 60,90"
              fill="none"
              stroke="#057bff"
              strokeWidth="3.2"
              strokeLinecap="round"
              className="animate-draw-arc-1"
            />
            {/* Inner crescent arch */}
            <path
              d="M 60,20 A 32,32 0 1,0 60,80"
              fill="none"
              stroke="#0062cc"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="animate-draw-arc-2"
            />
            {/* RGL Text in the center/right */}
            <text
              x="63"
              y="57"
              textAnchor="middle"
              fill="url(#logo-gradient)"
              fontFamily="var(--font-heading)"
              fontWeight="800"
              fontSize="19"
              letterSpacing="0.8"
              className="animate-logo-text"
            >
              RGL
            </text>
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#4796ff" />
                <stop offset="100%" stopColor="#057bff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Console Terminal Status Logs */}
        <div className="flex flex-col items-center gap-2.5 font-mono text-[10px] tracking-[0.15em] text-sky-400/90 h-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-none bg-sky-400 animate-pulse" />
            <p>{typedText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
