export default function SimpleLineChart({ data = [], color = '#0F3D63', height = 140 }) {
  const width = 100
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = width / (data.length - 1)

  const points = data.map((val, i) => {
    const x = i * step
    const y = height - ((val - min) / range) * (height - 20) - 10
    return [x, y]
  })

  const linePath = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartFill)" stroke="none" />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill={color} />
      ))}
    </svg>
  )
}
