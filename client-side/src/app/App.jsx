import { Routes, Route, Navigate } from 'react-router-dom'


import ProtectedRoute from '../Features/Auth/ProtectedRoute'
import PublicRoute from '../Features/Auth/PublicRoute'

import LoginPage from '../Features/Auth/Login'
import SignupPage from '../Features/Auth/SignUp'
// import DashboardPage from '../features/dashboard/DashboardPage'
// import NewSalePage from '../features/sales/NewSalePage'
// import SalesHistoryPage from '../features/sales/SalesHistoryPage'
// import InventoryPage from '../features/inventory/InventoryPage'
// import CustomersPage from '../features/customers/CustomersPage'
// import DebtsPage from '../features/customers/DebtsPage'
// import ReportsPage from '../features/reports/ReportsPage'
// import SettingsPage from '../features/settings/SettingsPage'

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
        {/* <Route path="/" element={<DashboardPage />} />
        <Route path="/sales/new" element={<NewSalePage />} />
        <Route path="/sales" element={<SalesHistoryPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/debts" element={<DebtsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}