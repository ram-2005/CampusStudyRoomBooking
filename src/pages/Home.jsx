import { Link } from "react-router-dom"

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-300">
              Campus Study Room Booking
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find the right space for your next
              <span className="text-indigo-400">
                {" "}study session.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover available study rooms across campus, choose a space
              that fits your group, and submit your booking request in just a
              few steps.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/rooms"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
                Explore Rooms
              </Link>

              <Link
                to="/book"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Book a Room
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Simple & Convenient
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Everything you need to study better
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-500">
              Find, book, and manage your campus study rooms from one simple
              application.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                🔎
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Find a Room
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Search rooms by name or building and quickly find a suitable
                study space.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                📅
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Book Easily
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Submit your student details, preferred room, date, time, and
                group size.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                📋
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Track Bookings
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keep track of the study room reservations you have submitted.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
