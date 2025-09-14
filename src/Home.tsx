
import { motion } from "framer-motion";
import { Users, BookOpen, Target, Star } from "lucide-react";
import { type ServiceCardProps, type SectionWrapperProps } from "./types";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={`px-6 py-20 md:py-28 ${className}`}
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </motion.section>
);

const ServiceCard = ({ icon, title, description, buttonText }: ServiceCardProps) => (
  <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col border border-gray-100">
    <div className="bg-gray-900/5 p-3 rounded-lg w-fit mb-6">{icon}</div>
    <h3 className="text-2xl font-medium mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow font-light leading-relaxed">{description}</p>
    <button className="text-left font-normal text-gray-900 hover:underline">
      {buttonText} &rarr;
    </button>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen min-h-[700px] flex items-center px-6 pt-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-light mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Selective School Success
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert tutoring, proven test packs, and realistic exam simulations for Victoria's top selective schools.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
              Start Tutoring
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 border border-gray-200">
              Try a Practice Test
            </button>
          </motion.div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <SectionWrapper id="tutoring" className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Users className="w-7 h-7 text-gray-700" />}
            title="1-on-1 & Group Tutoring"
            description="Personalized guidance covering Verbal Reasoning, Reading, Quantitative Reasoning, Mathematics, and Writing."
            buttonText="Explore Tutoring"
          />
          <ServiceCard
            icon={<BookOpen className="w-7 h-7 text-gray-700" />}
            title="Selective Test Packs"
            description="Timed practice modes with step-by-step solutions and data-driven feedback to pinpoint areas for improvement."
            buttonText="See Test Packs"
          />
          <ServiceCard
            icon={<Target className="w-7 h-7 text-gray-700" />}
            title="Exam Simulations"
            description="Full-length tests that mirror the real exam experience, designed to build confidence and test-taking stamina."
            buttonText="Simulate an Exam"
          />
        </div>
      </SectionWrapper>
      
      {/* Target Schools Section */}
      <SectionWrapper id="simulations" className="bg-gray-50">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-900">
            Targeting Victoria's Top Selective Schools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              'JMSS', 
              'Mac.Robertson', 
              'Melbourne High', 
              'Suzanne Cory', 
              'Nossal High'
            ].map(school => (
                <div key={school} className="bg-white py-8 px-4 rounded-lg border border-gray-200 text-center min-h-[120px] flex items-center justify-center">
                    <p className="font-medium text-base text-gray-900 leading-tight">{school}</p>
                </div>
            ))}
          </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper id="about" className="bg-white">
        <h2 className="text-4xl font-light text-center mb-12 text-gray-900">
          Why Parents and Students Trust ARise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "ARise was the key to my son's acceptance into Melbourne High. The tutors are fantastic.", author: "— Sarah K." },
            { quote: "The practice tests are incredibly accurate. My daughter felt so prepared on exam day.", author: "— David L." },
            { quote: "I finally understood verbal reasoning thanks to the detailed solutions in the test packs.", author: "— Emily, Student" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-4 font-light leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-normal text-right text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Final CTA Section */}
      <SectionWrapper className="bg-gray-50">
          <div className="bg-white rounded-xl text-center p-12 md:p-16 border border-gray-200">
            <h2 className="text-4xl font-light mb-4 text-gray-900">Ready to Begin?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Book a free consultation to create a personalized prep plan for your child.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
                Book Free Consultation
            </button>
          </div>
      </SectionWrapper>
    </div>
  );
}
