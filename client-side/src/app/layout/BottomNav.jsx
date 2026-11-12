import { NavLink } from 'react-router-dom'
import { bottomItems } from './navItem'

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t bg-white py-2 md:hidden">
      {bottomItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
        end={to === '/' || to === '/sales'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs ${isActive ? 'text-green-800' : 'text-gray-500'}`
          }
        >
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}