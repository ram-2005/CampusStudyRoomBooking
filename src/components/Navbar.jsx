import { NavLink } from "react-router-dom"

function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Rooms",
      path: "/rooms",
    },
    {
      name: "Book Room",
      path: "/book",
    },
    {
      name: "My Bookings",
      path: "/bookings",
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
            CS
          </div>

          <div>
            <h1 className="text-base font-bold text-slate-900">
              CampusSpace
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Study Room Booking
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
