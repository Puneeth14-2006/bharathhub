import { TrendingUp, Wallet, ShoppingBag } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import SimpleLineChart from '../../components/SimpleLineChart.jsx'
import { salesTrend, shopStats } from '../../data/mockData.js'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function ShopSales() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Sales</h2>
        <p className="mt-1 text-sm text-ink-500">Revenue performance for your shop</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="This Week" value={`₹${shopStats.totalSales.toLocaleString('en-IN')}`} icon={Wallet} tone="leaf" trend="+12% vs last week" />
        <StatCard label="Avg. Order Value" value="₹468" icon={ShoppingBag} tone="navy" />
        <StatCard label="Growth" value="+18%" icon={TrendingUp} tone="saffron" trend="Month over month" />
      </div>

      <div className="card p-5">
        <h3 className="mb-1 text-sm font-semibold text-navy-900">Weekly Sales Trend</h3>
        <p className="mb-4 text-xs text-ink-500">Orders value (₹ hundreds) per day</p>
        <div className="h-56">
          <SimpleLineChart data={salesTrend} color="#188550" height={180} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-ink-300">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
