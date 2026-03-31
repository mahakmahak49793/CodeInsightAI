import { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Code,
  ChevronRight,
  Star,
  Sparkles,
  Cpu,
  GitBranch,
  Globe,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onGetStarted }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const elements = ["hero", "features", "stats", "testimonials"];
    elements.forEach((element, index) => {
      setTimeout(() => {
        setIsVisible((prev) => ({ ...prev, [element]: true }));
      }, index * 150);
    });
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "TechCorp",
      content:
        "CodeInsightAI has revolutionized our code review process. We've seen a 40% reduction in bugs and significantly improved code quality across all our projects.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Lead",
      company: "StartupX",
      content:
        "The AI insights are incredibly accurate. It catches issues that even senior developers might miss. Indispensable tool for our development workflow.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "CTO",
      company: "InnovateLabs",
      content:
        "Best investment we've made in developer tooling. The security insights alone have prevented multiple potential vulnerabilities in production.",
      rating: 5,
      avatar: "EW",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Detect vulnerabilities and security risks before they reach production.",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Identify bottlenecks and inefficient code patterns in real-time.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Enforce coding standards and maintain consistent code quality.",
      gradient: "from-rose-600 to-orange-600",
    },
    {
      icon: GitBranch,
      title: "Git Integration",
      description: "Seamless PR reviews with inline comments and suggestions.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Support for JavaScript, TypeScript, Python, and more.",
      gradient: "from-rose-400 to-orange-400",
    },
    {
      icon: Activity,
      title: "Smart Insights",
      description: "AI-powered suggestions to improve your code quality.",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Navigation - Glassmorphic */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-9 h-9 bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">CodeInsight</span>
                <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  AI
                </span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Features", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - From First Code */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div
          className={`max-w-7xl mx-auto relative transition-all duration-1000 transform ${isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-sm text-gray-300 font-medium">
                Your AI companion for cleaner code
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.2]">
              <span className="text-white">AI-Powered Code Reviews</span>
              <br />
              <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                That Actually Understand
              </span>
            </h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant, intelligent feedback on your code. Catch bugs,
              optimize performance, and ensure security best practices before
              they reach production.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => navigate("/register")}
                className="px-8 py-3.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - From Second Code */}
      <section id="features" className="py-2 px-6 relative">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible.features ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-gray-300">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Everything You Need for <br />
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Better Code
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive code analysis that helps you write cleaner, safer
              code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - From Second Code */}
      <section className="py-20 px-6 relative">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-500 transform ${isVisible.stats ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "98%", label: "Accuracy Rate" },
                { value: "Instant", label: "Real-time Feedback" },
                { value: "Multiple", label: "Languages Supported" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <div className="w-12 h-px bg-gradient-to-r from-rose-500 to-orange-500 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - From First Code */}
      <section id="testimonials" className="py-12 px-6 relative">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-700 transform ${isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-gray-300">Developer love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Loved by Developers <br />
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of developers who trust CodeInsightAI for their
              code reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - From Second Code */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 p-12 text-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Start Writing Better Code
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
                Start using CodeInsightAI to write cleaner, more efficient code
                today.
              </p>
              <button
                onClick={() => navigate("/register")}
                className="px-8 py-3.5 bg-white text-rose-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - From Second Code */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  CodeInsight<span className="text-rose-400">AI</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                AI-powered code reviews for better development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 CodeInsightAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
