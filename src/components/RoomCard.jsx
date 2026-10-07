function RoomCard({ room }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
        <span className="text-sm font-medium text-slate-500">
          Room #{room.id}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            room.available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {room.available ? "Available" : "Occupied"}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-900">
          {room.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {room.building} · {room.location}
        </p>

        {/* Capacity */}
        <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
          <span>👥</span>

          <span>
            Capacity: {room.capacity} students
          </span>
        </div>

        {/* Facilities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {room.facilities.map((facility) => (
            <span
              key={facility}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {facility}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default RoomCard
