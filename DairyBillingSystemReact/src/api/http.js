// src/api/http.js
import axios from "axios";
import { useAuthStore } from "../auth/authStore";

export const http = axios.create({
  baseURL: "https://localhost:7026/api", // adjust if backend port differs
});

http.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
