import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./auth/authStore";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./auth/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MilkEntries from "./pages/MilkEntries";
import TotalSale from "./pages/TotalSale";

export default function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/milk-entries"
          element={
            <ProtectedRoute>
              <MilkEntries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/total-sale"
          element={
            <ProtectedRoute>
              <TotalSale />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            token ? <Navigate to="/milk-entries" /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
