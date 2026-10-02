import { Star, MapPin, Store } from 'lucide-react'

export default function ShopCard({ shop }) {
  return (
    <div className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-card">
      <div className="flex h-28 items-center justify-center bg-gradient-to-br from-navy-50 to-sand-100">
        <Store className="text-navy-300" size={34} strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-[15px] font-semibold text-navy-900">{shop.name}</h4>
          <span
            className={`badge shrink-0 ${
              shop.open ? 'bg-leaf-100 text-leaf-700' : 'bg-ink-100 text-ink-500'
            }`}
          >
            {shop.open ? 'Open' : 'Closed'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-ink-500">
          <span className="flex items-center gap-1 font-medium text-saffron-600">
            <Star size={13} fill="currentColor" strokeWidth={0} /> {shop.rating}
            <span className="text-ink-300">({shop.reviews})</span>
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={13} /> {shop.distance}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {shop.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-medium text-ink-500">
              {tag}
            </span>
          ))}
        </div>
        <button className="btn-outline mt-2 w-full !py-2 text-xs">View Shop</button>
      </div>
    </div>
  )
}
