import StatusBadge from '../../components/StatusBadge.jsx'
import { shopOrders } from '../../data/mockData.js'

export default function ShopOrders() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Orders</h2>
          <p className="mt-1 text-sm text-ink-500">Manage incoming and past orders</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Preparing', 'Accepted', 'Delivered'].map((f, i) => (
            <button
              key={f}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                i === 0 ? 'bg-leaf-600 text-white' : 'border border-ink-100 text-ink-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Items</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Action</th>
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
                <td className="px-5 py-3.5">
                  <div className="flex gap-2">
                    <button className="rounded-lg bg-leaf-50 px-2.5 py-1 text-xs font-semibold text-leaf-700">Accept</button>
                    <button className="rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
