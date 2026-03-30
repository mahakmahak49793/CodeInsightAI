import { Code } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-9 h-9 bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">CodeInsight</span>
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">AI</span>
            </span>
          </div>

          {!isAuthPage && (
            <div className="flex gap-3">
              {!token ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="px-5 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="px-5 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 text-sm"
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  className="px-5 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Log out
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;