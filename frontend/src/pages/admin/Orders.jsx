import StatusBadge from '../../components/StatusBadge.jsx'
import { shopOrders } from '../../data/mockData.js'

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Orders</h2>
        <p className="mt-1 text-sm text-ink-500">Platform-wide order monitoring</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Items</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {shopOrders.map((o) => (
              <tr key={o.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 font-medium text-navy-900">{o.id}</td>
                <td className="px-5 py-3.5 text-ink-700">{o.customer}</td>
                <td className="px-5 py-3.5 text-ink-700">{o.items}</td>
                <td className="px-5 py-3.5 text-ink-700">₹{o.amount}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
