import StatusBadge from '../../components/StatusBadge.jsx'
import { adminShops } from '../../data/mockData.js'

export default function AdminShops() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Shop Owners</h2>
        <p className="mt-1 text-sm text-ink-500">Shops onboarded to the BharathHub platform</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Shop ID</th>
              <th className="px-5 py-3 font-medium">Shop Name</th>
              <th className="px-5 py-3 font-medium">Owner</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Orders</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {adminShops.map((s) => (
              <tr key={s.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 text-ink-500">{s.id}</td>
                <td className="px-5 py-3.5 font-medium text-navy-900">{s.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{s.owner}</td>
                <td className="px-5 py-3.5 text-ink-700">{s.category}</td>
                <td className="px-5 py-3.5 text-ink-700">{s.orders.toLocaleString('en-IN')}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={s.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
