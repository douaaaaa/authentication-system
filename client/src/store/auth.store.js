import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  clearError: () => set({ error: null }),

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
      return response;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "error signing up",
      });
    }
  },
  verify: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/verify-email",
        { code }
      );
      set({ isLoading: false, user: response.data.user });
      return response;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "error verifying email",
      });
    }
  },
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {}
      );
      set({ isLoading: false, isAuthenticated: false });
      return response;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Logout error",
      });
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      set({
        isLoading: false,
        user: response.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Login error",
        isLoading: false,
      });
    }
  },
  resetPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/reset-password",
        { email }
      );
      set({ isLoading: false });
      return response;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Reset Password erro",
      });
    }
  },
  setNewPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(
        `http://localhost:8000/api/auth/reset-password/${token}`,
        { password }
      );
      set({ isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Set New Password error",
      });
    }
  },
}));
