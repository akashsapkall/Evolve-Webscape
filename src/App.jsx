import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Home, Calendar, Rocket, Mail, Info } from "lucide-react";
import HomePage from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import JoinPage from "./pages/JoinPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen bg-[#5f6061]">
        {/* Navigation Bar */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-black text-club-mint p-4 shadow-lg"
        >
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="logo text-xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-6 h-6 text-club-teal" />
              <Link to="/"><span className="text-club-teal">Tech Innovators Club</span></Link>
            </motion.div>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { path: "/", name: "Home", icon: Home },
                { path: "/events", name: "Events", icon: Calendar },
                { path: "/projects", name: "Projects", icon: Rocket },
                // { path: "/join", name: "Join", icon: Mail },
                // { path: "/about", name: "About", icon: Info }
              ].map((link) => (
                <motion.li key={link.path} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={link.path}
                    className="text-club-mint hover:text-club-teal transition-colors duration-300 flex items-center gap-2 text-sm md:text-base"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto flex-grow p-4">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <motion.footer 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-black text-club-mint p-4 text-center"
        >
          <p className="text-club-teal">
            &copy; {new Date().getFullYear()} Tech Innovators Club. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </BrowserRouter>
  );
}

export default App