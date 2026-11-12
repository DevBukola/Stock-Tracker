import { Bell } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#D1CCC7] bg-[#F5F4EF] px-4 py-3">
      <div>
        <div className="text-sm font-semibold">Mama Titi Stores</div>
        <div className="text-xs text-gray-500">Monday, 9 November 2026</div>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800 sm:inline">
          All changes saved
        </span>
        <Bell size={18} />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-xs">TA</div>
      </div>
    </header>
  )
}