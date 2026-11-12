import { NavLink } from 'react-router-dom'
import { BookOpen, MessageCircle } from 'lucide-react'
import { sidebarItems } from './navItem'

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-[#E3E6DC] bg-[#EDF1E8] px-4 py-6 md:flex">
      {/* Logo */}
      <div className="mb-5 flex items-center gap-3 px-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F7A4D] text-white">
          <BookOpen size={22} />
        </div>
        <span className="text-xl text-[#1B4D36]">StockBook</span>
      </div>

      {/* Shop card */}
      <div className="mb-6 rounded-xl bg-white px-4 py-3">
        <div className="text-sm font-medium text-gray-900">Mama Titi Stores</div>
        <div className="text-xs text-gray-500">Surulere, Lagos</div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {sidebarItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
           end={to === '/' || to === '/sales'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-[#E1F0E5] font-medium text-[#1F7A4D]'
                  : 'text-gray-600 hover:bg-white/60'
              }`
            }
          >
            <Icon size={18} strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Help card + footer, pushed to the bottom */}
      <div className="mt-auto pt-6">
        <div className="rounded-xl bg-[#F4E8D6] p-4">
          <MessageCircle size={18} className="mb-2 text-[#B7791F]" />
          <div className="text-xs font-semibold text-gray-900">A little help?</div>
          <p className="mt-1 text-xs leading-snug text-gray-500">
            Your shop, your pace. We&rsquo;re here to help.
          </p>
          <a href="#" className="mt-2 inline-block text-xs text-[#1F7A4D]">
            Contact support
          </a>
        </div>

        <div className="mt-4 px-1 text-[10px] uppercase leading-snug tracking-wide text-gray-400">
          StockBook · Made for your shop
        </div>
      </div>
    </aside>
  )
}