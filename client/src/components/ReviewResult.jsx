const ReviewResult = ({ review }) => {
  if (!review) return null;

  const getScoreColor = (score) => {
    if (score >= 8) return "text-green-400";
    if (score >= 6) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="mt-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI Code Review
        </h2>
        <div className={`text-2xl font-bold ${getScoreColor(review.score)}`}>
          ⭐ Score: {review.score}/10
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-purple-300 mb-2">🐞 Bugs</h3>
          {review.bugs && review.bugs.length > 0 ? (
            review.bugs.map((bug, i) => (
              <p key={i} className="text-gray-300 mb-1">• {bug}</p>
            ))
          ) : (
            <p className="text-gray-400 italic">No bugs found ✨</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-yellow-300 mb-2">⚡ Optimizations</h3>
          {review.optimizations && review.optimizations.length > 0 ? (
            review.optimizations.map((item, i) => (
              <p key={i} className="text-gray-300 mb-1">• {item}</p>
            ))
          ) : (
            <p className="text-gray-400 italic">No optimizations needed</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-red-300 mb-2">🔐 Security Issues</h3>
          {review.securityIssues && review.securityIssues.length > 0 ? (
            review.securityIssues.map((item, i) => (
              <p key={i} className="text-gray-300 mb-1">• {item}</p>
            ))
          ) : (
            <p className="text-gray-400 italic">No security issues detected</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-blue-300 mb-2">✨ Clean Code Suggestions</h3>
          {review.cleanCodeSuggestions && review.cleanCodeSuggestions.length > 0 ? (
            review.cleanCodeSuggestions.map((item, i) => (
              <p key={i} className="text-gray-300 mb-1">• {item}</p>
            ))
          ) : (
            <p className="text-gray-400 italic">Code looks clean!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewResult;