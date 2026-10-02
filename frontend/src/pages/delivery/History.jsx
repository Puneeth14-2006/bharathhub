import StatusBadge from '../../components/StatusBadge.jsx'
import { deliveryHistory } from '../../data/mockData.js'

export default function DeliveryHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Delivery History</h2>
        <p className="mt-1 text-sm text-ink-500">Your completed deliveries</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Shop</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Earned</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {deliveryHistory.map((d) => (
              <tr key={d.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 font-medium text-navy-900">{d.id}</td>
                <td className="px-5 py-3.5 text-ink-700">{d.shop}</td>
                <td className="px-5 py-3.5 text-ink-700">{d.date}</td>
                <td className="px-5 py-3.5 text-ink-700">₹{d.amount}</td>
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
