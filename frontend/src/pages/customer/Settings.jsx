import SettingsPanel from '../../components/SettingsPanel.jsx'

const options = [
  { key: 'orderUpdates', label: 'Order Updates', description: 'Get notified about order status changes', defaultOn: true },
  { key: 'promotions', label: 'Promotions & Offers', description: 'Receive deals from shops near you', defaultOn: true },
  { key: 'sms', label: 'SMS Alerts', description: 'Order alerts via SMS', defaultOn: false },
  { key: 'locationAccess', label: 'Location Access', description: 'Allow BharathHub to use your location', defaultOn: true },
]

export default function CustomerSettings() {
  return <SettingsPanel title="Settings" subtitle="Control your notifications and preferences" options={options} />
}
