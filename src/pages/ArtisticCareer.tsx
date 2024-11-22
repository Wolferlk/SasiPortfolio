import React from "react";
import { motion } from "framer-motion";
import { Music,  Youtube, Twitter } from "lucide-react";

const ArtisticCareer = () => {
  const artist = {
    name: "Wolfer",
    bio: "Meet A.G. Sasindu Diluranga, aka Wolfer, a dynamic DJ/Producer, composer, and mixing engineer from Sri Lanka. Born in 2001, his musical journey began at 14, fueled by an unyielding passion.Wolfer specializes in Dance/Electronic, Future Bass, House Music, and EDM. A collaborator with Sri Lanka's top artists, he marked a 2023 milestone composing for the Rider film, directed by Rajith Hiran and produced by Anushka Idunil. The soundtrack showcased Wolfer's electronic finesse, enhancing the cinematic experience.As SD MUSIC RECORDS founder and studio owner, Wolfer mentors emerging artists, blending creativity and experience. His education includes a degree in Electronic Music Composition and advanced mixing/mastering from respected institutes, fostering collaborations with industry giants.In a 2024 breakthrough, Wolfer wowed 3000 in his first live show, forging a connection that left a lasting impact. The performance affirmed Wolfer's status as an electronic music force, entertaining and connecting with fans.Embark on Wolfer's sonic journey, where each beat narrates a tale and every note resounds with passion.",
    profilePic: "https://i.ibb.co/M7CTKHH/Whats-App-Image-2024-10-07-at-9-58-55-PM-removebg-preview.png", // Replace with the actual URL
    streamingLinks: {
      spotify: "https://spotify.com",
      itunes: "https://itunes.com",
      youtube: "https://youtube.com",
    },
    socialLinks: {
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
    },
    works: [
      {
        name: "Nuhuru Akase",
        photo: "https://via.placeholder.com/50",
        date: "2024 Dec",
        description: "Drum & Bass Modern sinhala Song With Deneth Viduranga ",
        link: "https://example.com",
      },
      {
        name: "Bhawa satana",
        photo: "https://via.placeholder.com/50",
        date: "2024 Aug ",
        description: "Drum & Bass Modern sinhala Song With Deneth Viduranga",
        link: "https://example.com",
      },
      {
        name: "Sunfire Festival",
        photo: "https://via.placeholder.com/50",
        date: "2024 march ",
        description: "Downsouth EDM Festival Play as Main Stream Dj",
        link: "https://example.com",
      },
      {
        name: "Rider Movie",
        photo: "https://via.placeholder.com/50",
        date: "2023 Aug ",
        description: "Compose Movie Music As Movie Music Composer",
        link: "https://example.com",
      },
      {
        name: "Shades Of Romance",
        photo: "https://via.placeholder.com/50",
        date: "2023 May ",
        description: "Released EDM Music Album With 12 featuring Artists",
        link: "https://example.com",
      },
      
    ],
  };

  return (
    <div className="py-12 bg-black text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Artist Profile Section */}
        <div className="flex items-center gap-6 mb-12">
          <img
            src={artist.profilePic}
            alt={`${artist.name} profile`}
            className="w-90 h-90 rounded-full shadow-lg  "
          />
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {artist.name}
            </h1>
            <p className="text-lg text-gray-400 mt-2">{artist.bio}</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex items-center gap-4 mb-12">
          {Object.entries(artist.streamingLinks).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:scale-110 transition-transform"
            >
              {platform === "spotify" && <Music className="text-white w-6 h-6" />}
              {platform === "itunes" && <Music className="text-white w-6 h-6" />}
              {platform === "youtube" && <Youtube className="text-white w-6 h-6" />}
            </a>
          ))}
          {Object.entries(artist.socialLinks).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:scale-110 transition-transform"
            >
              {platform === "twitter" && <Twitter className="text-white w-6 h-6" />}
            </a>
          ))}
        </div>

        {/* Works Section */}
        <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-purple-400">
            Works (2025 - 2020)
          </h2>
          <table className="w-full text-left border-collapse text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-gray-400">Name</th>
                <th className="py-2 px-4 text-gray-400">Photo</th>
                <th className="py-2 px-4 text-gray-400">Project Date</th>
                <th className="py-2 px-4 text-gray-400">Description</th>
                <th className="py-2 px-4 text-gray-400">Link</th>
              </tr>
            </thead>
            <tbody>
              {artist.works.map((work, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="py-2 px-4">{work.name}</td>
                  <td className="py-2 px-4">
                    <img
                      src={work.photo}
                      alt={work.name}
                      className="w-10 h-10 rounded-md border border-purple-500"
                    />
                  </td>
                  <td className="py-2 px-4">{work.date}</td>
                  <td className="py-2 px-4">{work.description}</td>
                  <td className="py-2 px-4">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 underline hover:text-pink-500"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtisticCareer;
