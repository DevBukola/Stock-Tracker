import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from './store'

const BYPASS_AUTH = true

export default function PublicRoute() {
  const token = useAuthStore((s) => s.token)
  return !BYPASS_AUTH && token ? <Navigate to="/" replace /> : <Outlet />
}