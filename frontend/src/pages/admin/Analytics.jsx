import SimpleLineChart from '../../components/SimpleLineChart.jsx'
import SimpleDonutChart from '../../components/SimpleDonutChart.jsx'
import { salesTrend, topCategories } from '../../data/mockData.js'

const cityData = [
  { city: 'Shivamogga', orders: 42800 },
  { city: 'Davangere', orders: 31200 },
  { city: 'Hubballi', orders: 27600 },
  { city: 'Mysuru', orders: 19400 },
]
const maxOrders = Math.max(...cityData.map((c) => c.orders))

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Analytics</h2>
        <p className="mt-1 text-sm text-ink-500">Deeper insight into platform performance</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Order Volume Trend</h3>
          <div className="h-44">
            <SimpleLineChart data={salesTrend} color="#7E56D9" />
          </div>
        </div>
        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Category Share</h3>
          <SimpleDonutChart data={topCategories} />
        </div>
      </div>

      <div className="card p-5">
        <h3 className="mb-4 text-sm font-semibold text-navy-900">Orders by City</h3>
        <div className="space-y-3">
          {cityData.map((c) => (
            <div key={c.city}>
              <div className="mb-1 flex justify-between text-xs text-ink-500">
                <span>{c.city}</span>
                <span className="font-semibold text-ink-900">{c.orders.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                <div className="h-full rounded-full bg-violet-600" style={{ width: `${(c.orders / maxOrders) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
