import React from 'react';
import { motion } from 'framer-motion';
import { Music, Youtube } from 'lucide-react';

const ArtisticCareer = () => {
  const songs = [
    {
      title: 'Song Title 1',
      genre: 'Pop',
      year: '2023',
      youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    },
    // Add your actual songs here
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Artistic Career
        </h1>

        <div className="grid gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Music className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{song.title}</h3>
                  <p className="text-purple-400">{song.genre}</p>
                  <p className="text-sm text-gray-400">{song.year}</p>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={song.youtubeUrl}
                  title={song.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ArtisticCareer;