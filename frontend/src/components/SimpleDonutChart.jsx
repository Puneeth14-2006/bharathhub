export default function SimpleDonutChart({ data = [] }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <div className="flex items-center gap-5">
      <svg width="112" height="112" viewBox="0 0 112 112" className="-rotate-90">
        <circle cx="56" cy="56" r={radius} fill="none" stroke="#E7ECEF" strokeWidth="14" />
        {data.map((slice) => {
          const dash = (slice.share / 100) * circumference
          const circle = (
            <circle
              key={slice.name}
              cx="56"
              cy="56"
              r={radius}
              fill="none"
              stroke={slice.color}
              strokeWidth="14"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          )
          offset += dash
          return circle
        })}
      </svg>
      <ul className="space-y-1.5">
        {data.map((slice) => (
          <li key={slice.name} className="flex items-center gap-2 text-xs text-ink-500">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: slice.color }} />
            {slice.name}
            <span className="font-semibold text-ink-900">{slice.share}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
