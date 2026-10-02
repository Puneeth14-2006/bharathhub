const customers = [
  { name: 'Ramesh Kumar', orders: 14, spent: 5240, lastOrder: '12 Sep 2026' },
  { name: 'Priya M', orders: 9, spent: 2870, lastOrder: '10 Sep 2026' },
  { name: 'Arjun P', orders: 22, spent: 8120, lastOrder: '05 Sep 2026' },
  { name: 'Sneha R', orders: 4, spent: 980, lastOrder: '01 Sep 2026' },
]

export default function ShopCustomers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Customers</h2>
        <p className="mt-1 text-sm text-ink-500">Shoppers who order from your store</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Total Orders</th>
              <th className="px-5 py-3 font-medium">Total Spent</th>
              <th className="px-5 py-3 font-medium">Last Order</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.name} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 font-medium text-navy-900">{c.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{c.orders}</td>
                <td className="px-5 py-3.5 text-ink-700">₹{c.spent.toLocaleString('en-IN')}</td>
                <td className="px-5 py-3.5 text-ink-700">{c.lastOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
