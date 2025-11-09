import './pages.css';

export default function About() {
  return (
    <div className="page about" style={{ position: 'relative', background: 'transparent', minHeight: '72vh', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="white-card about-section" style={{ position: 'relative', zIndex: 2, maxWidth: 900, width: '100%', margin: '2rem auto', padding: '3rem 2rem', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.06)', textAlign: 'center' }}>
        <div className="kicker" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>About</div>
        <h1 className="section-title" style={{ textAlign: 'center', color: '#e62b1e', marginBottom: '1.5rem' }}>About TEDxGNA University</h1>
        
        <div style={{ position: "relative", width: "100%", margin: "0 auto", textAlign: 'center' }}>
          {/* Watermark logo in the center, behind content */}
          <img
            src="image3.jpg"
            alt="TEDxGADVASU Logo Watermark"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "240px",
              height: "240px",
              opacity: 0.13,
              pointerEvents: "none",
              zIndex: 0,
              objectFit: "contain",
              userSelect: "none"
            }}
          />
          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: '100%',
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '1.05rem',
            color: '#222',
            fontWeight: 400,
            lineHeight: 1.6,
            fontFamily: 'Montserrat, Arial, sans-serif'
          }}>
            <p style={{marginBottom: '1rem', fontWeight: 600, color: '#e62b1e', fontSize: '1.13rem', letterSpacing: '0.5px'}}>About TEDxGNA University</p>
            <p style={{marginBottom: '1rem', maxWidth: '100%'}}>
              TEDxGNA University is a platform created to ignite deep thinking and future-oriented conversations — and this year, the theme <strong>retroXfuturism</strong> stands at the heart of the event. retroXfuturism is a journey that invites us to pause, reflect, and draw wisdom from the past while fearlessly designing the world that's yet to come. It is about merging nostalgia with innovation, heritage with imagination, and timeless roots with futuristic possibilities.
            </p>
            <p style={{marginBottom: '1rem', maxWidth: '100%'}}>
              This theme challenges the belief that the past and future are separate — instead, it shows that evolution is strongest when the wisdom of yesterday fuels the innovation of tomorrow. retroXfuturism encourages us to explore how traditional knowledge, lived experiences, cultural identity, analog simplicity, and old-world authenticity can blend powerfully with emerging technologies, digital ecosystems, and future-forward thinking.
            </p>
            <p style={{marginBottom: '2rem', maxWidth: '100%'}}>
              Through this theme, TEDxGNA University aims to inspire people to rethink how the past can become a foundation, a compass, and a reference point for inventing a more meaningful future — one that is bold, conscious, ethical and deeply human. retroXfuturism is not looking backwards with attachment; nor is it running forward blindly. It is about honoring where we came from while shaping where humanity can go next — creatively, responsibly and purposefully.
            </p>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#e62b1e', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Theme: <span style={{ color: '#e62b1e' }}>retroXfuturism</span>
        </h2>

        <div style={{ maxWidth: '100%', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', color: '#222', fontWeight: 400, lineHeight: 1.6, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          <p style={{marginBottom: '1rem', maxWidth: '100%'}}>
            The theme <strong>retroXfuturism</strong> is a celebration of the intersection where the wisdom of the past blends with the imagination of the future. It encourages reflection on how timeless traditions, philosophies, inventions, culture, values, and historical experiences have shaped who we are today — while simultaneously inspiring us to visualize what humanity can create next. retroXfuturism is not about choosing between yesterday or tomorrow — it is about bringing them together to unlock new pathways of innovation, creativity and meaningful progress.
          </p>
          <p style={{marginBottom: '0', maxWidth: '100%'}}>
            Under this theme, speakers explore how past knowledge, rooted identity, cultural heritage, analog simplicity, and earlier human discoveries can coexist with futuristic thinking, modern science, AI, advanced technologies, and exponential evolution. It symbolizes a creative convergence — where memory meets imagination, ancient meets advanced, analog meets digital, heritage meets innovation. retroXfuturism invites us to reimagine the future through the lens of the past — merging timeless insights with visionary possibilities — to build a world that is innovative yet grounded, progressive yet soulful, and futuristic yet deeply human.
          </p>
        </div>
      </div>
    </div>
  );
}
