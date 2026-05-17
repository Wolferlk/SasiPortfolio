import { useState, useEffect, useRef } from "react";

const artist = {
  name: "Wolfer",
  realName: "A.G. Sasindu Diluranga",
  tagline: "DJ · Producer · Composer · Mixing Engineer",
  origin: "Sri Lanka · Born 2001",
  bio: "Meet A.G. Sasindu Diluranga, aka Wolfer — a dynamic DJ/Producer, composer, and mixing engineer from Sri Lanka. His musical journey began at 14, fueled by an unyielding passion for Dance/Electronic, Future Bass, House Music, and EDM. As SD MUSIC RECORDS founder and studio owner, Wolfer mentors emerging artists while collaborating with Sri Lanka's top talent. In 2024 he wowed 3,000 fans at his first live show — cementing his status as an electronic music force.",
  profilePic: "https://i.ibb.co/M7CTKHH/Whats-App-Image-2024-10-07-at-9-58-55-PM-removebg-preview.png",
  stats: [
    { label: "Years Active", value: "10+" },
    { label: "Live Crowd", value: "3K+" },
    { label: "Releases", value: "20+" },
    { label: "Artists Mentored", value: "15+" },
  ],
  genres: ["Future Bass", "Drum & Bass", "House", "EDM", "Electronic"],
  streamingLinks: [
    { platform: "Spotify", url: "https://open.spotify.com/artist/1BDgRUInxjvI7BrgASGJUd?si=skX8kndJSf6znX4zNt3jOQ", icon: "🎵" },
    { platform: "Apple Music", url: "https://music.apple.com/lk/artist/wolfer/1556748726", icon: "🎶" },
    { platform: "YouTube", url: "https://www.youtube.com/c/SASINDUDILURANGA", icon: "▶" },
    { platform: "Instagram", url: "https://www.instagram.com/wolfer_sl/", icon: "📸" },
    { platform: "Facebook", url: "https://www.facebook.com/SASINDU.A.DILURANGA", icon: "👥" },
    { platform: "Twitter", url: "https://twitter.com/wolfer_sl", icon: "🐦" },
  ],
  works: [
    { name: "Nuhuru Akase", photo: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/0d/c5/340dc5ac-6697-afca-e2aa-a34142720147/198999560060.jpg/316x316bb.webp", date: "Dec 2024", type: "Single", description: "Drum & Bass Modern Sinhala Song ft. Deneth Viduranga", link: "https://fanlink.tv/nuhuruakase", color: "#a78bfa" },
    { name: "Bhawa Satana", photo: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/7d/c1/b57dc1b2-ea79-d9a4-dd48-926f3ac1f238/198595457900.jpg/296x296bb.webp", date: "Aug 2024", type: "Single", description: "Drum & Bass Modern Sinhala Song ft. Deneth Viduranga", link: "https://sdmusicrecords.fanlink.tv/BHAWA-SATANA", color: "#f472b6" },
    { name: "Sunfire Festival", photo: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/419585167_122106517808179942_45011245037889558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GlnOvJvExOQQ7kNvgH5cU6h&_nc_oc=AdhZbIZNfQjsv8FiOwMIV_cggbBswmhsTivFroVdE4Mspno5Nmft5r7cuciT3if0dZ--8ZsgL-wEondmG8C05v3w&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AZJz55CcfV8sJU4WsgoHdKk&oh=00_AYCCyv6BHjqRjMHAPsAtqRqieLqRao730oDdWYmg1DYkYw&oe=6784079D", date: "Mar 2024", type: "Live Show", description: "Downsouth EDM Festival — Mainstream DJ", link: "https://www.facebook.com/sunfirehikkaduwa", color: "#fb923c" },
    { name: "Rider Movie", photo: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1e/1e/a0/1e1ea094-6c13-aa02-a010-664867eccc0c/5063440397678_cover.jpg/296x296bb.webp", date: "Aug 2023", type: "Film Score", description: "Composed Movie Music — directed by Rajith Hiran", link: "https://www.imdb.com/title/tt30451025/", color: "#34d399" },
    { name: "Shades Of Romance", photo: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9e/ff/0b/9eff0b63-2ac1-34dc-d58d-fa3ecc0534d1/5063341839932_cover.jpg/296x296bb.webp", date: "May 2023", type: "Album", description: "EDM Music Album with 12 Featuring Artists", link: "https://open.spotify.com/playlist/3aPnzUOqrJloIVBLjkSvOH", color: "#60a5fa" },
    { name: "Premiye Numba", photo: "https://cdn-images.dzcdn.net/images/cover/8594b4b829e19fce0212c8330a593da9/1900x1900-000000-80-0-0.jpg", date: "Jan 2024", type: "Single", description: "Sri Lankan Modern Classic Sinhala Song", link: "https://sd-music-records-2024.fanlink.tv/premiyenumba", color: "#e879f9" },
    { name: "Liyana", photo: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/4d/f2/c14df204-aec2-d446-3b67-e64277446085/artwork.jpg/296x296bb.webp", date: "Apr 2021", type: "Single", description: "Pop EDM Rap Sri Lankan Sinhala Song", link: "https://www.youtube.com/watch?v=QnbTYCVQQcI", color: "#fbbf24" },
  ],
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedText({ text, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.1);
  return (
    <span ref={ref} className={className} style={{
      display: "inline-block",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{text}</span>
  );
}

function StatCard({ label, value, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      textAlign: "center",
      padding: "1.5rem 1rem",
      background: "rgba(255,255,255,0.04)",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
      transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
    }}>
      <div style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function WorkCard({ work, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <a href={work.link} target="_blank" rel="noopener noreferrer" ref={ref}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "block", textDecoration: "none", borderRadius: 20,
        overflow: "hidden", position: "relative",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? work.color + "66" : "rgba(255,255,255,0.07)"}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.08}s, border-color 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: hovered ? `0 20px 60px ${work.color}22` : "none",
        cursor: "pointer",
      }}>
      <div style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
        <img src={work.photo} alt={work.name} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s ease",
          filter: hovered ? "brightness(0.5)" : "brightness(0.7)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, #0a0a0f 40%, transparent 100%)`,
        }} />
        <div style={{
          position: "absolute", top: 12, left: 12,
          background: work.color + "22", border: `1px solid ${work.color}66`,
          color: work.color, fontSize: "0.65rem", fontWeight: 700,
          padding: "4px 10px", borderRadius: 50, textTransform: "uppercase",
          letterSpacing: "0.1em", backdropFilter: "blur(8px)",
        }}>{work.type}</div>
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center",
          justifyContent: "center", opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
        }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: work.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>▶</div>
        </div>
      </div>
      <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", marginBottom: 4, fontWeight: 600, letterSpacing: "0.1em" }}>{work.date}</div>
        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 4, lineHeight: 1.3 }}>{work.name}</div>
        <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{work.description}</div>
      </div>
    </a>
  );
}

function StreamingBtn({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10, padding: "0.7rem 1.2rem",
        background: hov ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 50, textDecoration: "none", transition: "all 0.25s ease",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 8px 24px rgba(167,139,250,0.2)" : "none",
      }}>
      <span style={{ fontSize: 16 }}>{item.icon}</span>
      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: hov ? "#a78bfa" : "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{item.platform}</span>
    </a>
  );
}

function WaveBar({ delay }) {
  return (
    <div style={{
      width: 3, borderRadius: 4,
      background: "linear-gradient(to top, #a78bfa, #f472b6)",
      animation: `wave 1.2s ease-in-out ${delay}s infinite alternate`,
    }} />
  );
}

export default function WolferPage() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroRef, heroInView] = useInView(0.01);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#08080d", color: "#fff", fontFamily: "'Syne', 'Rajdhani', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @keyframes wave { from { height: 8px } to { height: 32px } }
        @keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-12px) } }
        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.4 } 100% { transform: scale(1.4); opacity: 0 } }
        @keyframes grain { 0%,100%{transform:translate(0,0)} 10%{transform:translate(-2%,-3%)} 30%{transform:translate(2%,1%)} 50%{transform:translate(-1%,3%)} 70%{transform:translate(3%,-1%)} 90%{transform:translate(-2%,2%)} }
        * { box-sizing: border-box; margin: 0; padding: 0 }
        ::selection { background: rgba(167,139,250,0.3) }
        ::-webkit-scrollbar { width: 4px; background: #111 }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#a78bfa, #f472b6); border-radius: 4px }
      `}</style>

      {/* Noise grain overlay */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        animation: "grain 0.5s steps(2) infinite",
      }} />

      {/* Ambient glows */}
      <div style={{ position: "fixed", top: "-20vh", left: "-10vw", width: "60vw", height: "60vh", background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "30vh", right: "-15vw", width: "55vw", height: "55vh", background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ===== HERO ===== */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(2rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)", overflow: "hidden" }}>
        {/* Decorative ring */}
        <div style={{ position: "absolute", top: "50%", right: "clamp(1rem, 8vw, 12rem)", transform: "translate(0,-50%)", width: "clamp(280px, 40vw, 520px)", height: "clamp(280px, 40vw, 520px)", pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(167,139,250,0.12)", animation: "spin-slow 40s linear infinite" }} />
          <div style={{ position: "absolute", inset: "12%", borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", animation: "spin-slow 28s linear infinite reverse" }} />
          <div style={{ position: "absolute", inset: "26%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />
          {/* Artist image */}
          <div style={{ position: "absolute", inset: "10%", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(167,139,250,0.25)", animation: "float 6s ease-in-out infinite" }}>
            <img src={artist.profilePic} alt="Wolfer" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.2)" }} />
          </div>
          {/* Pulse rings */}
          <div style={{ position: "absolute", inset: "8%", borderRadius: "50%", border: "2px solid rgba(167,139,250,0.3)", animation: "pulse-ring 3s ease-out infinite" }} />
          <div style={{ position: "absolute", inset: "8%", borderRadius: "50%", border: "2px solid rgba(167,139,250,0.3)", animation: "pulse-ring 3s ease-out 1.5s infinite" }} />
        </div>

        {/* Hero text */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "clamp(300px, 50vw, 640px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 28 }}>
              {[0, 0.1, 0.2, 0.3, 0.15, 0.05, 0.25].map((d, i) => <WaveBar key={i} delay={d} />)}
            </div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Live & Active</span>
          </div>

          <h1 style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: "1rem",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(40px)", transition: "all 0.8s cubic-bezier(0.34,1.2,0.64,1) 0.2s" }}>
            <span style={{ display: "block", background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WOL</span>
            <span style={{ display: "block", background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FER</span>
          </h1>

          <p style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "all 0.6s ease 0.4s" }}>
            {artist.tagline}
          </p>
          <p style={{ fontSize: "clamp(0.75rem, 1.4vw, 0.82rem)", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2.5rem",
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
            {artist.origin}
          </p>

          {/* Genre pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.6s" }}>
            {artist.genres.map(g => (
              <span key={g} style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                padding: "5px 14px", borderRadius: 50, textTransform: "uppercase",
                background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", color: "#c4b5fd" }}>{g}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.7s" }}>
            <a href="#works" style={{ padding: "0.85rem 2rem", borderRadius: 50, background: "linear-gradient(135deg, #a78bfa, #f472b6)", color: "#fff", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "opacity 0.2s", display: "inline-block" }}
              onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>
              Explore Works
            </a>
            <a href="https://open.spotify.com/artist/1BDgRUInxjvI7BrgASGJUd" target="_blank" rel="noopener noreferrer"
              style={{ padding: "0.85rem 2rem", borderRadius: 50, background: "transparent", color: "#fff", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}>
              Listen Now
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.3 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #a78bfa, transparent)" }} />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ padding: "4rem clamp(1.5rem, 6vw, 5rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16, maxWidth: 1100, margin: "0 auto" }}>
          {artist.stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
        </div>
      </section>

      {/* ===== BIO ===== */}
      <section style={{ padding: "4rem clamp(1.5rem, 6vw, 5rem)", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>About</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff" }}>The Sound of Sri Lanka's<br /><span style={{ background: "linear-gradient(135deg, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Electronic Soul</span></h2>
            <p style={{ fontSize: "clamp(0.88rem, 1.6vw, 0.97rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{artist.bio}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "🎧", title: "SD Music Records", sub: "Founder & Studio Owner" },
              { icon: "🎬", title: "Film Composer", sub: "Rider (2023)" },
              { icon: "🎓", title: "Certified", sub: "Electronic Music Composition" },
              { icon: "🌐", title: "Collaborator", sub: "Sri Lanka's Top Artists" },
            ].map((item, i) => {
              const [ref, inView] = useInView();
              return (
                <div key={i} ref={ref} style={{
                  padding: "1.2rem", borderRadius: 16,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WORKS ===== */}
      <section id="works" style={{ padding: "5rem clamp(1.5rem, 6vw, 5rem)", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>Discography</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>Works & Releases</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 20 }}>
          {artist.works.map((work, i) => <WorkCard key={work.name} work={work} index={i} />)}
        </div>
      </section>

      {/* ===== STREAMING ===== */}
      <section style={{ padding: "5rem clamp(1.5rem, 6vw, 5rem)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>Listen & Connect</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", marginBottom: "2.5rem" }}>Find Wolfer Everywhere</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {artist.streamingLinks.map(item => <StreamingBtn key={item.platform} item={item} />)}
          </div>
        </div>
      </section>

      {/* ===== SPOTIFY EMBED ===== */}
      <section style={{ padding: "3rem clamp(1.5rem, 6vw, 5rem)", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1.5rem" }}>Stream Now</div>
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
          <iframe style={{ borderRadius: 20, display: "block" }}
            src="https://open.spotify.com/embed/artist/1BDgRUInxjvI7BrgASGJUd?utm_source=generator&theme=0"
            width="100%" height="352" frameBorder="0" allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ padding: "3rem clamp(1.5rem, 6vw, 5rem)", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WOLFER</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", marginTop: 4 }}>© 2025 SD Music Records · All rights reserved</div>
          </div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>Crafted in Sri Lanka 🇱🇰</div>
        </div>
      </footer>
    </div>
  );
}