import StatusBadge from '../../components/StatusBadge.jsx'
import { adminUsers } from '../../data/mockData.js'

export default function AdminUsers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Users</h2>
          <p className="mt-1 text-sm text-ink-500">All platform users across every role</p>
        </div>
        <input type="text" placeholder="Search users..." className="input-field w-full sm:w-64" />
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-300">
              <th className="px-5 py-3 font-medium">User ID</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.map((u) => (
              <tr key={u.id} className="border-b border-ink-100 last:border-0">
                <td className="px-5 py-3.5 text-ink-500">{u.id}</td>
                <td className="px-5 py-3.5 font-medium text-navy-900">{u.name}</td>
                <td className="px-5 py-3.5 text-ink-700">{u.role}</td>
                <td className="px-5 py-3.5 text-ink-700">{u.location}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={u.status} />
                </td>
                <td className="px-5 py-3.5">
                  <button className="text-xs font-semibold text-violet-700 hover:text-violet-800">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
