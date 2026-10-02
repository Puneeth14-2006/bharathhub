import { AlertTriangle } from 'lucide-react'
import StatusBadge from '../../components/StatusBadge.jsx'
import { inventory } from '../../data/mockData.js'

export default function ShopInventory() {
  const lowStockCount = inventory.filter((i) => i.status !== 'In Stock').length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Inventory</h2>
        <p className="mt-1 text-sm text-ink-500">Track stock levels across your products</p>
      </div>

      {lowStockCount > 0 && (
        <div className="flex items-center gap-3 rounded-xl bg-saffron-50 px-4 py-3 text-sm text-saffron-700">
          <AlertTriangle size={17} />
          {lowStockCount} product{lowStockCount > 1 ? 's need' : ' needs'} restocking attention
        </div>
      )}

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Stock Left</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.name} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 font-medium text-navy-900">{item.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{item.stock} units</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-5 py-3.5">
                  <button className="rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700 hover:bg-ink-100/70">
                    Restock
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
