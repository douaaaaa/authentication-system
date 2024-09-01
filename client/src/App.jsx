import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Reset from "./pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen pt-10 sm:pt-16 px-10 bg-blue-5 sm:px-28 text-txt-clr font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<Verify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<Reset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
