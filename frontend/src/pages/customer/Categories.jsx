import { categories } from '../../data/mockData.js'

export default function CustomerCategories() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Categories</h2>
        <p className="mt-1 text-sm text-ink-500">Browse everything BharathHub shops offer</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <div key={cat.name} className="card flex items-center gap-3 p-4 transition-shadow hover:shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-sm font-bold text-navy-700">
              {cat.name.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">{cat.name}</p>
              <p className="text-xs text-ink-500">Explore shops →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
