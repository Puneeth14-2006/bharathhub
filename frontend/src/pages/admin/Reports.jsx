import { Download, FileBarChart } from 'lucide-react'

const reports = [
  { name: 'Platform Revenue Report — Sep 2026', size: '1.2 MB' },
  { name: 'Shop Performance Report — Q3 2026', size: '860 KB' },
  { name: 'Delivery Partner Report — Sep 2026', size: '540 KB' },
  { name: 'User Growth Report — Sep 2026', size: '320 KB' },
]

export default function AdminReports() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Reports</h2>
        <p className="mt-1 text-sm text-ink-500">Platform-wide reports for review and export</p>
      </div>

      <div className="card divide-y divide-ink-100">
        {reports.map((r) => (
          <div key={r.name} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <FileBarChart size={18} />
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
