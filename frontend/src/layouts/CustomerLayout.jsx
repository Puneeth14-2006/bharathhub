import { Outlet } from 'react-router-dom'
import {
  LayoutGrid,
  Store,
  Grid2x2,
  ClipboardList,
  Heart,
  ShoppingCart,
  MapPinned,
  Wallet,
  User,
  Settings,
} from 'lucide-react'
import DashboardShell from '../components/DashboardShell.jsx'

const navItems = [
  { label: 'Dashboard', path: '/customer/dashboard', icon: LayoutGrid, end: true },
  { label: 'Explore Shops', path: '/customer/shops', icon: Store },
  { label: 'Categories', path: '/customer/categories', icon: Grid2x2 },
  { label: 'My Orders', path: '/customer/orders', icon: ClipboardList },
  { label: 'Wishlist', path: '/customer/wishlist', icon: Heart },
  { label: 'Cart', path: '/customer/cart', icon: ShoppingCart },
  { label: 'Track Order', path: '/customer/track', icon: MapPinned },
  { label: 'Wallet', path: '/customer/wallet', icon: Wallet },
  { label: 'Profile', path: '/customer/profile', icon: User },
  { label: 'Settings', path: '/customer/settings', icon: Settings },
]

export default function CustomerLayout() {
  return (
    <DashboardShell accent="navy" roleLabel="Customer" subtitle="Browse, order and track — all in one place." navItems={navItems}>
      <Outlet />
    </DashboardShell>
  )
}
