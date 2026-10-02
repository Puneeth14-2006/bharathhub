import { Link } from 'react-router-dom'
import { ClipboardList, Wallet, Clock, Package } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import StatusBadge from '../../components/StatusBadge.jsx'
import SimpleLineChart from '../../components/SimpleLineChart.jsx'
import { shopStats, shopOrders, inventory, salesTrend } from '../../data/mockData.js'

export default function ShopDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Today's Orders" value={shopStats.todaysOrders} icon={ClipboardList} tone="leaf" trend="+4 vs yesterday" />
        <StatCard label="Total Sales" value={`₹${shopStats.totalSales.toLocaleString('en-IN')}`} icon={Wallet} tone="navy" trend="+12% this week" />
        <StatCard label="Pending Orders" value={shopStats.pendingOrders} icon={Clock} tone="saffron" />
        <StatCard label="Products" value={shopStats.totalProducts} icon={Package} tone="leaf" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-navy-900">Sales Overview</h3>
              <p className="text-xs text-ink-500">Last 7 days</p>
            </div>
            <span className="badge bg-leaf-100 text-leaf-700">+18% growth</span>
          </div>
          <div className="h-40">
            <SimpleLineChart data={salesTrend} color="#188550" />
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-4 text-sm font-semibold text-navy-900">Inventory Status</h3>
          <div className="space-y-3">
            {inventory.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="text-sm text-ink-700">{item.name}</span>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
          <Link to="/shop/inventory" className="btn-outline mt-4 w-full !py-2 text-xs">
            Manage Inventory
          </Link>
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-navy-900">Recent Orders</h3>
          <Link to="/shop/orders" className="text-xs font-semibold text-navy-700">
            View All
          </Link>
        </div>
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
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
                    <button className="text-xs font-semibold text-navy-700 hover:text-navy-900">View</button>
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
