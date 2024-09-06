import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/auth.store.js";
import ResetPassword from "./pages/ResetPassword";
import FloatingItem from "./components/FloatingItem";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  if (!user.isVerified) {
    return <Navigate to={"/verify-email"} replace />;
  }
  return children;
};
const RedirectAuthenticateUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return children;
};
function App() {
  return (
    <BrowserRouter>
      <div className=" relative h-screen pt-10 sm:pt-16 px-10 bg-blue-5 sm:px-28 text-txt-clr font-poppins overflow-hidden">
        <FloatingItem />

        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <RedirectAuthenticateUser>
                <Home />
              </RedirectAuthenticateUser>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticateUser>
                <SignUp />
              </RedirectAuthenticateUser>
            }
          />
          <Route
            path="/verify-email"
            element={
              <RedirectAuthenticateUser>
                <Verify />
              </RedirectAuthenticateUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticateUser>
                <Login />
              </RedirectAuthenticateUser>
            }
          />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
