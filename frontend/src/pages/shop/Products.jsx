import { Plus, Pencil } from 'lucide-react'
import StatusBadge from '../../components/StatusBadge.jsx'
import { products } from '../../data/mockData.js'

export default function ShopProducts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Products</h2>
          <p className="mt-1 text-sm text-ink-500">{products.length} products listed in your shop</p>
        </div>
        <button className="btn-primary !bg-leaf-600 hover:!bg-leaf-700">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Product Name</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 font-medium text-navy-900">{p.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{p.category}</td>
                <td className="px-5 py-3.5 text-ink-700">₹{p.price}</td>
                <td className="px-5 py-3.5 text-ink-700">{p.stock}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-5 py-3.5">
                  <button className="flex items-center gap-1 text-xs font-semibold text-navy-700 hover:text-navy-900">
                    <Pencil size={13} /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
