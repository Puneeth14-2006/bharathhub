import { Camera } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProfileForm({ title, subtitle, fields, accentClass = 'bg-navy-800' }) {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">{title}</h2>
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className={`relative flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white ${accentClass}`}>
            {(user?.name || 'U').charAt(0).toUpperCase()}
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-ink-700 text-white">
              <Camera size={11} />
            </span>
          </div>
          <div>
            <p className="text-base font-semibold text-navy-900">{user?.name}</p>
            <p className="text-xs capitalize text-ink-500">{user?.role} account</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.label} className={f.full ? 'sm:col-span-2' : ''}>
              <label className="mb-1.5 block text-xs font-semibold text-ink-700">{f.label}</label>
              <input type="text" defaultValue={f.value} className="input-field" />
            </div>
          ))}
        </div>

        <button className="btn-primary mt-6">Save Changes</button>
      </div>
    </div>
  )
}
