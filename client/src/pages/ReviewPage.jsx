import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ReviewResult from "../components/ReviewResult";
import { reviewCode } from "../services/APi";
import LanguageSelector from "../components/LanguageSelector";

const ReviewPage = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    try {
      setLoading(true);
      const data = await reviewCode(language, code);
      setReview(data.review);
    } catch (error) {
      alert("Error reviewing code");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            CodeInsightAI
          </h1>
          <p className="text-gray-300 text-lg">
            Advanced AI-powered code review for cleaner, safer, and more efficient code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Code Input */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-300">Code Editor</span>
                </div>
                <LanguageSelector language={language} setLanguage={setLanguage} />
              </div>
              <CodeEditor code={code} setCode={setCode} language={language} />
            </div>

            <button
              onClick={handleReview}
              disabled={loading || !code.trim()}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Reviewing...
                  </>
                ) : (
                  "Review Code"
                )}
              </span>
            </button>
          </div>

          {/* Right Column - Review Results */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
            <ReviewResult review={review} />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl mb-2">🐞</div>
            <h3 className="font-semibold text-white mb-1">Bug Detection</h3>
            <p className="text-sm text-gray-300">Identify potential bugs and logical errors</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Performance Optimization</h3>
            <p className="text-sm text-gray-300">Improve code efficiency and speed</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl mb-2">🔐</div>
            <h3 className="font-semibold text-white mb-1">Security Analysis</h3>
            <p className="text-sm text-gray-300">Discover vulnerabilities and best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;