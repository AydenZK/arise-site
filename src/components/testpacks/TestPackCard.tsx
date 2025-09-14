import { motion } from "framer-motion";
import { Download, FileText, Clock, Users } from "lucide-react";
import type { TestPackCardProps } from "../../types";

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
} as const;

export default function TestPackCard({ testPack }: TestPackCardProps) {
  const handleDownload = () => {
    // Placeholder for PDF download functionality
    // Replace with real implementation later
    alert(`Download functionality for "${testPack.title}" will be implemented soon!`);
  };

  const handlePreview = () => {
    // Placeholder for PDF preview functionality
    alert(`Preview functionality for "${testPack.title}" will be implemented soon!`);
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <FileText className="w-6 h-6 text-gray-600" />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficultyColors[testPack.difficulty]
          }`}
        >
          {testPack.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-medium mb-3 text-gray-900 leading-tight">{testPack.title}</h3>

      <p className="text-gray-600 mb-4 font-light leading-relaxed">{testPack.description}</p>

      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{testPack.questions} questions</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{testPack.timeLimit}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handlePreview}
          className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors duration-300"
        >
          Preview
        </button>
        <button
          onClick={handleDownload}
          className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </motion.div>
  );
}