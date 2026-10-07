import { rooms } from "../data/rooms"
import RoomCard from "../components/RoomCard"

function Rooms() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Study Spaces
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Available Study Rooms
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Explore the study spaces available across campus and choose one
            that fits your group's needs.
          </p>

        </div>

        {/* Room Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>

      </div>
    </main>
  )
}

export default Rooms
