import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function FeatModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl h-[80vh] sm:h-[90vh] overflow-y-auto p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-lg"
          onClick={onClose}
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
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
