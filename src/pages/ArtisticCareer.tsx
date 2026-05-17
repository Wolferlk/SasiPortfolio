import { motion } from 'framer-motion';
import {
  AudioWaveform,
  Building2,
  Calendar,
  Disc3,
  ExternalLink,
  Headphones,
  Mic2,
  Music,
  Play,
  Radio,
  Sparkles,
  Users,
} from 'lucide-react';

type ArtistProfile = {
  name: string;
  role: string;
  spotifyUrl: string;
  embedUrl: string;
  image: string;
  note: string;
};

type Release = {
  name: string;
  date: string;
  type: string;
  description: string;
  image: string;
  link: string;
};

const artistProfiles: ArtistProfile[] = [
  {
    name: 'WOLFER',
    role: 'DJ, producer, composer and mixing engineer',
    spotifyUrl: 'https://open.spotify.com/artist/1BDgRUInxjvI7BrgASGJUd',
    embedUrl: 'https://open.spotify.com/embed/artist/1BDgRUInxjvI7BrgASGJUd?utm_source=generator&theme=0',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab676161000051747a3d5ec2f00f413961bb9ce0',
    note: 'Main electronic music artist profile on Spotify.',
  },
  {
    name: 'Sasindu Diluranga',
    role: 'Composer, producer and solo artist profile',
    spotifyUrl: 'https://open.spotify.com/artist/0O9Zjj7cNS7dPkSLTUSmnN',
    embedUrl: 'https://open.spotify.com/embed/artist/0O9Zjj7cNS7dPkSLTUSmnN?utm_source=generator&theme=0',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab676161000051741e7bd0656b53d2ae8db6fcaa',
    note: 'Personal artist profile for releases under Sasindu Diluranga.',
  },
];

const stats = [
  { label: 'Years active', value: '10+', icon: Calendar },
  { label: 'Live crowd', value: '3K+', icon: Users },
  { label: 'Releases', value: '20+', icon: Disc3 },
  { label: 'Artists mentored', value: '15+', icon: Mic2 },
];

const specialties = [
  'Future Bass',
  'Drum & Bass',
  'House',
  'EDM',
  'Electronic',
  'Mixing & Mastering',
  'Film Scoring',
  'Sinhala Pop Fusion',
];

const releases: Release[] = [
  {
    name: 'Nuhuru Akase',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/0d/c5/340dc5ac-6697-afca-e2aa-a34142720147/198999560060.jpg/316x316bb.webp',
    date: 'Dec 2024',
    type: 'Single',
    description: 'Drum & Bass modern Sinhala release featuring Deneth Viduranga.',
    link: 'https://fanlink.tv/nuhuruakase',
  },
  {
    name: 'Bhawa Satana',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/7d/c1/b57dc1b2-ea79-d9a4-dd48-926f3ac1f238/198595457900.jpg/296x296bb.webp',
    date: 'Aug 2024',
    type: 'Single',
    description: 'Modern Sinhala Drum & Bass production with Deneth Viduranga.',
    link: 'https://sdmusicrecords.fanlink.tv/BHAWA-SATANA',
  },
  {
    name: 'Premiye Numba',
    image: 'https://cdn-images.dzcdn.net/images/cover/8594b4b829e19fce0212c8330a593da9/1900x1900-000000-80-0-0.jpg',
    date: 'Jan 2024',
    type: 'Single',
    description: 'Sri Lankan modern classic Sinhala song production.',
    link: 'https://sd-music-records-2024.fanlink.tv/premiyenumba',
  },
  {
    name: 'Rider Movie',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1e/1e/a0/1e1ea094-6c13-aa02-a010-664867eccc0c/5063440397678_cover.jpg/296x296bb.webp',
    date: 'Aug 2023',
    type: 'Film Score',
    description: 'Original movie music composed for Rider, directed by Rajith Hiran.',
    link: 'https://www.imdb.com/title/tt30451025/',
  },
  {
    name: 'Shades Of Romance',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9e/ff/0b/9eff0b63-2ac1-34dc-d58d-fa3ecc0534d1/5063341839932_cover.jpg/296x296bb.webp',
    date: 'May 2023',
    type: 'Album',
    description: 'EDM album project featuring 12 artists and collaborators.',
    link: 'https://open.spotify.com/playlist/3aPnzUOqrJloIVBLjkSvOH',
  },
  {
    name: 'Liyana',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/4d/f2/c14df204-aec2-d446-3b67-e64277446085/artwork.jpg/296x296bb.webp',
    date: 'Apr 2021',
    type: 'Single',
    description: 'Pop, EDM and rap influenced Sinhala release.',
    link: 'https://www.youtube.com/watch?v=QnbTYCVQQcI',
  },
];

const platforms = [
  { label: 'Spotify', url: 'https://open.spotify.com/artist/1BDgRUInxjvI7BrgASGJUd' },
  { label: 'Apple Music', url: 'https://music.apple.com/lk/artist/wolfer/1556748726' },
  { label: 'YouTube', url: 'https://www.youtube.com/c/SASINDUDILURANGA' },
  { label: 'Instagram', url: 'https://www.instagram.com/wolfer_sl/' },
  { label: 'Facebook', url: 'https://www.facebook.com/SASINDU.A.DILURANGA' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ArtistCard({ profile }: { profile: ArtistProfile }) {
  return (
    <motion.a
      variants={fadeUp}
      href={profile.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.07] sm:grid-cols-[104px_1fr] sm:p-5"
    >
      <img
        src={profile.image}
        alt={`${profile.name} Spotify profile`}
        className="h-24 w-24 rounded-lg object-cover sm:h-[104px] sm:w-[104px]"
      />
      <div className="min-w-0">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
          <Music className="h-4 w-4" />
          Spotify Artist
        </div>
        <h3 className="text-xl font-bold text-white sm:text-2xl">{profile.name}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-300">{profile.role}</p>
        <p className="mt-3 text-sm text-slate-400">{profile.note}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
          Open Spotify <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
}

function ReleaseCard({ release }: { release: Release }) {
  return (
    <motion.a
      variants={fadeUp}
      href={release.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-slate-900"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={release.image}
          alt={release.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/55 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
          {release.type}
        </div>
        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-black shadow-lg shadow-emerald-500/20">
          <Play className="h-4 w-4 fill-current" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{release.date}</p>
        <h3 className="mt-2 text-lg font-bold text-white">{release.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{release.description}</p>
      </div>
    </motion.a>
  );
}

export default function ArtisticCareer() {
  return (
    <div className="-mx-4 -mt-20 overflow-hidden bg-[#07090d] text-white sm:-mx-6 lg:-mx-8">
      <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(217,70,239,0.16),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.7),rgba(7,9,13,0.95))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.08 }}>
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200"
            >
              <AudioWaveform className="h-4 w-4" />
              Artist Portfolio
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
              WOLFER
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
                Sasindu Diluranga
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Sri Lankan DJ, producer, composer and mixing engineer creating electronic music,
              Sinhala fusion records, film music and collaborative releases through SD Music Records.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#spotify"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-300"
              >
                <Headphones className="h-5 w-5" />
                Listen on Spotify
              </a>
              <a
                href="#releases"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Disc3 className="h-5 w-5" />
                View Releases
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-fuchsia-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="grid grid-cols-2 gap-3">
                {artistProfiles.map((profile) => (
                  <img
                    key={profile.name}
                    src={profile.image}
                    alt={profile.name}
                    className="aspect-square rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-black/35 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Verified Spotify Data</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Public Spotify profile names, profile images and embed players are loaded from the two artist profiles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <Icon className="h-5 w-5 text-emerald-300" />
              <div className="mt-4 text-3xl font-black text-white">{value}</div>
              <div className="mt-1 text-sm font-medium text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-fuchsia-300">Career Focus</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">Music production with a software-builder mindset.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Sasindu's artistic work blends electronic production, Sinhala vocals, cinematic scoring and studio collaboration.
              As founder of SD Music Records, the page now presents both artist identities clearly for listeners on mobile and desktop.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <Building2 className="h-6 w-6 shrink-0 text-cyan-300" />
              <p className="text-sm leading-6 text-slate-300">
                SD Music Records supports production, mentoring, mixing and release collaboration for emerging artists.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {artistProfiles.map((profile) => (
              <ArtistCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Sound Palette</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Genres and studio strengths</h2>
            </div>
            <Sparkles className="hidden h-9 w-9 text-fuchsia-300 sm:block" />
          </div>
          <div className="flex flex-wrap gap-3">
            {specialties.map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="releases" className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Discography</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Selected works and releases</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((release) => (
              <ReleaseCard key={release.name} release={release} />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="spotify" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Stream Now</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Spotify artist profiles</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  {platform.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {artistProfiles.map((profile) => (
              <div key={profile.name} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-2">
                <iframe
                  title={`${profile.name} Spotify embed`}
                  src={profile.embedUrl}
                  width="100%"
                  height="352"
                  className="block rounded-md"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-bold text-white">
            <Radio className="h-4 w-4 text-emerald-300" />
            WOLFER · SD Music Records
          </div>
          <p>Artist page updated for responsive mobile and desktop viewing.</p>
        </div>
      </footer>
    </div>
  );
}
