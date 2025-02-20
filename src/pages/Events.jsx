import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, X, ChevronRight, Tag, MapPin } from "lucide-react";

const sampleEvents = [
  {
    id: 1,
    title: "Advanced AI Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    description: "Deep dive into the latest AI technologies and their practical applications in modern software development.",
    type: "Workshop",
    location: "Tech Hub, Building A",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Future of Tech Seminar",
    date: "2025-03-20",
    time: "2:00 PM",
    description: "Join industry leaders for an insightful discussion on emerging technologies and future trends.",
    type: "Seminar",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Tech Innovators Meetup",
    date: "2025-03-25",
    time: "6:00 PM",
    description: "Network with fellow tech enthusiasts and share ideas in a casual, collaborative environment.",
    type: "Networking",
    location: "Innovation Center",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
  }
];

const Events = () => {
  const [events] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="events-page"
    >
      {/* Header Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center py-12 bg-[#212529] rounded-lg mb-12 text-white"
      >
        <Calendar className="w-16 h-16 text-club-teal mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-club-teal mb-4">Upcoming Events</h1>
        <p className="text-club-tiffany text-lg max-w-2xl mx-auto px-4">
          Join us for exciting workshops, seminars, and networking opportunities.
        </p>
      </motion.section>

      {/* Events Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#212529] text-white rounded-lg overflow-hidden shadow-lg border-2 border-club-verdigris/20 hover:border-club-verdigris transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => handleEventClick(event)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-club-raisin text-club-tiffany px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-club-verdigris mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                  <Clock className="w-4 h-4 ml-2" />
                  {event.time}
                </div>
                <h3 className="text-xl font-semibold text-club-raisin mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-club-wenge mb-4">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-club-wenge mb-4">
                  {event.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-club-teal px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition duration-300 flex items-center gap-2"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      {showModal && selectedEvent && (
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
              src={selectedEvent.image} 
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-club-verdigris" />
              <span className="text-club-verdigris font-medium">
                {selectedEvent.type}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-club-raisin mb-4">
              {selectedEvent.title}
            </h2>
            <div className="flex items-center gap-4 text-club-verdigris mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {selectedEvent.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {selectedEvent.time}
              </div>
            </div>
            <div className="flex items-center gap-2 text-club-wenge mb-6">
              <MapPin className="w-5 h-5" />
              {selectedEvent.location}
            </div>
            <p className="text-club-wenge mb-6">
              {selectedEvent.description}
            </p>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-club-verdigris text-white px-6 py-2 rounded-full flex items-center gap-2"
                onClick={() => setShowModal(false)}
              >
                Register Now
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Events;