import { IndianRupee, CreditCard, RefreshCcw } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'

const payments = [
  { id: 'PAY-8821', party: 'More Supermarket', type: 'Payout', amount: 12480, status: 'Completed' },
  { id: 'PAY-8822', party: 'Ravi Kumar', type: 'Payout', amount: 1240, status: 'Completed' },
  { id: 'PAY-8823', party: 'Sneha R', type: 'Refund', amount: 40, status: 'Pending' },
]

export default function AdminPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Payments</h2>
        <p className="mt-1 text-sm text-ink-500">Platform payouts, refunds and settlements</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Settled" value="₹4.82 Cr" icon={IndianRupee} tone="ink" />
        <StatCard label="Pending Payouts" value="₹12.4 L" icon={CreditCard} tone="saffron" />
        <StatCard label="Refunds Issued" value="₹2.1 L" icon={RefreshCcw} tone="navy" />
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Payment ID</th>
              <th className="px-5 py-3 font-medium">Party</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 text-ink-500">{p.id}</td>
                <td className="px-5 py-3.5 font-medium text-navy-900">{p.party}</td>
                <td className="px-5 py-3.5 text-ink-700">{p.type}</td>
                <td className="px-5 py-3.5 text-ink-700">₹{p.amount.toLocaleString('en-IN')}</td>
                <td className="px-5 py-3.5">
                  <span className={`badge ${p.status === 'Completed' ? 'bg-leaf-100 text-leaf-700' : 'bg-saffron-100 text-saffron-700'}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
