export default function Logo({ variant = 'dark', size = 'md', showTagline = false }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg', tagline: 'text-[10px]' },
    md: { icon: 36, text: 'text-xl', tagline: 'text-[11px]' },
    lg: { icon: 48, text: 'text-2xl', tagline: 'text-xs' },
  }
  const s = sizes[size]
  const isLight = variant === 'light'

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" className="shrink-0">
        <rect width="64" height="64" rx="16" fill={isLight ? '#FFFFFF' : '#0C2A45'} fillOpacity={isLight ? '0.12' : '1'} />
        <g transform="translate(32,32)">
          <path
            d="M0,-19 L16.45,-9.5 L16.45,9.5 L0,19 L-16.45,9.5 L-16.45,-9.5 Z"
            fill="none"
            stroke={isLight ? '#FFFFFF' : '#DCEAF5'}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="-19" r="3.4" fill="#EC7A2A" />
          <circle cx="16.45" cy="-9.5" r="3.4" fill="#1E9C5F" />
          <circle cx="16.45" cy="9.5" r="3.4" fill="#EC7A2A" />
          <circle cx="0" cy="19" r="3.4" fill="#1E9C5F" />
          <circle cx="-16.45" cy="9.5" r="3.4" fill="#EC7A2A" />
          <circle cx="-16.45" cy="-9.5" r="3.4" fill="#1E9C5F" />
          <circle cx="0" cy="0" r="7.5" fill="#EC7A2A" />
        </g>
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold ${s.text} ${isLight ? 'text-white' : 'text-navy-900'}`}>
          Bharath<span className="text-saffron-500">Hub</span>
        </span>
        {showTagline && (
          <span className={`${s.tagline} font-medium tracking-wide ${isLight ? 'text-white/70' : 'text-ink-500'} mt-0.5`}>
            One Hub. Every Local Need.
          </span>
        )}
      </div>
    </div>
  )
}
