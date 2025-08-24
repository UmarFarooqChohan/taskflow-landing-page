import Feature from './components/Feature';
import Review from './components/Review';
import Pricing from './components/Pricing';

import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Star, Facebook, Twitter, Instagram } from "lucide-react";

export default function TaskFlowLanding() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Top Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center p-6">
        <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
        <p className="text-xl mb-6 max-w-xl">
          Organize your tasks, boost your productivity, and flow through your day.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Feature icon={<CheckCircle size={40} className="text-indigo-500" />} title="Easy Task Management" desc="Create, edit, and organize your tasks effortlessly." />
        <Feature icon={<Zap size={40} className="text-indigo-500" />} title="Fast & Responsive" desc="Smooth experience on any device, anywhere." />
        <Feature icon={<Users size={40} className="text-indigo-500" />} title="Team Collaboration" desc="Work together with your team in real-time." />
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Review name="Alex P." text="TaskFlow has completely changed how I manage my day!" />
        <Review name="Jamie L." text="The best productivity app I've ever used." />
        <Review name="Taylor R." text="Simple, elegant, and incredibly powerful." />
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <Pricing title="Free" price="$0" features={["Basic task management", "Sync across devices"]} />
        <Pricing title="Pro" price="$9/mo" features={["All Free features", "Priority support", "Advanced analytics"]} />
        <Pricing title="Team" price="$29/mo" features={["All Pro features", "Team workspaces", "Admin tools"]} />
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 TaskFlow. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Facebook className="hover:text-white cursor-pointer" />
          <Twitter className="hover:text-white cursor-pointer" />
          <Instagram className="hover:text-white cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}


