import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Logo from './Logo.jsx'

const columns = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Partner With Us'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Privacy Policy', 'Terms of Service'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-navy-950 text-white">
      <div className="container-hub grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" size="md" />
          <p className="mt-4 max-w-[220px] text-sm text-white/60">
            One hub for every local need — shops, orders and doorstep delivery, across India.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-saffron-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-white">Get the app</h4>
          <p className="mt-4 text-sm text-white/60">Mobile app launching soon for customers, shop owners and delivery partners.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-hub text-xs text-white/50">© 2026 BharathHub Technologies Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
