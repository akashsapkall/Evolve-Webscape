import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Trophy,
  ChevronRight,
  Rocket,
  Brain,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero relative py-20 bg-[#212529] text-white rounded-lg overflow-hidden">
        <motion.div
          className="container mx-auto text-center relative z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Rocket className="w-16 h-16 text-club-teal" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-club-teal">
            Welcome to Tech Innovators Club
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-club-tiffany">
            Empowering the next generation of innovators through technology,
            collaboration, and creativity.
          </p>
          <Link to="/join">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-club-tiffany text-club-raisin px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg flex items-center gap-2 mx-auto bg-black"
            >
              Join Us
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div
            {...fadeIn}
            className="feature-card p-8 rounded-lg shadow-lg border-2 border-club-verdigris/20 hover:border-club-verdigris transition-colors duration-300 bg-[#212529]  text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8" />
              <h2 className="font-semibold text-2xl">Workshops</h2>
            </div>
            <p>
              Hands-on learning experiences led by industry experts, covering
              cutting-edge technologies and practical skills.
            </p>
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="feature-card p-8 rounded-lg bg-[#212529] shadow-lg border-2 border-club-verdigris/20 hover:border-club-verdigris transition-colors duration-300  text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8" />
              <h2 className="font-semibold text-2xl">Networking</h2>
            </div>
            <p>
              Connect with like-minded individuals, industry professionals, and
              potential mentors in the tech community.
            </p>
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="feature-card p-8 rounded-lg bg-[#212529] shadow-lg border-2 border-club-verdigris/20 hover:border-club-verdigris transition-colors duration-300  text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8" />
              <h2 className="font-semibold text-2xl ">Innovation</h2>
            </div>
            <p>
              Participate in exciting hackathons and innovation challenges to
              solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="cta py-16 bg-gradient-club-alt rounded-lg my-8"
      >
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <Lightbulb className="w-12 h-12 text-club-raisin" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-club-raisin">
            Ready to Shape the Future?
          </h2>
          <p className="mb-8 text-xl max-w-2xl mx-auto text-club-wenge">
            Join our community of innovators and be part of the next big
            technological breakthrough.
          </p>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-club-mint px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              Learn More
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
