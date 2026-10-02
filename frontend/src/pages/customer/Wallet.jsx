import { Wallet, Plus, ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const transactions = [
  { id: 't1', label: 'Order #12345 refund', amount: 40, type: 'credit', date: '20 Sep 2026' },
  { id: 't2', label: 'Order #12344 payment', amount: 260, type: 'debit', date: '10 Sep 2026' },
  { id: 't3', label: 'Wallet top-up', amount: 500, type: 'credit', date: '02 Sep 2026' },
]

export default function CustomerWallet() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Wallet</h2>
        <p className="mt-1 text-sm text-ink-500">Manage your BharathHub balance</p>
      </div>

      <div className="card flex flex-col justify-between gap-5 bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-white sm:flex-row sm:items-center">
        <div>
          <p className="flex items-center gap-2 text-sm text-white/70">
            <Wallet size={16} /> Available Balance
          </p>
          <p className="mt-2 font-display text-3xl font-bold">₹1,280.00</p>
        </div>
        <button className="btn-secondary !py-2.5">
          <Plus size={16} /> Add Money
        </button>
      </div>

      <div className="card divide-y divide-ink-100">
        <div className="px-5 py-3.5">
          <p className="text-sm font-semibold text-navy-900">Recent Transactions</p>
        </div>
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  t.type === 'credit' ? 'bg-leaf-50 text-leaf-600' : 'bg-red-50 text-red-500'
                }`}
              >
                {t.type === 'credit' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
              </div>
              <div>
                <p className="text-sm font-medium text-ink-900">{t.label}</p>
                <p className="text-xs text-ink-500">{t.date}</p>
              </div>
            </div>
            <p className={`text-sm font-semibold ${t.type === 'credit' ? 'text-leaf-600' : 'text-red-500'}`}>
              {t.type === 'credit' ? '+' : '-'}₹{t.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
