import {
  LayoutGrid, ShoppingBasket, Package, FileText,
  BarChart3, NotebookPen, Settings, Home, ShoppingCart, Receipt,
} from 'lucide-react'

export const sidebarItems = [
  { to: '/', label: 'Dashboard', icon: LayoutGrid },
  { to: '/sales/new', label: 'Record Sale', icon: ShoppingBasket },
  { to: '/inventory', label: 'Stock', icon: Package },
  { to: '/sales', label: 'Sales', icon: FileText },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
  { to: '/credit', label: 'Credit Book', icon: NotebookPen },
  { to: '/settings', label: 'Settings', icon: Settings },
]



export const bottomItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/inventory', label: 'Stock', icon: Package },
  { to: '/sales/new', label: 'Sell', icon: ShoppingCart },
  { to: '/sales', label: 'Sales', icon: Receipt },
//   { to: '/credit', label: 'Credit', icon: BookUser },
]