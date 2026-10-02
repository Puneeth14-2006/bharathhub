import ProfileForm from '../../components/ProfileForm.jsx'

const fields = [
  { label: 'Full Name', value: 'Ravi Kumar' },
  { label: 'Mobile Number', value: '+91 90000 00000' },
  { label: 'Email', value: 'ravi.kumar@example.com' },
  { label: 'Vehicle Number', value: 'KA-14-AB-1234' },
  { label: 'Service Area', value: 'Shivamogga, Karnataka', full: true },
]

export default function DeliveryProfile() {
  return <ProfileForm title="Profile" subtitle="Manage your delivery partner details" fields={fields} accentClass="bg-saffron-500" />
}
