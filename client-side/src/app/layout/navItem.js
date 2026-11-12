import {
  LayoutDashboard, ShoppingCart, Package, Receipt,
  BarChart3, BookUser, Settings, Home,
} from 'lucide-react'


export const sidebarItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/sales/new', label: 'Record Sale', icon: ShoppingCart },
  { to: '/inventory', label: 'Stock', icon: Package },
  { to: '/sales', label: 'Sales', icon: Receipt },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
  { to: '/credit', label: 'Credit Book', icon: BookUser },
  { to: '/settings', label: 'Settings', icon: Settings },
]


export const bottomItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/inventory', label: 'Stock', icon: Package },
  { to: '/sales/new', label: 'Sell', icon: ShoppingCart },
  { to: '/sales', label: 'Sales', icon: Receipt },
  { to: '/credit', label: 'Credit', icon: BookUser },
]