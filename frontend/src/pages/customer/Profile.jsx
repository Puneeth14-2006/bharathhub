import ProfileForm from '../../components/ProfileForm.jsx'

const fields = [
  { label: 'Full Name', value: 'Puneeth H' },
  { label: 'Mobile Number', value: '+91 90000 00000' },
  { label: 'Email', value: 'puneeth@example.com' },
  { label: 'Location', value: 'Shivamogga, Karnataka' },
  { label: 'Delivery Address', value: '4th Cross, Vinoba Nagar, Shivamogga', full: true },
]

export default function CustomerProfile() {
  return <ProfileForm title="Profile" subtitle="Manage your personal information" fields={fields} accentClass="bg-navy-800" />
}
