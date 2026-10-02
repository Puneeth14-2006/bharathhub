import { Download, FileText } from 'lucide-react'

const reports = [
  { name: 'Monthly Sales Report — Sep 2026', size: '482 KB' },
  { name: 'Inventory Report — Q3 2026', size: '210 KB' },
  { name: 'Customer Insights — Sep 2026', size: '156 KB' },
]

export default function ShopReports() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Reports</h2>
        <p className="mt-1 text-sm text-ink-500">Download and review your shop's performance reports</p>
      </div>

      <div className="card divide-y divide-ink-100">
        {reports.map((r) => (
          <div key={r.name} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">{r.name}</p>
                <p className="text-xs text-ink-500">{r.size}</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-navy-900">
              <Download size={14} /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
