const STYLES = {
  Preparing: 'bg-saffron-100 text-saffron-700',
  Accepted: 'bg-navy-100 text-navy-700',
  Delivered: 'bg-leaf-100 text-leaf-700',
  Completed: 'bg-leaf-100 text-leaf-700',
  Pending: 'bg-saffron-100 text-saffron-700',
  Active: 'bg-leaf-100 text-leaf-700',
  Online: 'bg-leaf-100 text-leaf-700',
  Offline: 'bg-ink-100 text-ink-500',
  Suspended: 'bg-red-100 text-red-600',
  Open: 'bg-red-100 text-red-600',
  'In Review': 'bg-saffron-100 text-saffron-700',
  Resolved: 'bg-leaf-100 text-leaf-700',
  'In Stock': 'bg-leaf-100 text-leaf-700',
  'Low Stock': 'bg-saffron-100 text-saffron-700',
  'Out of Stock': 'bg-red-100 text-red-600',
}

export default function StatusBadge({ status }) {
  const style = STYLES[status] || 'bg-ink-100 text-ink-500'
  return <span className={`badge ${style}`}>{status}</span>
}
