import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ReviewPage from "./pages/ReviewPage";
import LandingPage from "./pages/LandingPage";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/" element={<LandingPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
    </Routes>
  );
}

export default App;