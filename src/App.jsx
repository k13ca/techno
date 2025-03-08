import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Admin from "./pages/admin";
import About from "./pages/about";
import Events from "./pages/events";
import Reservation from "./pages/reservations";
import Section from "./section";
import ReservationForm from "./pages/reservation-form";
import { EventsProvider } from "./contexts/EventsContext";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <EventsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Section />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route
              path="login"
              element={
                <AuthProvider>
                  <Login />
                </AuthProvider>
              }
            ></Route>
            <Route path="events" element={<Events />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="reservation-form" element={<ReservationForm />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
