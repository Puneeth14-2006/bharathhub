import ProfileForm from '../../components/ProfileForm.jsx'

const fields = [
  { label: 'Shop Name', value: 'More Supermarket' },
  { label: 'Shop Category', value: 'Grocery' },
  { label: 'Owner Name', value: 'Manjunath K' },
  { label: 'Mobile Number', value: '+91 90000 00000' },
  { label: 'Shop Address', value: 'Main Road, Shivamogga, Karnataka', full: true },
]

export default function ShopProfile() {
  return <ProfileForm title="Shop Profile" subtitle="Manage your shop's public details" fields={fields} accentClass="bg-leaf-600" />
}
