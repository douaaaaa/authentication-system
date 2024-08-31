import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          email,
          name,
          password,
        }
      );
      set({
        isLoading: false,
        user: response.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "error signing up",
      });
    }
  },
}));
