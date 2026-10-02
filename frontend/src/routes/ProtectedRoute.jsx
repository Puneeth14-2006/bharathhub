import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// Wraps role-specific routes. Once a real backend issues JWTs, swap the
// mock `user` check below for a verified token + role claim.
export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user.role !== role) {
    return <Navigate to={`/${user.role}/dashboard`} replace />
  }

  return children
}
