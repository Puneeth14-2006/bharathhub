import { Link } from 'react-router-dom'
import { Search, MapPin, Clock, ChevronRight } from 'lucide-react'
import ShopCard from '../../components/ShopCard.jsx'
import StatusBadge from '../../components/StatusBadge.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { shops, categories, popularProducts, customerOrders } from '../../data/mockData.js'

export default function CustomerDashboard() {
  const { user } = useAuth()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-navy-900 lg:hidden">
            {greeting}, {user?.name?.split(' ')[0] || 'there'}
          </h2>
          <h2 className="hidden text-lg font-semibold text-ink-700 lg:block">
            {greeting}, {user?.name?.split(' ')[0] || 'there'} 👋
          </h2>
        </div>
        <button className="flex items-center gap-1.5 self-start rounded-full border border-ink-100 bg-white px-3.5 py-2 text-sm font-medium text-ink-700">
          <MapPin size={15} className="text-navy-700" /> Shivamogga
        </button>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" size={18} />
        <input
          type="text"
          placeholder="Search for shops, products or categories"
          className="input-field !py-3.5 pl-12 shadow-soft"
        />
      </div>

      {/* Hero promo */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-8 text-white sm:px-10">
        <p className="max-w-sm font-display text-xl font-bold sm:text-2xl">Fresh groceries delivered to your doorstep</p>
        <p className="mt-2 max-w-sm text-sm text-white/70">Order from More Supermarket and 20+ shops nearby.</p>
        <Link to="/customer/shops" className="btn-secondary mt-5 !py-2.5">
          Shop Now
        </Link>
      </div>

      {/* Categories */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-navy-900">Categories</h3>
          <Link to="/customer/categories" className="flex items-center text-xs font-semibold text-navy-700">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
          {categories.slice(0, 8).map((cat) => (
            <div key={cat.name} className="card flex flex-col items-center gap-2 px-2 py-4 text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-xs font-bold text-navy-700">
                {cat.name.charAt(0)}
              </span>
              <span className="text-[11px] font-medium leading-tight text-ink-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby shops */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-navy-900">Nearby Shops</h3>
          <Link to="/customer/shops" className="flex items-center text-xs font-semibold text-navy-700">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shops.slice(0, 3).map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Order tracking */}
        <section>
          <h3 className="mb-4 text-base font-semibold text-navy-900">Order Tracking</h3>
          <div className="card p-5">
            {customerOrders.filter((o) => o.status !== 'Delivered').map((order) => (
              <div key={order.id}>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-navy-900">{order.id}</p>
                  <StatusBadge status={order.status} />
                </div>
                <p className="mt-1 text-sm text-ink-500">{order.shop}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-saffron-600">
                  <Clock size={13} /> Estimated delivery: {order.eta}
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full w-1/2 rounded-full bg-saffron-500" />
                </div>
              </div>
            ))}
            <Link to="/customer/track" className="btn-outline mt-5 w-full !py-2.5 text-sm">
              Track Order
            </Link>
          </div>
        </section>

        {/* Popular products */}
        <section>
          <h3 className="mb-4 text-base font-semibold text-navy-900">Popular Products</h3>
          <div className="card divide-y divide-ink-100">
            {popularProducts.map((p) => (
              <div key={p.id} className="flex items-center justify-between px-5 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-ink-900">{p.name}</p>
                  <p className="text-xs text-ink-500">{p.shop}</p>
                </div>
                <p className="text-sm font-semibold text-navy-900">₹{p.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent orders */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-navy-900">Your Recent Orders</h3>
          <Link to="/customer/orders" className="flex items-center text-xs font-semibold text-navy-700">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="card divide-y divide-ink-100">
          {customerOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-navy-900">{order.id}</p>
                <p className="text-xs text-ink-500">
                  {order.shop} · {order.date}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <StatusBadge status={order.status} />
                <p className="text-sm font-semibold text-ink-900">₹{order.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
