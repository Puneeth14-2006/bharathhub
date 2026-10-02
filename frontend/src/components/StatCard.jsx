const TONES = {
  navy: 'bg-navy-50 text-navy-700',
  saffron: 'bg-saffron-50 text-saffron-700',
  leaf: 'bg-leaf-50 text-leaf-700',
  ink: 'bg-ink-100 text-ink-700',
}

export default function StatCard({ label, value, icon: Icon, tone = 'navy', trend }) {
  return (
    <div className="card flex items-start justify-between p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-300">{label}</p>
        <p className="mt-2 font-display text-2xl font-bold text-navy-900">{value}</p>
        {trend && <p className="mt-1 text-xs font-medium text-leaf-600">{trend}</p>}
      </div>
      {Icon && (
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${TONES[tone]}`}>
          <Icon size={20} strokeWidth={2} />
        </div>
      )}
    </div>
  )
}
