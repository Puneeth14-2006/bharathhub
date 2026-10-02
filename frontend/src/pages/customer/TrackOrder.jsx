import { CheckCircle2, Package, Bike, Home } from 'lucide-react'
import { customerOrders } from '../../data/mockData.js'

const stages = [
  { label: 'Order Placed', icon: CheckCircle2, done: true },
  { label: 'Preparing', icon: Package, done: true },
  { label: 'Out for Delivery', icon: Bike, done: false },
  { label: 'Delivered', icon: Home, done: false },
]

export default function CustomerTrackOrder() {
  const order = customerOrders[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Track Order</h2>
        <p className="mt-1 text-sm text-ink-500">
          {order.id} · {order.shop}
        </p>
      </div>

      <div className="card p-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex flex-1 items-center gap-3 sm:flex-col sm:text-center">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  stage.done ? 'bg-navy-800 text-white' : 'bg-ink-100 text-ink-300'
                }`}
              >
                <stage.icon size={18} />
              </div>
              <div className="sm:mt-1">
                <p className={`text-sm font-semibold ${stage.done ? 'text-navy-900' : 'text-ink-300'}`}>{stage.label}</p>
              </div>
              {i < stages.length - 1 && <div className="hidden h-px flex-1 bg-ink-100 sm:block" />}
            </div>
          ))}
        </div>
      </div>

      <div className="card flex h-64 items-center justify-center bg-navy-50/50 text-sm text-ink-500">
        Live map placeholder — delivery partner location updates here.
      </div>

      <div className="card p-5">
        <p className="text-sm font-semibold text-navy-900">Delivery Partner</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron-100 text-sm font-bold text-saffron-700">
              RK
            </div>
            <div>
              <p className="text-sm font-medium text-ink-900">Ravi Kumar</p>
              <p className="text-xs text-ink-500">Arriving in 12 min</p>
            </div>
          </div>
          <button className="btn-outline !py-1.5 !px-4 text-xs">Call</button>
        </div>
      </div>
    </div>
  )
}
