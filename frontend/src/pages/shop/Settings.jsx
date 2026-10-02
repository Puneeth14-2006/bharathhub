import SettingsPanel from '../../components/SettingsPanel.jsx'

const options = [
  { key: 'autoAccept', label: 'Auto-accept Orders', description: 'Automatically accept new incoming orders', defaultOn: false },
  { key: 'lowStockAlert', label: 'Low Stock Alerts', description: 'Notify when a product stock is low', defaultOn: true },
  { key: 'orderNotif', label: 'Order Notifications', description: 'Get notified for every new order', defaultOn: true },
  { key: 'shopVisible', label: 'Shop Visibility', description: 'Show your shop to nearby customers', defaultOn: true },
]

export default function ShopSettings() {
  return <SettingsPanel title="Settings" subtitle="Manage how your shop operates" options={options} />
}
