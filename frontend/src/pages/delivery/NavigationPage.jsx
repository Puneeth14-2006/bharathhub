import { Navigation as NavIcon, MapPin } from 'lucide-react'
import { currentDelivery } from '../../data/mockData.js'

export default function DeliveryNavigation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Navigation</h2>
        <p className="mt-1 text-sm text-ink-500">Route to your next drop-off</p>
      </div>

      <div className="card flex h-80 items-center justify-center bg-navy-50/50 text-sm text-ink-500">
        <div className="flex flex-col items-center gap-2">
          <NavIcon size={28} className="text-navy-300" />
          Live navigation map placeholder
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-saffron-600" />
          <div>
            <p className="text-xs text-ink-500">Heading to</p>
            <p className="text-sm font-semibold text-ink-900">{currentDelivery.drop}</p>
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-ink-500">Distance remaining: {currentDelivery.distance}</p>
        <button className="btn-primary !bg-saffron-500 hover:!bg-saffron-600 mt-4 w-full !py-2.5 text-sm">
          Open in Maps
        </button>
      </div>
    </div>
  )
}
