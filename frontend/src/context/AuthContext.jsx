import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'bharathhub_session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  // Mock login. In production this posts to /api/auth/login and stores a JWT.
  const login = ({ name, role }) => {
    const session = { name: name || 'Guest User', role }
    setUser(session)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
    return session
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
