import { motion } from "framer-motion";
import { Mail, CheckCircle, User, ChevronRight } from "lucide-react";

const JoinPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="join-page"
    >
      <section className="max-w-2xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <Mail className="w-16 h-16 text-club-teal mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-club-teal mb-4">Join Our Club</h1>
          <p className="text-white text-lg">
            Become part of our innovative community and unlock exciting opportunities
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[#212529] text-white p-6 rounded-lg shadow-lg border border-club/10">
            <h2 className="text-2xl font-bold text-white mb-4">Membership Benefits</h2>
            <ul className="space-y-4">
              {['Exclusive Workshops', 'Project Funding', 'Mentorship', 'Networking Events'].map((benefit, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-club-teal" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.form 
            className="space-y-6 bg-[#212529] p-6 rounded-lg shadow-lg border border-club/10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-club-teal"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-club-slate/30 rounded focus:outline-none focus:ring-2 focus:ring-club-teal"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-club-teal text-club-navy py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              Submit Application
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </motion.div>
  );
};
export default JoinPage;