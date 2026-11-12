import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from './store'

const BYPASS_AUTH = true 

export default function ProtectedRoute() {
  const token = useAuthStore((s) => s.token)
  const location = useLocation()

  if (!BYPASS_AUTH && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}