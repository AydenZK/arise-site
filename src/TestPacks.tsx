import { useState } from "react";
import { motion } from "framer-motion";
import CategorySection from "./components/testpacks/CategorySection";
import TestPackCard from "./components/testpacks/TestPackCard";
import type { TestPack } from "./types";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export default function TestPacks() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "jmss", name: "JMSS" },
    { id: "sehs", name: "SEHS" },
    { id: "other", name: "Other Selective Schools" }
  ];

  const jmssTestPacks: TestPack[] = [
    {
      title: "JMSS Mathematics Practice Pack 1",
      description: "Comprehensive mathematics questions focusing on problem-solving and analytical thinking",
      questions: 40,
      timeLimit: "90 minutes",
      difficulty: "Advanced",
      category: "jmss"
    },
    {
      title: "JMSS Science Reasoning Pack 1",
      description: "Scientific method, data analysis, and experimental design questions",
      questions: 35,
      timeLimit: "75 minutes", 
      difficulty: "Advanced",
      category: "jmss"
    },
    {
      title: "JMSS English & Writing Skills",
      description: "Reading comprehension, writing tasks, and language conventions",
      questions: 30,
      timeLimit: "60 minutes",
      difficulty: "Advanced", 
      category: "jmss"
    },
    {
      title: "JMSS Full Practice Test",
      description: "Complete simulation of the JMSS entrance examination",
      questions: 105,
      timeLimit: "3 hours",
      difficulty: "Advanced",
      category: "jmss"
    }
  ];

  const sehsTestPacks: TestPack[] = [
    {
      title: "SEHS Verbal Reasoning Pack 1",
      description: "Logic puzzles, word relationships, and verbal problem solving",
      questions: 45,
      timeLimit: "45 minutes",
      difficulty: "Intermediate",
      category: "sehs"
    },
    {
      title: "SEHS Quantitative Reasoning Pack 1", 
      description: "Number patterns, mathematical reasoning, and data interpretation",
      questions: 40,
      timeLimit: "45 minutes",
      difficulty: "Intermediate",
      category: "sehs"
    },
    {
      title: "SEHS Reading Comprehension Pack 1",
      description: "Complex texts with inference and analysis questions",
      questions: 35,
      timeLimit: "40 minutes",
      difficulty: "Intermediate",
      category: "sehs"
    },
    {
      title: "SEHS Mathematics Pack 1",
      description: "Advanced mathematical concepts and problem-solving techniques",
      questions: 38,
      timeLimit: "50 minutes",
      difficulty: "Intermediate",
      category: "sehs"
    },
    {
      title: "SEHS Writing Tasks Pack 1",
      description: "Creative and persuasive writing exercises with detailed feedback",
      questions: 3,
      timeLimit: "60 minutes",
      difficulty: "Intermediate",
      category: "sehs"
    }
  ];

  const otherSchoolPacks: TestPack[] = [
    {
      title: "Mac.Robertson Complete Practice Test",
      description: "Full-length simulation for Mac.Robertson Girls' High School entrance exam",
      questions: 120,
      timeLimit: "3 hours",
      difficulty: "Advanced",
      category: "other"
    },
    {
      title: "Melbourne High Verbal Reasoning",
      description: "Specialized verbal reasoning questions for Melbourne High School",
      questions: 50,
      timeLimit: "45 minutes", 
      difficulty: "Advanced",
      category: "other"
    },
    {
      title: "Suzanne Cory Mathematics Focus",
      description: "Advanced mathematics preparation for Suzanne Cory High School",
      questions: 42,
      timeLimit: "60 minutes",
      difficulty: "Advanced",
      category: "other"
    },
    {
      title: "Nossal High Science Pack",
      description: "Science reasoning and application questions for Nossal High School",
      questions: 36,
      timeLimit: "55 minutes",
      difficulty: "Intermediate",
      category: "other"
    },
    {
      title: "General Selective Schools Prep Pack",
      description: "Comprehensive practice covering all major selective school question types",
      questions: 80,
      timeLimit: "2.5 hours",
      difficulty: "Intermediate",
      category: "other"
    }
  ];

  const allTestPacks = [...jmssTestPacks, ...sehsTestPacks, ...otherSchoolPacks];

  const filteredPacks = selectedCategory === "all" 
    ? allTestPacks 
    : allTestPacks.filter(pack => pack.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-light mb-6 text-gray-900"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Test Packs
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Targeted practice materials for Victoria's top selective schools. Each pack includes detailed solutions and performance analytics.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Test Packs Grid */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {selectedCategory === "all" && (
            <>
              <CategorySection 
                title="JMSS (John Monash Science School)"
                description="Advanced preparation for one of Victoria's premier science and mathematics schools"
                testPacks={jmssTestPacks}
              />
              <CategorySection 
                title="SEHS (Selective Entry High Schools)"
                description="Comprehensive practice for the state-wide selective entry examination"
                testPacks={sehsTestPacks}
              />
              <CategorySection 
                title="Other Selective Schools"
                description="Specialized practice for individual selective schools and general preparation"
                testPacks={otherSchoolPacks}
              />
            </>
          )}
          
          {selectedCategory !== "all" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPacks.map((pack, index) => (
                <TestPackCard key={index} testPack={pack} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}