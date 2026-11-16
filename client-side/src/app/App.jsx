import { Routes, Route, Navigate } from 'react-router-dom'

import ProtectedRoute from '../Features/Auth/ProtectedRoute'
import PublicRoute from '../Features/Auth/PublicRoute'
import Layout from './Layout'

import LoginPage from '../Features/Auth/Login'
import SignupPage from '../Features/Auth/SignUp'
import DashboardPage from '../Features/Dashboard/Dashboard'
import SettingsPage from '../Features/Settings/settings'
import ReportPage from '../Features/Reports/Report'
import StockPage from '../Features/Inventory/Inventory'
import RecordNewSalesPage from '../Features/Sales/NewSales'
import SalesPage from '../Features/Sales/SalesHistory'

export default function App() {
  return (
    <Routes>
      {/* Public: only visible when logged out */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      {/* Private: only visible when logged in */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/inventory" element={<StockPage />} />
          <Route path="/sales/new" element={<RecordNewSalesPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Route> 
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}