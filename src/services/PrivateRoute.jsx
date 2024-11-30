import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/login" />;
};
