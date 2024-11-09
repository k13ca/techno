import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Admin from "./pages/admin";
import About from "./pages/about";
import Events from "./pages/events";
import Reservation from "./pages/reservations";
import Section from "./section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Section />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="admin" element={<Admin />} />
          <Route path="events" element={<Events />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
