import { motion } from "framer-motion";
import TestPackCard from "./TestPackCard";
import type { CategorySectionProps } from "../../types";

export default function CategorySection({ title, description, testPacks }: CategorySectionProps) {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testPacks.map((pack, index) => (
          <TestPackCard 
            key={index} 
            testPack={pack}
          />
        ))}
      </div>
    </motion.div>
  );
}