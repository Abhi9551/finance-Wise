export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm">
          <span className="text-lg font-bold text-white">F</span>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 opacity-80"></div>
      </div>
      <span className="text-xl font-bold text-gray-900">FinanceWise</span>
    </div>
  )
}
