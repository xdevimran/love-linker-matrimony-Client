/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-full bg-blue-600"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" replace />;
};

export default PrivetRoute;
