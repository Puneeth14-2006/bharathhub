import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, ShoppingBag, Store, Bike, ShieldCheck, ArrowRight } from 'lucide-react'
import Logo from '../../components/Logo.jsx'
import { useAuth } from '../../context/AuthContext.jsx'

const roles = [
  { id: 'customer', label: 'Customer', desc: 'Browse shops and place orders', icon: ShoppingBag, sample: 'Puneeth H' },
  { id: 'shop', label: 'Shop Owner', desc: 'Manage products and orders', icon: Store, sample: 'More Supermarket' },
  { id: 'delivery', label: 'Delivery Partner', desc: 'Accept and deliver orders', icon: Bike, sample: 'Ravi Kumar' },
  { id: 'admin', label: 'Admin', desc: 'Manage the BharathHub platform', icon: ShieldCheck, sample: 'Admin' },
]

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('customer')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock authentication — replace with a real POST /api/auth/login call
    const role = roles.find((r) => r.id === selectedRole)
    login({ name: role.sample, role: selectedRole })
    navigate(`/${selectedRole}/dashboard`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand-100 px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="mb-7 flex flex-col items-center text-center">
          <Link to="/">
            <Logo size="lg" />
          </Link>
          <h1 className="mt-5 text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-ink-500">Login to continue to your BharathHub account</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink-700">Email / Mobile Number</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" size={17} />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-10"
                />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-xs font-semibold text-ink-700">Password</label>
                <a href="#" className="text-xs font-semibold text-navy-700 hover:text-navy-900">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" size={17} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field pl-10"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-300">Login as</p>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => {
                const active = selectedRole === role.id
                return (
                  <button
                    type="button"
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex flex-col items-start gap-2 rounded-xl border p-3.5 text-left transition-colors ${
                      active ? 'border-navy-700 bg-navy-50 ring-1 ring-navy-700' : 'border-ink-100 hover:border-navy-200'
                    }`}
                  >
                    <role.icon size={20} className={active ? 'text-navy-800' : 'text-ink-500'} />
                    <span className={`text-sm font-semibold ${active ? 'text-navy-900' : 'text-ink-700'}`}>{role.label}</span>
                    <span className="text-[11px] leading-snug text-ink-500">{role.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full">
            Login <ArrowRight size={16} />
          </button>

          <p className="mt-5 text-center text-sm text-ink-500">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-semibold text-navy-800 hover:text-navy-900">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
