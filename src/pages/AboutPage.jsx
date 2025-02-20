import { motion } from "framer-motion";
import { Users, Trophy, Globe, BookOpen } from "lucide-react";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <section className="max-w-4xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <Users className="w-16 h-16 text-club-teal mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-club-teal mb-4">About Us</h1>
          <p className="text-club-lavender text-lg">
            Pioneering technological innovation since 2015
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="p-6 bg-[#212529] rounded-lg shadow-lg border border-club-charcoal/10"
              whileHover={{ y: -5 }}
            >
              <Globe className="w-8 h-8 text-club-teal mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-white">
                Empowering students to become technology leaders through hands-on learning
                and collaborative innovation.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-[#212529] rounded-lg shadow-lg border border-club-charcoal/10"
              whileHover={{ y: -5 }}
            >
              <Trophy className="w-8 h-8 text-club-teal mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-club-lavender space-y-2">
                <li>100+ Successful Projects</li>
                <li>50+ Industry Partnerships</li>
                <li>10 National Awards</li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="p-6 bg-[#212529] rounded-lg shadow-lg border border-club-charcoal/10"
            whileHover={{ y: -5 }}
          >
            <BookOpen className="w-8 h-8 text-club-teal mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Our History</h3>
            <p className="text-white mb-4">
              Founded in 2015 by a group of passionate engineering students, we've grown
              into one of the most active tech communities in the region.
            </p>
            <div className="space-y-4">
              {['2015 - Club Founded', '2018 - First National Award', '2020 - AI Lab Established', '2023 - 1000+ Members'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-club-lavender">
                  <div className="w-2 h-2 bg-club-teal rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
export default AboutPage;