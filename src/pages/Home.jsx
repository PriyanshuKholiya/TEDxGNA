import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeCarousel.css";
import HeroCounter from '../components/HeroCounter';
import BackgroundParticles from '../components/BackgroundParticles';
import speakers from '../data/speakers';

export default function Home() {
	const navigate = useNavigate();
	const heroRef = useRef(null);
	const carouselTrackRef = useRef(null);
	const [fixedHero, setFixedHero] = useState(false);

	// Fade-in animation for hero
	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const obs = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) el.classList.add('fade-in');
			},
			{ threshold: 0.2 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	// Sticky hero effect: fix hero image while text scrolls, then unfix when out of section
	useEffect(() => {
		const handleScroll = () => {
			const hero = heroRef.current;
			if (!hero) return;
			const rect = hero.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			// When hero top is at 0 and bottom is below viewport, fix the hero
			if (rect.top <= 0 && rect.bottom > windowHeight + 60) {
				setFixedHero(true);
			} else {
				setFixedHero(false);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Repeat speakers 5x for longer, seamless carousel
	const repeatedSpeakers = useMemo(() => {
		return Array.from({ length: 5 }, () => speakers).flat();
	}, []);

	const handleTellMeMore = () => {
		const section = document.getElementById("theme-section");
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className="page home home-centered modern-home light-theme" style={{ padding: 0, minHeight: 0 }}>
				<div
					className={`home-hero-bg${fixedHero ? " home-hero-fixed" : ""}`}
					ref={heroRef}
					style={{
						maxHeight: "none",
						position: fixedHero ? "fixed" : "relative",
						top: fixedHero ? 0 : undefined,
						left: fixedHero ? 0 : undefined,
						width: fixedHero ? "100vw" : undefined,
						zIndex: fixedHero ? 20 : undefined,
						transition: "box-shadow 0.3s",
						boxShadow: fixedHero ? "0 8px 32px #0003" : undefined,
						overflow: "hidden",
						background: '#000'
					}}
				>
					<div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
						{/* Use background particles for cyberpunk animated backdrop */}
						<BackgroundParticles />
						{/* Centered hero stage with headline overlay */}
						<div className="hero-stage" aria-hidden={false}>
							<div className="hero-overlay">
								<img
									src="/Theme.png"
									alt="retroXfuturism Theme Visual"
									className="hero-theme-image"
									height={300}
								/>
							</div>
							<div className="hero-neon-frame" />
						</div>
					</div>
				</div>
				{/* Add a spacer div to prevent layout jump when hero is fixed */}
				{fixedHero && (
					<div style={{ height: "92vh", width: "100%" }} />
				)}

				<section className="event-section" style={{ background: '#000', color: '#fff', padding: '2rem 0 1.5rem 0', marginTop: '2rem', position: 'relative', zIndex: 10 }}>
					<div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
						{/* Left: smaller X image */}
						<div style={{ flex: '0 0 260px', display: 'flex', justifyContent: 'center' }}>
							<img 
								src="/X.png" 
								alt="X symbol" 
								style={{ width: '220px', maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 0 14px rgba(255,0,0,0.25))' }}
								onError={(e) => { e.target.style.display = 'none'; }}
							/>
						</div>
						
						{/* Right: TEDxGNA University content */}
						<div style={{ flex: '1 1 560px', minWidth: 0 }}>
							<div style={{ marginBottom: '1rem' }}>
								<h2 style={{ fontSize: '1.8rem', margin: 0, color: '#e62b1e', fontWeight: 900 }}>TEDxGNA <span style={{ color: '#fff', fontWeight: 700 }}>University</span></h2>
								
							</div>

							<p style={{ fontSize: '1.02rem', color: '#dfeff1', marginBottom: '1.25rem', lineHeight: 1.5, opacity: 0.95 }}>TEDxGNA University brings TED Talks and live speakers together to inspire ideas and conversations. Our event creates a space for meaningful discussions and connections.</p>

							{/* Info pills */}
							<div className="event-pills">
								<div className="event-pill">
									<div className="pill-kicker">DATE</div>
									<div className="pill-value">15 Nov, 2025</div>
								</div>

								<div className="event-pill">
									<div className="pill-kicker">SPEAKERS</div>
									<div className="pill-value">{speakers.length}</div>
								</div>

								<div className="event-pill">
									<div className="pill-kicker">LOCATION</div>
									<div className="pill-value">Ludhiana, Punjab, India</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
						{/* Countdown now targets midnight at the start of 15 Nov 2025 */}
						<HeroCounter targetDate={new Date('2025-11-15T00:00:00')} />
					</div>
				</section>

				{/* Combined info grid: What is TED / TEDx / TEDxGNA */}
				<div style={{ width: "100%", padding: "3.5rem 0", background: "transparent" }}>
					<div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
						<h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#e62b1e', fontWeight: 800 }}>About TED / TEDx / TEDxGNA</h2>
						<div className="info-grid">
							<div className="info-card">
								<h3>What is TED?</h3>
								<p>
									TED is a non-profit devoted to Ideas Worth Spreading. It began in 1984 as a small conference bringing together Technology, Entertainment and Design, and has since grown into a global platform for powerful ideas shared by speakers from all disciplines.
								</p>
							</div>
							<div className="info-card">
								<h3>What is TEDx?</h3>
								<p>
									TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover "ideas worth spreading." TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more. They learn from us and from each other. More than 3000 events are now held annually.
								</p>
							</div>
							<div className="info-card">
								<h3>What is TEDxGNA?</h3>
								<p>
								TEDxGNA University is a platform created to ignite deep thinking and future-oriented conversations — and this year, the theme retroXfuturism stands at the heart of the event. retroXfuturism is a journey that invites us to pause, reflect, and draw wisdom from the past while fearlessly designing the world that's yet to come. It is about merging nostalgia with innovation, heritage with imagination, and timeless roots with futuristic possibilities.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				{/* Divider above speakers */}
				<div
					className="slim-animated-divider"
					style={{
						width: "100%",
						maxWidth: "900px",
						margin: "2.5rem auto 0 auto"
					}}
				/>
			</div>
		</>
	);
}
