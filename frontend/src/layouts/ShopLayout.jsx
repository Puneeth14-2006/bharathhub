import { Outlet } from 'react-router-dom'
import {
  LayoutGrid,
  ClipboardList,
  Package,
  Boxes,
  LineChart,
  Users,
  Store,
  FileBarChart,
  Settings,
} from 'lucide-react'
import DashboardShell from '../components/DashboardShell.jsx'

const navItems = [
  { label: 'Dashboard', path: '/shop/dashboard', icon: LayoutGrid, end: true },
  { label: 'Orders', path: '/shop/orders', icon: ClipboardList },
  { label: 'Products', path: '/shop/products', icon: Package },
  { label: 'Inventory', path: '/shop/inventory', icon: Boxes },
  { label: 'Sales', path: '/shop/sales', icon: LineChart },
  { label: 'Customers', path: '/shop/customers', icon: Users },
  { label: 'Shop Profile', path: '/shop/profile', icon: Store },
  { label: 'Reports', path: '/shop/reports', icon: FileBarChart },
  { label: 'Settings', path: '/shop/settings', icon: Settings },
]

export default function ShopLayout() {
  return (
    <DashboardShell accent="leaf" roleLabel="Shop Owner" subtitle="Manage products, orders and inventory." navItems={navItems}>
      <Outlet />
    </DashboardShell>
  )
}
