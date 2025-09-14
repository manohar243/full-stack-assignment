import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";

export default function NavBar() {
  const navigate = useNavigate();
  const { logout, token } = useAuthStore();

  if (!token) return null; // Hide navbar if not logged in

  return (
    <nav className="navbar">
      <h1>Dairy Billing System</h1>
      <div className="nav-links">
        <button onClick={() => navigate("/milk-entries")}>
          Make a Bill Entry
        </button>
        <button onClick={() => navigate("/total-sale")}>Total Sale</button>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
