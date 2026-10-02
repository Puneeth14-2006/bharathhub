import { availableDeliveries } from '../../data/mockData.js'

export default function DeliveryOrders() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Available Orders</h2>
        <p className="mt-1 text-sm text-ink-500">Orders ready for pickup near you</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {availableDeliveries.map((o) => (
          <div key={o.id} className="card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-navy-900">{o.id}</p>
              <span className="badge bg-navy-100 text-navy-700">{o.distance}</span>
            </div>
            <p className="mt-2 text-sm text-ink-700">{o.shop}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-base font-bold text-navy-900">₹{o.amount}</p>
              <button className="rounded-full bg-leaf-600 px-4 py-2 text-xs font-semibold text-white hover:bg-leaf-700">
                Accept Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
