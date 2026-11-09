import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from './store'

export default function PublicRoute() {
  const token = useAuthStore((s) => s.token)
  return token ? <Navigate to="/" replace /> : <Outlet />
}