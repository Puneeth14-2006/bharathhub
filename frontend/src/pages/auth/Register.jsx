import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, Store, Bike, ArrowRight } from 'lucide-react'
import Logo from '../../components/Logo.jsx'
import { useAuth } from '../../context/AuthContext.jsx'

const roles = [
  { id: 'customer', label: 'Customer', icon: ShoppingBag },
  { id: 'shop', label: 'Shop Owner', icon: Store },
  { id: 'delivery', label: 'Delivery Partner', icon: Bike },
]

export default function Register() {
  const [role, setRole] = useState('customer')
  const [form, setForm] = useState({})
  const { login } = useAuth()
  const navigate = useNavigate()

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock registration — replace with a real POST /api/auth/register call
    const name = form.fullName || form.ownerName || form.shopName || 'New User'
    login({ name, role })
    navigate(`/${role}/dashboard`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand-100 px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="mb-7 flex flex-col items-center text-center">
          <Link to="/">
            <Logo size="lg" />
          </Link>
          <h1 className="mt-5 text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-ink-500">Join BharathHub and start shopping local</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-300">I am a</p>
          <div className="grid grid-cols-3 gap-3">
            {roles.map((r) => {
              const active = role === r.id
              return (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-3.5 transition-colors ${
                    active ? 'border-navy-700 bg-navy-50 ring-1 ring-navy-700' : 'border-ink-100 hover:border-navy-200'
                  }`}
                >
                  <r.icon size={20} className={active ? 'text-navy-800' : 'text-ink-500'} />
                  <span className={`text-xs font-semibold ${active ? 'text-navy-900' : 'text-ink-700'}`}>{r.label}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-6 space-y-4">
            {role === 'customer' && (
              <>
                <Field label="Full Name" onChange={update('fullName')} placeholder="Puneeth H" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Mobile Number" onChange={update('mobile')} placeholder="+91 90000 00000" />
                  <Field label="Email" type="email" onChange={update('email')} placeholder="you@example.com" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Password" type="password" onChange={update('password')} placeholder="••••••••" />
                  <Field label="Confirm Password" type="password" onChange={update('confirmPassword')} placeholder="••••••••" />
                </div>
                <Field label="Location" onChange={update('location')} placeholder="Shivamogga, Karnataka" />
              </>
            )}

            {role === 'shop' && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Shop Name" onChange={update('shopName')} placeholder="More Supermarket" />
                  <Field label="Shop Category" onChange={update('shopCategory')} placeholder="Grocery" />
                </div>
                <Field label="Shop Address" onChange={update('shopAddress')} placeholder="Main Road, Shivamogga" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Owner Name" onChange={update('ownerName')} placeholder="Manjunath K" />
                  <Field label="Mobile Number" onChange={update('mobile')} placeholder="+91 90000 00000" />
                </div>
                <Field label="Password" type="password" onChange={update('password')} placeholder="••••••••" />
              </>
            )}

            {role === 'delivery' && (
              <>
                <Field label="Full Name" onChange={update('fullName')} placeholder="Ravi Kumar" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Mobile Number" onChange={update('mobile')} placeholder="+91 90000 00000" />
                  <Field label="Email" type="email" onChange={update('email')} placeholder="you@example.com" />
                </div>
                <Field label="Location" onChange={update('location')} placeholder="Shivamogga, Karnataka" />
                <Field label="Password" type="password" onChange={update('password')} placeholder="••••••••" />
              </>
            )}
          </div>

          <button type="submit" className="btn-primary mt-6 w-full">
            Create Account <ArrowRight size={16} />
          </button>

          <p className="mt-5 text-center text-sm text-ink-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-navy-800 hover:text-navy-900">
              Login
            </Link>
          </p>
        </form>

        <p className="mt-4 text-center text-xs text-ink-300">Admin accounts are created and managed internally.</p>
      </div>
    </div>
  )
}

function Field({ label, type = 'text', onChange, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink-700">{label}</label>
      <input type={type} required onChange={onChange} placeholder={placeholder} className="input-field" />
    </div>
  )
}
