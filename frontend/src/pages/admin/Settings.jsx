import SettingsPanel from '../../components/SettingsPanel.jsx'

const options = [
  { key: 'newShopApproval', label: 'Require Shop Approval', description: 'New shops need admin review before going live', defaultOn: true },
  { key: 'partnerApproval', label: 'Require Partner Approval', description: 'New delivery partners need admin review', defaultOn: true },
  { key: 'platformAlerts', label: 'Platform Alerts', description: 'Get notified of critical platform events', defaultOn: true },
  { key: 'maintenanceMode', label: 'Maintenance Mode', description: 'Temporarily disable customer ordering', defaultOn: false },
]

export default function AdminSettings() {
  return <SettingsPanel title="Settings" subtitle="Platform-wide configuration" options={options} />
}
