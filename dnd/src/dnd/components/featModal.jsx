import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";

// 🎨 your color pool (expand to 100 if you want)
const COLORS = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-yellow-100",
  "bg-cyan-100",
  "bg-rose-100",
  "bg-emerald-100",
  "bg-indigo-100",
];

export default function FeatModal({ isOpen, onClose, title, content }) {
  const [color, setColor] = useState();

  useEffect(() => {
    if (isOpen) {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      setColor(randomColor);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div
        className={`${color} rounded-xl shadow-xl w-full max-w-3xl h-[80vh] sm:h-[90vh] overflow-y-auto p-6 relative transition-colors duration-500`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-lg"
          onClick={onClose}
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          {title}
        </h2>

        {/* Content */}
        <div className="prose prose-blue max-w-full text-black">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}