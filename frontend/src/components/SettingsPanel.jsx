import { useState } from 'react'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-navy-800' : 'bg-ink-100'}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

export default function SettingsPanel({ title, subtitle, options }) {
  const [state, setState] = useState(Object.fromEntries(options.map((o) => [o.key, o.defaultOn])))

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">{title}</h2>
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
      </div>
      <div className="card divide-y divide-ink-100">
        {options.map((o) => (
          <div key={o.key} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-ink-900">{o.label}</p>
              <p className="text-xs text-ink-500">{o.description}</p>
            </div>
            <Toggle checked={state[o.key]} onChange={() => setState((s) => ({ ...s, [o.key]: !s[o.key] }))} />
          </div>
        ))}
      </div>
    </div>
  )
}
