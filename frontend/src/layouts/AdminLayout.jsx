import { Outlet } from 'react-router-dom'
import {
  LayoutGrid,
  Users,
  UserRound,
  Store,
  Bike,
  ShoppingBag,
  ClipboardList,
  CreditCard,
  MessageSquareWarning,
  FileBarChart,
  BarChart3,
  Settings,
} from 'lucide-react'
import DashboardShell from '../components/DashboardShell.jsx'

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutGrid, end: true },
  { label: 'Users', path: '/admin/users', icon: Users },
  { label: 'Customers', path: '/admin/customers', icon: UserRound },
  { label: 'Shop Owners', path: '/admin/shops', icon: Store },
  { label: 'Delivery Partners', path: '/admin/delivery-partners', icon: Bike },
  { label: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { label: 'Payments', path: '/admin/payments', icon: CreditCard },
  { label: 'Complaints', path: '/admin/complaints', icon: MessageSquareWarning },
  { label: 'Reports', path: '/admin/reports', icon: FileBarChart },
  { label: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
]

export default function AdminLayout() {
  return (
    <DashboardShell accent="violet" roleLabel="Admin" subtitle="Platform-wide management and oversight." navItems={navItems}>
      <Outlet />
    </DashboardShell>
  )
}
