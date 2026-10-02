import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  Package,
  Bike,
  CheckCircle2,
  MapPin,
  Wallet,
  ShieldCheck,
  Store,
  Truck,
  Users,
  ShoppingBasket,
  Croissant,
  Hammer,
  PaintBucket,
  Pill,
  Plug,
  Shirt,
  Sofa,
  UtensilsCrossed,
  PenLine,
  Sparkles,
  LayoutGrid,
} from 'lucide-react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import ShopCard from '../../components/ShopCard.jsx'
import { categories, shops } from '../../data/mockData.js'

const colorClasses = {
  navy: 'bg-navy-50 text-navy-700',
  saffron: 'bg-saffron-50 text-saffron-700',
  leaf: 'bg-leaf-50 text-leaf-700',
}

const categoryIcons = {
  ShoppingBasket,
  Croissant,
  Hammer,
  PaintBucket,
  Pill,
  Plug,
  Shirt,
  Sofa,
  UtensilsCrossed,
  PenLine,
  Sparkles,
  LayoutGrid,
}

const steps = [
  { title: 'Discover', desc: 'Find local shops and products near you in seconds.', icon: Search },
  { title: 'Order', desc: 'Select products, add to cart and place your order.', icon: Package },
  { title: 'Delivery', desc: 'A nearby delivery partner picks up your order.', icon: Bike },
  { title: 'Receive', desc: 'Track your order live and receive it at your door.', icon: CheckCircle2 },
]

const whyCards = [
  { title: 'Discover Nearby Shops', desc: 'See what local shops around you have to offer.', icon: MapPin },
  { title: 'Support Local Businesses', desc: 'Every order helps a local shop grow.', icon: Store },
  { title: 'Fast Local Delivery', desc: 'Short distances mean quicker doorstep delivery.', icon: Truck },
  { title: 'Transparent Pricing', desc: 'No hidden charges — know the cost upfront.', icon: Wallet },
  { title: 'Easy Order Tracking', desc: 'Follow your order from shop to doorstep.', icon: Package },
  { title: 'Trusted Sellers', desc: 'Verified shops and rated delivery partners.', icon: ShieldCheck },
]

export default function Landing() {
  return (
    <div className="bg-sand-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-hub grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron-50 px-3.5 py-1.5 text-xs font-semibold text-saffron-700">
              Now live across Karnataka
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.12] text-navy-900 sm:text-5xl lg:text-[52px]">
              Discover Local.
              <br />
              Shop Local.
              <br />
              <span className="text-saffron-500">Grow Local.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500">
              Connect with trusted local shops, discover products near you, order easily and get them delivered to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shops" className="btn-outline">
                Explore Shops
              </a>
              <Link to="/register" className="btn-secondary">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-2xl font-bold text-navy-900">8,400+</p>
                <p className="text-xs text-ink-500">Local shops onboard</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-navy-900">45,800+</p>
                <p className="text-xs text-ink-500">Delivery partners</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-navy-900">1.2M+</p>
                <p className="text-xs text-ink-500">Orders delivered</p>
              </div>
            </div>
          </div>

          {/* Illustration: Customer -> Shop -> Delivery */}
          <div className="relative">
            <div className="rounded-xl2 border border-ink-100 bg-white p-6 shadow-lift sm:p-8">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-ink-300">How your order travels</p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
                    <Users size={26} />
                  </div>
                  <span className="text-xs font-semibold text-ink-700">Customer</span>
                </div>
                <div className="h-px flex-1 border-t-2 border-dashed border-ink-100" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-700">
                    <Store size={26} />
                  </div>
                  <span className="text-xs font-semibold text-ink-700">Local Shop</span>
                </div>
                <div className="h-px flex-1 border-t-2 border-dashed border-ink-100" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-700">
                    <Bike size={26} />
                  </div>
                  <span className="text-xs font-semibold text-ink-700">Delivery</span>
                </div>
              </div>

              <div className="mt-8 space-y-3 rounded-xl bg-sand-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-navy-900">Order #12345</p>
                  <span className="badge bg-saffron-100 text-saffron-700">Preparing</span>
                </div>
                <p className="text-xs text-ink-500">More Supermarket · Estimated delivery in 25 min</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full w-2/3 rounded-full bg-saffron-500" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full bg-saffron-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-52 w-52 rounded-full bg-navy-100/60 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16">
        <div className="container-hub">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Shop by category</h2>
              <p className="mt-1.5 text-sm text-ink-500">Everything a local neighbourhood needs, organised.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.icon]
              return (
                <div
                  key={cat.name}
                  className="card flex flex-col items-center gap-2.5 px-3 py-5 text-center transition-transform hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colorClasses[cat.color]}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-ink-700">{cat.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-navy-950 py-16 text-white">
        <div className="container-hub">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">How BharathHub works</h2>
            <p className="mt-1.5 text-sm text-white/60">From discovery to doorstep, in four simple steps.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-bold text-white/15">{`0${i + 1}`}</span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-500/15 text-saffron-400">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local shops */}
      <section id="shops" className="py-16">
        <div className="container-hub">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Everything you need, from shops near you</h2>
              <p className="mt-1.5 text-sm text-ink-500">Handpicked local businesses ready to serve your neighbourhood.</p>
            </div>
            <Link to="/login" className="hidden text-sm font-semibold text-navy-800 hover:text-navy-900 sm:block">
              View all shops →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BharathHub */}
      <section id="why" className="bg-sand-100 py-16">
        <div className="container-hub">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Why BharathHub</h2>
            <p className="mt-1.5 text-sm text-ink-500">Built for the way Indian neighbourhoods actually shop.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                  <card.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900">{card.title}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner section */}
      <section id="partner" className="py-16">
        <div className="container-hub">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Grow your business with BharathHub</h2>
            <p className="mt-1.5 text-sm text-ink-500">Three ways to be part of the BharathHub ecosystem.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="card flex flex-col p-7">
              <Store className="text-navy-700" size={26} />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">For Shop Owners</h3>
              <p className="mt-2 flex-1 text-sm text-ink-500">Reach more customers and manage your store digitally.</p>
              <Link to="/register" className="btn-primary mt-5 w-full">
                Join as Shop Owner
              </Link>
            </div>
            <div className="card flex flex-col p-7">
              <Bike className="text-saffron-600" size={26} />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">For Delivery Partners</h3>
              <p className="mt-2 flex-1 text-sm text-ink-500">Earn by delivering orders in your area, on your schedule.</p>
              <Link to="/register" className="btn-secondary mt-5 w-full">
                Join as Delivery Partner
              </Link>
            </div>
            <div className="card flex flex-col p-7">
              <Users className="text-leaf-700" size={26} />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">For Customers</h3>
              <p className="mt-2 flex-1 text-sm text-ink-500">Discover everything you need from local businesses.</p>
              <Link to="/register" className="btn-outline mt-5 w-full">
                Join as Customer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
