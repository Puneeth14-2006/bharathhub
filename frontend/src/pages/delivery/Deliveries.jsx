import { MapPin, Navigation } from 'lucide-react'
import { currentDelivery } from '../../data/mockData.js'

export default function DeliveryDeliveries() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">My Deliveries</h2>
        <p className="mt-1 text-sm text-ink-500">Orders currently assigned to you</p>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-navy-900">{currentDelivery.orderId}</p>
          <span className="badge bg-saffron-100 text-saffron-700">Picked Up</span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-ink-700">
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-leaf-600" /> {currentDelivery.pickup}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-saffron-600" /> {currentDelivery.drop}
          </p>
        </div>
        <button className="btn-primary !bg-saffron-500 hover:!bg-saffron-600 mt-4 !py-2.5 text-sm">
          <Navigation size={15} /> Navigate to Drop
        </button>
      </div>

      <div className="card p-8 text-center text-sm text-ink-500">No other deliveries assigned right now.</div>
    </div>
  )
}
