import { Package, Wallet, Clock, CheckCircle2, Navigation, Phone, MapPin } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import { deliveryStats, availableDeliveries, currentDelivery } from '../../data/mockData.js'

export default function DeliveryDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Today's Deliveries" value={deliveryStats.todaysDeliveries} icon={Package} tone="saffron" />
        <StatCard label="Today's Earnings" value={`₹${deliveryStats.todaysEarnings}`} icon={Wallet} tone="leaf" trend="+₹180 vs yesterday" />
        <StatCard label="Pending Deliveries" value={deliveryStats.pendingDeliveries} icon={Clock} tone="navy" />
        <StatCard label="Completed" value={deliveryStats.completedDeliveries} icon={CheckCircle2} tone="leaf" />
      </div>

      {/* Current delivery */}
      <section className="card p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-navy-900">Current Delivery — {currentDelivery.orderId}</h3>
          <span className="badge bg-saffron-100 text-saffron-700">In Progress</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                <MapPin size={15} />
              </div>
              <div>
                <p className="text-xs text-ink-500">Pickup</p>
                <p className="text-sm font-semibold text-ink-900">{currentDelivery.pickup}</p>
              </div>
            </div>
            <div className="ml-4 h-6 border-l-2 border-dashed border-ink-100" />
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
                <MapPin size={15} />
              </div>
              <div>
                <p className="text-xs text-ink-500">Drop</p>
                <p className="text-sm font-semibold text-ink-900">{currentDelivery.drop}</p>
              </div>
            </div>
            <p className="text-xs font-medium text-ink-500">Distance: {currentDelivery.distance}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button className="btn-primary !bg-saffron-500 hover:!bg-saffron-600 !py-2.5 text-sm">
                <Navigation size={15} /> Navigate
              </button>
              <button className="btn-outline !py-2.5 text-sm">
                <Phone size={15} /> Call Customer
              </button>
              <button className="rounded-full border border-ink-100 px-4 py-2.5 text-sm font-semibold text-ink-700 hover:bg-ink-100">
                Mark Picked Up
              </button>
              <button className="rounded-full bg-leaf-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leaf-700">
                Mark Delivered
              </button>
            </div>
          </div>

          <div className="flex h-52 items-center justify-center rounded-xl bg-navy-50/50 text-sm text-ink-500 lg:h-full">
            Map placeholder — live route to drop location
          </div>
        </div>
      </section>

      {/* Available orders */}
      <section>
        <h3 className="mb-4 text-base font-semibold text-navy-900">Available Orders</h3>
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Shop</th>
                <th className="px-5 py-3 font-medium">Distance</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {availableDeliveries.map((o) => (
                <tr key={o.id} className="border-b border-ink-100 last:border-0">
                  <td className="px-5 py-3.5 font-medium text-navy-900">{o.id}</td>
                  <td className="px-5 py-3.5 text-ink-700">{o.shop}</td>
                  <td className="px-5 py-3.5 text-ink-700">{o.distance}</td>
                  <td className="px-5 py-3.5 text-ink-700">₹{o.amount}</td>
                  <td className="px-5 py-3.5">
                    <button className="rounded-full bg-leaf-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-leaf-700">
                      Accept
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
