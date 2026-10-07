function MyBookings() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
          📋
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          My Bookings
        </h2>

        <p className="mt-2 text-slate-500">
          Your submitted bookings will appear here.
        </p>

      </div>
    </main>
  )
}

export default MyBookings
