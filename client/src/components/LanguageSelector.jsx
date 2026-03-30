import { ChevronDown, Code2 } from "lucide-react";

const LanguageSelector = ({ language, setLanguage }) => {
  const languages = [
    { value: "javascript", label: "JavaScript", icon: "🟨" },
    { value: "typescript", label: "TypeScript", icon: "🔷" },
    { value: "python", label: "Python", icon: "🐍" },
    { value: "java", label: "Java", icon: "☕" },
    { value: "cpp", label: "C++", icon: "⚡" },
    { value: "c", label: "C", icon: "🔵" },
    { value: "csharp", label: "C#", icon: "💜" },
    { value: "go", label: "Go", icon: "🐹" },
    { value: "rust", label: "Rust", icon: "🦀" },
    { value: "php", label: "PHP", icon: "🐘" },
    { value: "ruby", label: "Ruby", icon: "💎" },
    { value: "swift", label: "Swift", icon: "🍎" },
    { value: "kotlin", label: "Kotlin", icon: "🟣" },
    { value: "sql", label: "SQL", icon: "🗃️" },
    { value: "bash", label: "Bash", icon: "🖥️" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
        <Code2 className="w-4 h-4 text-purple-400" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer appearance-none pr-6"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value} className="bg-gray-800 text-white">
              {lang.icon} {lang.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
      </div>
    </div>
  );
};

export default LanguageSelector;