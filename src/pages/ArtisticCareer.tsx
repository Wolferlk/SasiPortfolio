import React from "react";
import { motion } from "framer-motion";
import { Music, Youtube, Twitter, Facebook } from "lucide-react";

const ArtisticCareer = () => {
  const artist = {
    name: "Wolfer",
    bio: "Meet A.G. Sasindu Diluranga, aka Wolfer, a dynamic DJ/Producer, composer, and mixing engineer from Sri Lanka. Born in 2001, his musical journey began at 14, fueled by an unyielding passion.Wolfer specializes in Dance/Electronic, Future Bass, House Music, and EDM. A collaborator with Sri Lanka's top artists, he marked a 2023 milestone composing for the Rider film, directed by Rajith Hiran and produced by Anushka Idunil. The soundtrack showcased Wolfer's electronic finesse, enhancing the cinematic experience.As SD MUSIC RECORDS founder and studio owner, Wolfer mentors emerging artists, blending creativity and experience. His education includes a degree in Electronic Music Composition and advanced mixing/mastering from respected institutes, fostering collaborations with industry giants.In a 2024 breakthrough, Wolfer wowed 3000 in his first live show, forging a connection that left a lasting impact. The performance affirmed Wolfer's status as an electronic music force, entertaining and connecting with fans.Embark on Wolfer's sonic journey, where each beat narrates a tale and every note resounds with passion.",
    profilePic: "https://i.ibb.co/M7CTKHH/Whats-App-Image-2024-10-07-at-9-58-55-PM-removebg-preview.png",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/1BDgRUInxjvI7BrgASGJUd?si=skX8kndJSf6znX4zNt3jOQ",
      itunes: "https://music.apple.com/lk/artist/wolfer/1556748726",
      youtube: "https://www.youtube.com/c/SASINDUDILURANGA",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/wolfer_sl/",
      facebook: "https://www.facebook.com/SASINDU.A.DILURANGA",
      twitter: "https://twitter.com/wolfer_sl",  // Add twitter link
    },
    works: [
      {
        name: "Nuhuru Akase",
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/0d/c5/340dc5ac-6697-afca-e2aa-a34142720147/198999560060.jpg/316x316bb.webp",
        date: "2024 Dec",
        description: "Drum & Bass Modern Sinhala Song With Deneth Viduranga",
        link: "https://fanlink.tv/nuhuruakase",
      },
      {
        name: "Bhawa Satana",
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/7d/c1/b57dc1b2-ea79-d9a4-dd48-926f3ac1f238/198595457900.jpg/296x296bb.webp",
        date: "2024 Aug",
        description: "Drum & Bass Modern Sinhala Song With Deneth Viduranga",
        link: "https://sdmusicrecords.fanlink.tv/BHAWA-SATANA",
      },
      {
        name: "Sunfire Festival",
        photo: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/419585167_122106517808179942_45011245037889558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GlnOvJvExOQQ7kNvgH5cU6h&_nc_oc=AdhZbIZNfQjsv8FiOwMIV_cggbBswmhsTivFroVdE4Mspno5Nmft5r7cuciT3if0dZ--8ZsgL-wEondmG8C05v3w&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AZJz55CcfV8sJU4WsgoHdKk&oh=00_AYCCyv6BHjqRjMHAPsAtqRqieLqRao730oDdWYmg1DYkYw&oe=6784079D",
        date: "2024 March",
        description: "Downsouth EDM Festival Played as Mainstream DJ",
        link: "https://www.facebook.com/sunfirehikkaduwa",
      },
      {
        name: "Rider Movie",
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1e/1e/a0/1e1ea094-6c13-aa02-a010-664867eccc0c/5063440397678_cover.jpg/296x296bb.webp",
        date: "2023 Aug",
        description: "Composed Movie Music as Movie Music Composer",
        link: "https://www.imdb.com/title/tt30451025/",
      },
      {
        name: "Shades Of Romance",
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9e/ff/0b/9eff0b63-2ac1-34dc-d58d-fa3ecc0534d1/5063341839932_cover.jpg/296x296bb.webp",
        date: "2023 May",
        description: "Released EDM Music Album with 12 Featuring Artists",
        link: "https://open.spotify.com/playlist/3aPnzUOqrJloIVBLjkSvOH?si=pqXgm4DVQVydygwJa1JrPQ",
      },
      {
        name: "Premiye Numba Song",
        photo: "https://cdn-images.dzcdn.net/images/cover/8594b4b829e19fce0212c8330a593da9/1900x1900-000000-80-0-0.jpg",
        date: "2024 January",
        description: "Sri Lankan Modern Classic Sinhala Song",
        link: "https://sd-music-records-2024.fanlink.tv/premiyenumba",
      },
      {
        name: "Liyana Song",
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/4d/f2/c14df204-aec2-d446-3b67-e64277446085/artwork.jpg/296x296bb.webp",
        date: "2021 April",
        description: "Pop EDM Rap Sri Lankan Sinhala Song",
        link: "https://www.youtube.com/watch?v=QnbTYCVQQcI",
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-25 opacity-10"
      >
        <source src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 text-white">
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
              className="w-80 h-80 rounded-full shadow-lg"
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
                {platform === "facebook" && <Facebook className="text-white w-6 h-6" />} {/* Facebook Icon */}
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

          {/* Spotify Embed */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Listen on Spotify</h2>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/1BDgRUInxjvI7BrgASGJUd?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          {/* YouTube Embed */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Watch on YouTube</h2>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://www.youtube.com/embed/SASINDUDILURANGA"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; encrypted-media"
              loading="lazy"
            ></iframe>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default ArtisticCareer;
