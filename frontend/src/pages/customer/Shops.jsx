import { Search, SlidersHorizontal } from 'lucide-react'
import ShopCard from '../../components/ShopCard.jsx'
import { shops } from '../../data/mockData.js'

export default function CustomerShops() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Explore Shops</h2>
        <p className="mt-1 text-sm text-ink-500">{shops.length} shops near Shivamogga</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" size={18} />
          <input type="text" placeholder="Search shops or products" className="input-field pl-12" />
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white px-4 text-sm font-medium text-ink-700">
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  )
}
