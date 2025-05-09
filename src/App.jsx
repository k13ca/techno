import "./index.css";
import "./styles/main.css";
import "./styles/header.css";
import "./styles/eventsloop.css";
import "./styles/reservation.css";
import "./styles/reservationform.css";
import "./styles/modal.css";
import "./styles/events.css";
import "./styles/about.css";
import "./styles/admin.css";
import "./styles/login.css";
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
import {
  ProtectedRouteAdmin,
  ProtectedRouteReservation,
} from "./components/ProtectedRoute";

function App() {
  return (
    <EventsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Section />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />

            <Route path="events" element={<Events />} />
            <Route path="reservation" element={<Reservation />} />

            <Route
              path="reservation-form"
              element={
                <ProtectedRouteReservation>
                  <ReservationForm />
                </ProtectedRouteReservation>
              }
            />

            <Route
              path="login"
              element={
                <AuthProvider>
                  <Login />
                </AuthProvider>
              }
            ></Route>
            <Route
              path="admin"
              element={
                <AuthProvider>
                  <ProtectedRouteAdmin>
                    <Admin />
                  </ProtectedRouteAdmin>
                </AuthProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
