import { Users, Store, Bike, ShoppingBag, IndianRupee } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import SimpleLineChart from '../../components/SimpleLineChart.jsx'
import SimpleDonutChart from '../../components/SimpleDonutChart.jsx'
import { adminStats, recentActivity, topCategories, salesTrend } from '../../data/mockData.js'

const activityDot = {
  shop: 'bg-leaf-500',
  order: 'bg-navy-600',
  delivery: 'bg-saffron-500',
  complaint: 'bg-red-500',
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard label="Total Users" value={adminStats.totalUsers.toLocaleString('en-IN')} icon={Users} tone="ink" />
        <StatCard label="Total Shops" value={adminStats.totalShops.toLocaleString('en-IN')} icon={Store} tone="leaf" />
        <StatCard label="Delivery Partners" value={adminStats.deliveryPartners.toLocaleString('en-IN')} icon={Bike} tone="saffron" />
        <StatCard label="Total Orders" value={adminStats.totalOrders.toLocaleString('en-IN')} icon={ShoppingBag} tone="navy" />
        <StatCard label="Revenue" value={`₹${(adminStats.revenue / 10000000).toFixed(2)} Cr`} icon={IndianRupee} tone="ink" trend="+14% MoM" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <h3 className="mb-1 text-sm font-semibold text-navy-900">Platform Sales Chart</h3>
          <p className="mb-4 text-xs text-ink-500">Order volume trend, last 7 days</p>
          <div className="h-44">
            <SimpleLineChart data={salesTrend} color="#7E56D9" />
          </div>
        </div>
        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Recent Activity</h3>
          <ul className="space-y-3.5">
            {recentActivity.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${activityDot[a.type]}`} />
                <div>
                  <p className="text-xs leading-snug text-ink-700">{a.text}</p>
                  <p className="text-[11px] text-ink-300">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Top Categories</h3>
          <SimpleDonutChart data={topCategories} />
        </div>
        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Order Analytics</h3>
          <div className="space-y-3">
            {[
              { label: 'Completed', value: 78 },
              { label: 'In Progress', value: 14 },
              { label: 'Cancelled', value: 8 },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1 flex justify-between text-xs text-ink-500">
                  <span>{row.label}</span>
                  <span className="font-semibold text-ink-900">{row.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-violet-600" style={{ width: `${row.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
