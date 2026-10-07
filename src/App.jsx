import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import BookRoom from "./pages/BookRoom"
import MyBookings from "./pages/MyBookings"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-50">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/rooms"
            element={<Rooms />}
          />

          <Route
            path="/book"
            element={<BookRoom />}
          />

          <Route
            path="/bookings"
            element={<MyBookings />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App
