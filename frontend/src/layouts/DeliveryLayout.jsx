import { Outlet } from 'react-router-dom'
import {
  LayoutGrid,
  PackageSearch,
  Bike,
  Wallet,
  History,
  Navigation,
  User,
  Settings,
} from 'lucide-react'
import DashboardShell from '../components/DashboardShell.jsx'

const navItems = [
  { label: 'Dashboard', path: '/delivery/dashboard', icon: LayoutGrid, end: true },
  { label: 'Available Orders', path: '/delivery/orders', icon: PackageSearch },
  { label: 'My Deliveries', path: '/delivery/deliveries', icon: Bike },
  { label: 'Earnings', path: '/delivery/earnings', icon: Wallet },
  { label: 'Delivery History', path: '/delivery/history', icon: History },
  { label: 'Navigation', path: '/delivery/navigation', icon: Navigation },
  { label: 'Profile', path: '/delivery/profile', icon: User },
  { label: 'Settings', path: '/delivery/settings', icon: Settings },
]

export default function DeliveryLayout() {
  return (
    <DashboardShell accent="saffron" roleLabel="Delivery Partner" subtitle="Accept orders, navigate and deliver." navItems={navItems}>
      <Outlet />
    </DashboardShell>
  )
}
