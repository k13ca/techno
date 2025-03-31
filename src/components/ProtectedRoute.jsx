import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { EventsContext } from "../contexts/EventsContext";

export const ProtectedRouteAdmin = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? children : <Navigate to="/" />;
};

export const ProtectedRouteReservation = ({ children }) => {
  const { reservation } = useContext(EventsContext);

  return reservation.seatingname ? children : <Navigate to="/" />;
};
