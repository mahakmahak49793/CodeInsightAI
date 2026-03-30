import { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import ReviewResult from "../components/ReviewResult";
import LanguageSelector from "../components/LanguageSelector";
import Header from "../components/Header";
import { Code, Sparkles, Loader2, Play } from "lucide-react";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in by checking token
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (token) {
      setIsAuthenticated(true);
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        // Set a default user from token or email
        setUser({ name: "Developer", email: "" });
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleReview = async () => {
    if (!isAuthenticated) {
      return;
    }
    
    if (!code.trim()) {
      return;
    }

    try {
      setLoading(true);
      const { reviewCode } = await import("../services/APi");
      const data = await reviewCode(language, code);
      setReview(data.review);
    } catch (error) {
      alert("Error reviewing code");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0F]">
        <Header />
        <div className="flex items-center justify-center min-h-screen pt-32 pb-20 px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Access Denied</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Please log in to access the code review dashboard
            </p>
            <button
              onClick={() => window.location.href = "/login"}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-y-auto">
      <Header />
      
      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section with Review Button */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-rose-400" />
                <h1 className="text-2xl font-bold text-white">
                  Welcome back, <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    {user?.name || "Developer"}
                  </span>
                </h1>
              </div>
              <p className="text-gray-400">
                Paste your code below and let AI analyze it for improvements
              </p>
            </div>
            
            {/* Review Button - Moved to Top */}
            <button
              onClick={handleReview}
              disabled={loading || !code.trim()}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Review Code
                </>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Code Input */}
            <div className="space-y-4">
              <div className="bg-[#0F0F14] rounded-xl border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="ml-2 text-sm text-gray-400">Code Editor</span>
                  </div>
                  <LanguageSelector language={language} setLanguage={setLanguage} />
                </div>
                <div className="p-4">
                  <CodeEditor code={code} setCode={setCode} language={language} />
                </div>
              </div>
            </div>

            {/* Right Column - Review Results */}
            <div className="bg-[#0F0F14] rounded-xl border border-white/10 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Review Results
                </h3>
              </div>
              <div className="flex-1 p-4">
                <ReviewResult review={review} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;