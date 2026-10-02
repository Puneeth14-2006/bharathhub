import { Heart } from 'lucide-react'
import { popularProducts } from '../../data/mockData.js'

export default function CustomerWishlist() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Wishlist</h2>
        <p className="mt-1 text-sm text-ink-500">Products you have saved for later</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((p) => (
          <div key={p.id} className="card flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-semibold text-navy-900">{p.name}</p>
              <p className="text-xs text-ink-500">{p.shop}</p>
              <p className="mt-1 text-sm font-semibold text-navy-900">₹{p.price}</p>
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-50 text-saffron-600">
              <Heart size={16} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
