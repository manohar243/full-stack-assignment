// src/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export default function ProtectedRoute({ children }) {
  const token = useAuthStore((s) => s.token);
  return token ? children : <Navigate to="/login" replace />;
}
