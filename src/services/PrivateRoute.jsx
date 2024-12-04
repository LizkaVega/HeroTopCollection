import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

  return localStorage.getItem("Authorization") ? children : <Navigate to="/login" />;
};
