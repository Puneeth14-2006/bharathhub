import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Bell, LogOut, ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const ACCENTS = {
  navy: {
    active: 'bg-navy-800 text-white',
    dot: 'bg-navy-700',
    ring: 'ring-navy-100',
    text: 'text-navy-700',
    chip: 'bg-navy-50 text-navy-700',
  },
  leaf: {
    active: 'bg-leaf-600 text-white',
    dot: 'bg-leaf-600',
    ring: 'ring-leaf-100',
    text: 'text-leaf-700',
    chip: 'bg-leaf-50 text-leaf-700',
  },
  saffron: {
    active: 'bg-saffron-500 text-white',
    dot: 'bg-saffron-500',
    ring: 'ring-saffron-100',
    text: 'text-saffron-700',
    chip: 'bg-saffron-50 text-saffron-700',
  },
  violet: {
    active: 'bg-violet-600 text-white',
    dot: 'bg-violet-600',
    ring: 'ring-violet-100',
    text: 'text-violet-700',
    chip: 'bg-violet-50 text-violet-700',
  },
}

export default function DashboardShell({ accent = 'navy', roleLabel, navItems, subtitle, children }) {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const a = ACCENTS[accent]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-ink-100 bg-white px-4 py-3 lg:hidden">
        <Logo size="sm" />
        <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-ink-700 hover:bg-ink-100">
          <Menu size={22} />
        </button>
      </div>

      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-ink-100 bg-white p-5 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-ink-500 hover:bg-ink-100 lg:hidden">
              <X size={18} />
            </button>
          </div>

          <div className={`mt-5 flex items-center gap-2 rounded-xl px-3 py-2 ${a.chip}`}>
            <span className={`h-2 w-2 rounded-full ${a.dot}`} />
            <span className="text-xs font-semibold">{roleLabel}</span>
          </div>

          <nav className="mt-5 flex-1 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? `${a.active} sidebar-link-active` : 'sidebar-link')}
              >
                <item.icon size={18} strokeWidth={2} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="sidebar-link mt-2 justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        {open && (
          <div className="fixed inset-0 z-30 bg-ink-900/40 lg:hidden" onClick={() => setOpen(false)} />
        )}

        {/* Main content */}
        <main className="min-h-screen flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-6 hidden items-center justify-between lg:flex">
            <div>
              <h1 className="font-display text-2xl font-bold text-navy-900">{roleLabel} Dashboard</h1>
              {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-4">
              <button className="relative rounded-full border border-ink-100 bg-white p-2.5 text-ink-500 hover:bg-ink-100">
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-saffron-500" />
              </button>
              <div className={`flex items-center gap-2 rounded-full border border-ink-100 bg-white py-1.5 pl-1.5 pr-3 ring-1 ${a.ring}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${a.dot}`}>
                  {(user?.name || 'U').charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-ink-700">{user?.name || 'Guest'}</span>
                <ChevronDown size={14} className="text-ink-300" />
              </div>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  )
}
