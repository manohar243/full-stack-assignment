import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { http } from "../api/http";
import { useAuthStore } from "../auth/authStore";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginStore = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await http.post("/Auth/login", { username, password });
      loginStore.login(res.data.token, res.data.username, res.data.expiration);
      navigate("/milk-entries");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
