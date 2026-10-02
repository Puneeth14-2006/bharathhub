import SettingsPanel from '../../components/SettingsPanel.jsx'

const options = [
  { key: 'availability', label: 'Available for Orders', description: 'Show as online to receive new orders', defaultOn: true },
  { key: 'orderAlerts', label: 'New Order Alerts', description: 'Get sound alerts for nearby orders', defaultOn: true },
  { key: 'navVoice', label: 'Voice Navigation', description: 'Enable spoken turn-by-turn directions', defaultOn: false },
]

export default function DeliverySettings() {
  return <SettingsPanel title="Settings" subtitle="Manage your delivery preferences" options={options} />
}
