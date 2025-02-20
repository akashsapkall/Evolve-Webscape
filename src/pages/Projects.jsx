import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code2, 
  ChevronRight, 
  X, 
  CheckCircle, 
  Clock, 
  GitBranch,
  ExternalLink
} from "lucide-react";

const sampleProjects = [
  {
    id: 1,
    title: "AI-Powered Study Assistant",
    description: "An intelligent study companion that helps students optimize their learning process using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    status: "In Progress",
    github: "https://github.com/tech-club/study-assistant",
    demo: "https://study-assistant.demo.com"
  },
  {
    id: 2,
    title: "Smart Campus Navigator",
    description: "A mobile application that helps students and faculty navigate the campus efficiently with real-time updates and indoor mapping.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    status: "Completed",
    github: "https://github.com/tech-club/campus-nav",
    demo: "https://campus-nav.demo.com"
  },
  {
    id: 3,
    title: "Virtual Lab Platform",
    description: "A virtual reality platform for conducting science experiments safely and interactively from anywhere.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    technologies: ["Unity", "C#", "WebXR", "Three.js"],
    status: "In Development",
    github: "https://github.com/tech-club/virtual-lab",
    demo: "https://virtual-lab.demo.com"
  }
];

const Projects = () => {
  const [projects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >
      {/* Header Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center py-12 bg-[#212529] text-white rounded-lg mb-12"
      >
        <Code2 className="w-16 h-16 text-club-teal mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-club-teal mb-4">Our Projects</h1>
        <p className="text-club-tiffany text-lg max-w-2xl mx-auto px-4">
          Discover innovative solutions created by our talented team members.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#212529] text-white rounded-lg overflow-hidden shadow-lg border-2 border-club-verdigris/20 hover:border-club-verdigris transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
                  project.status === "Completed" 
                    ? "bg-white text-green-800"
                    : "bg-white text-red-800"
                }`}>
                  {project.status === "Completed" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-raisin mb-4">
                  {project.title}
                </h3>
                <p className="text-club-wenge mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-white text-[#212529] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <Code2 className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-club-verdigris text-club-teal px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition duration-300 flex items-center gap-2"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-xl w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-club-wenge hover:text-club-raisin"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-club-raisin">
                {selectedProject.title}
              </h2>
              <span className={`px-3 py-1 rounded-full flex items-center gap-2 ${
                selectedProject.status === "Completed" 
                  ? "bg-club-tiffany text-club-raisin"
                  : "bg-club-verdigris text-white"
              }`}>
                {selectedProject.status === "Completed" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
                {selectedProject.status}
              </span>
            </div>
            <p className="text-club-wenge mb-6">
              {selectedProject.description}
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-club-raisin mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-club-mint text-club-raisin px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-club-verdigris hover:text-club-raisin transition-colors"
              >
                <GitBranch className="w-5 h-5" />
                View Source
              </a>
              <motion.a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-club-verdigris text-white px-6 py-2 rounded-full flex items-center gap-2"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;