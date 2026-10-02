import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Explore Shops', href: '#shops' },
  { label: 'Categories', href: '#categories' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Become a Partner', href: '#partner' },
  { label: 'About', href: '#why' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="container-hub flex h-16 items-center justify-between">
        <Link to="/">
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-ink-500 transition-colors hover:text-navy-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="text-sm font-semibold text-navy-800 hover:text-navy-900">
            Login
          </Link>
          <Link to="/register" className="btn-primary !py-2.5 !px-5 text-sm">
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-ink-700 lg:hidden">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container-hub flex h-16 items-center justify-between">
            <Logo size="md" />
            <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-ink-700">
              <X size={22} />
            </button>
          </div>
          <nav className="container-hub flex flex-col gap-1 pt-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-700 hover:bg-ink-100"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-ink-100 pt-4">
              <Link to="/login" onClick={() => setOpen(false)} className="btn-outline w-full">
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
