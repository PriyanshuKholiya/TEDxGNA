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
					<div style={{ position: 'relative', width: '100vw', height: '88vh', overflow: 'hidden' }}>
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
					<div style={{ height: "82vh", width: "100%" }} />
				)}

				<section className="event-section" style={{ background: '#000', color: '#fff', padding: '2rem 0 1.5rem 0', marginTop: '2rem', position: 'relative', zIndex: 10 }}>
					<div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
						{/* Left: smaller X image */}
						<div style={{ flex: '0 0 260px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<img 
								src="/X.png" 
								alt="X symbol" 
								style={{ width: '240px', maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 0 14px rgba(255,0,0,0.25))' }}
								onError={(e) => { e.target.style.display = 'none'; }}
							/>
						</div>
						
						{/* Right: TEDxGNA University content */}
						<div style={{ flex: '1 1 560px', minWidth: 0 }}>
							<div style={{ marginBottom: '1rem' }}>
								<h2 style={{ fontSize: '2rem', margin: 0, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 800 }}>
									<span style={{ color: '#e62b1e', fontWeight: 800 }}>TEDx</span>
									<span style={{ color: '#fff', fontWeight: 700 }}>GNA</span>{' '}
									<span style={{ color: '#fff', fontWeight: 700 }}>University</span>
								</h2>
								
							</div>

							<p style={{ fontSize: '1.02rem', color: '#dfeff1', marginBottom: '1rem', lineHeight: 1.5, opacity: 0.95 }}>TEDxGNA University brings TED Talks and live speakers together to inspire ideas and conversations. Our event creates a space for meaningful discussions and connections.</p>

							{/* Info pills */}
							<div className="event-pills">
								<div className="event-pill">
									<div className="pill-kicker">DATE</div>
									<div className="pill-value">15 Nov, 2025</div>
								</div>

								

								<div className="event-pill">
									<div className="pill-kicker">LOCATION</div>
									<div className="pill-value">Ludhiana, Punjab, India</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{ marginTop: '2.8rem', display: 'flex', justifyContent: 'center' }}>
						{/* Countdown now targets midnight at the start of 15 Nov 2025 */}
						<HeroCounter targetDate={new Date('2025-11-15T00:00:00')} />
					</div>
				</section>

				{/* Combined info grid: What is TED / TEDx / TEDxGNA */}
				<div style={{ width: "100%", padding: "3.5rem 0", background: "transparent" }}>
					<div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
						<h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '4rem', fontWeight: 800 }}>
							<span style={{ color: '#e62b1e' }}>About TED</span>
							<span style={{ color: '#e62b1e' }}> / </span>
							<span style={{ color: '#e62b1e' }}>TEDx</span>
							<span style={{ color: '#e62b1e' }}> / </span>
							<span style={{ color: '#e62b1e' }}>TEDxGNA</span>
						</h2>
						{/* vertical stacked layout: each card appears one-by-one on the home page */}
						<div>
							{/* Row 1 — RIGHT aligned (card on right), label on LEFT */}
							<div style={{ position: 'relative', marginBottom: '4rem', paddingLeft: '140px' }}>
								{/* left-side red label */}
								<div className="info-side-label left">
									What is TED?
								</div>
								{/* card pushed to right */}
								<div className="info-card" style={{ maxWidth: 720, width: '100%', marginLeft: 'auto' }}>
							
									<p>
										TED is a non-profit organization dedicated to spreading powerful and inspiring ideas that can change the world. Founded in 1984 as a small conference that brought together visionaries from Technology, Entertainment, and Design, TED has since evolved into a global movement that transcends boundaries of discipline, culture, and geography. Through its renowned TED Talks, the organization provides a platform for thought leaders, innovators, and changemakers to share their insights, discoveries, and personal stories in engaging and accessible ways. Today, TED’s influence extends far beyond its annual conferences, with independently organized TEDx events, educational initiatives like TED-Ed, and a vast online library of talks that reach millions of people worldwide, promoting curiosity, creativity, and lifelong learning.
									</p>
								</div>
							</div>

							{/* Row 2 — LEFT aligned (card on left), label on RIGHT */}
							<div style={{ position: 'relative', marginBottom: '4rem', paddingRight: '140px' }}>
								{/* right-side red label */}
								<div className="info-side-label right">
									What is TEDx?
								</div>
								{/* card pushed to left */}
								<div className="info-card" style={{ maxWidth: 720, width: '100%', marginRight: 'auto' }}>
									
									<p>
										TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover "ideas worth spreading." TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more. They learn from us and from each other. More than 3000 events are now held annually.
									</p>
								</div>
							</div>

							{/* Row 3 — RIGHT aligned (card on right), label on LEFT */}
							<div style={{ position: 'relative', paddingLeft: '170px' }}>
								{/* left-side red label */}
								<div className="info-side-label left" style={{ left: '-12px' }}>
									What is TEDxGNA?
								</div>
								{/* card pushed to right */}
								<div className="info-card" style={{ maxWidth: 720, width: '100%', marginLeft: 'auto' }}>
									
									<p>
										TEDxGNA University is a vibrant platform designed to ignite deep thinking, creative exploration, and future-oriented conversations. This year’s theme, <strong>retroXfuturism</strong>, lies at the core of the event, inviting us to pause, reflect, and draw wisdom from the past while courageously shaping the world yet to come. It celebrates the fusion of nostalgia with innovation, heritage with imagination, and timeless roots with futuristic aspirations. retroXfuturism challenges the notion that the past and future exist separately; instead, it highlights how true progress emerges when yesterday’s wisdom inspires tomorrow’s creativity. Through this theme, TEDxGNA University encourages participants to explore how cultural heritage, traditional knowledge, and human values can coexist with cutting-edge technologies to create a future that is bold, conscious, and deeply human.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Removed animated divider on request */}
			</div>
		</>
	);
}