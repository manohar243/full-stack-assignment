// src/auth/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  username: null,
  expiration: null,
  login: (token, username, expiration) =>
    set({ token, username, expiration }),
  logout: () => set({ token: null, username: null, expiration: null }),
}));
