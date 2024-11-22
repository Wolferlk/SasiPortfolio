import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_r2gsrcx', // Your service ID
        'template_in59m4f', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sasindu.diluranga@gmail.com', // The recipient email
        },
        'SUjXrcYq2rvW8bQHZ' 
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };
  
  return (

// {/* <div className="relative min-h-screen">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-25 opacity-10"
//       >
//         <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}






    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-300">+94 77 823 1121</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-300">sasindu.diluranga@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-300">24a,Pokuna Rd,Keraminiya</p>
                  <p className="text-gray-300">Ambalangoda , Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {status && (
              <p className={`text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
    // </div>
  );
};

export default Contact;