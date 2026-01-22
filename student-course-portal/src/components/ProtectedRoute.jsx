import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // frontend-only auth check
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
