import StatusBadge from '../../components/StatusBadge.jsx'
import { customerOrders } from '../../data/mockData.js'

export default function CustomerOrders() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">My Orders</h2>
        <p className="mt-1 text-sm text-ink-500">Your order history with BharathHub</p>
      </div>
      <div className="card divide-y divide-ink-100">
        {customerOrders.map((order) => (
          <div key={order.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-navy-900">{order.id}</p>
              <p className="text-xs text-ink-500">
                {order.shop} · {order.date}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <StatusBadge status={order.status} />
              <p className="w-16 text-right text-sm font-semibold text-ink-900">₹{order.amount}</p>
              <button className="btn-outline !py-1.5 !px-4 text-xs">Reorder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
