import { Star } from 'lucide-react'
import StatusBadge from '../../components/StatusBadge.jsx'
import { adminDeliveryPartners } from '../../data/mockData.js'

export default function AdminDeliveryPartners() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Delivery Partners</h2>
        <p className="mt-1 text-sm text-ink-500">Riders delivering orders across the platform</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Partner ID</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Deliveries</th>
              <th className="px-5 py-3 font-medium">Rating</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {adminDeliveryPartners.map((d) => (
              <tr key={d.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 text-ink-500">{d.id}</td>
                <td className="px-5 py-3.5 font-medium text-navy-900">{d.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{d.location}</td>
                <td className="px-5 py-3.5 text-ink-700">{d.deliveries.toLocaleString('en-IN')}</td>
                <td className="px-5 py-3.5">
                  <span className="flex items-center gap-1 font-medium text-saffron-600">
                    <Star size={13} fill="currentColor" strokeWidth={0} /> {d.rating}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={d.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
