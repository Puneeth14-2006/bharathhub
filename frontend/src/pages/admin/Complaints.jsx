import StatusBadge from '../../components/StatusBadge.jsx'
import { complaints } from '../../data/mockData.js'

export default function AdminComplaints() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Complaints</h2>
        <p className="mt-1 text-sm text-ink-500">Issues raised by customers and partners</p>
      </div>

      <div className="card divide-y divide-ink-100">
        {complaints.map((c) => (
          <div key={c.id} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-navy-900">{c.subject}</p>
              <p className="text-xs text-ink-500">
                {c.id} · From {c.from}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={c.status} />
              <button className="text-xs font-semibold text-violet-700 hover:text-violet-800">Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
