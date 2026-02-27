import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

// Import only used assets
import testimonialAvatar from '../assets/bd83ccb6d0330e546cc0e5bfdb7f21637ac1d831.png';

const CARDS = [
  { poster: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=533&fit=crop' },
  { poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=533&fit=crop' },
  { poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=533&fit=crop' },
  { poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop' },
  { poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop' },
];

export default function HomePage() {
  const navigate = useNavigate();

  // Track each card's logical position on the infinite track
  const [cardPositions, setCardPositions] = useState([-2, -1, 0, 1, 2]);
  const prevPositionsRef = useRef([-2, -1, 0, 1, 2]);
  const autoPlayRef = useRef(null);
  const touchStartRef = useRef(null);

  // Responsive card spacing
  const getSpacingValue = () => {
    if (typeof window === 'undefined') return 220;
    const w = window.innerWidth;
    return w >= 1024 ? 240 : w >= 768 ? 200 : 160;
  };
  const [spacing, setSpacing] = useState(getSpacingValue);

  const goNext = useCallback(() => {
    setCardPositions(prev => {
      const newPositions = prev.map(p => p - 1);
      const minIdx = newPositions.indexOf(Math.min(...newPositions));
      if (newPositions[minIdx] <= -3) {
        newPositions[minIdx] = 3;
      }
      return newPositions;
    });
  }, []);

  const goPrev = useCallback(() => {
    setCardPositions(prev => {
      const newPositions = prev.map(p => p + 1);
      const maxIdx = newPositions.indexOf(Math.max(...newPositions));
      if (newPositions[maxIdx] >= 3) {
        newPositions[maxIdx] = -3;
      }
      return newPositions;
    });
  }, []);

  useEffect(() => {
    prevPositionsRef.current = [...cardPositions];
  }, [cardPositions]);

  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 3500);
    return () => clearInterval(autoPlayRef.current);
  }, [goNext]);

  useEffect(() => {
    const onResize = () => setSpacing(getSpacingValue());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    clearInterval(autoPlayRef.current);
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext(); else goPrev();
    }
    touchStartRef.current = null;
    autoPlayRef.current = setInterval(goNext, 3500);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="home page">
      <NavBar />

      {/* Ambient Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '55%', right: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '1000px', background: '#0061b0', opacity: 0.04, filter: 'blur(280px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <style>{`
        html, body { overflow-x: hidden; width: 100%; }
        .hero-carousel{position:relative;width:100%;height:280px;perspective:1200px;perspective-origin:center center}
        .hero-card{position:absolute;left:50%;top:50%;width:210px;height:280px;border-radius:16px;overflow:hidden;border:3px solid rgba(0,97,176,.4);cursor:pointer;will-change:transform,opacity;transform-style:preserve-3d}
        .hero-card.is-centered{border-color:#0061b0;box-shadow:0 0 50px rgba(0,97,176,.3),0 20px 60px rgba(0,0,0,.4)}
        .hero-card:not(.is-centered){filter:brightness(.65)}
        .hero-card video,.hero-card img{width:100%;height:100%;object-fit:cover;display:block}
        .hero-card .play-btn{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
        .hero-card:hover .play-btn{opacity:1}
        .hero-card .play-btn span{width:48px;height:48px;background:#0061b0;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 30px rgba(0,97,176,.5)}
        .hero-card .play-btn span::after{content:'';border-left:16px solid white;border-top:10px solid transparent;border-bottom:10px solid transparent;margin-left:3px}
        @media(min-width:768px){.hero-carousel{height:320px;perspective:1400px}.hero-card{width:240px;height:320px}}
        @media(min-width:1024px){.hero-carousel{height:347px;perspective:1600px}.hero-card{width:260px;height:347px}}
      `}</style>

      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px', position: 'relative' }}>
        {/* Text Content */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '900px', margin: '0 auto 64px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 'bold', color: 'white', lineHeight: 1.2, marginBottom: '24px' }}>
            Supercharge your brand with viral <span style={{ color: '#0061b0' }}>signature clips</span>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: 0, maxWidth: '800px', margin: '0 auto' }}>
            If you're a busy creator with no time to edit or post consistently on social media but still recognize the need to grow your brand faster, then this is for you.
          </p>
        </div>

        {/* Animated Carousel */}
        <div
          style={{ position: 'relative', zIndex: 10, minHeight: '347px', overflowX: 'clip' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => clearInterval(autoPlayRef.current)}
          onMouseLeave={() => { autoPlayRef.current = setInterval(goNext, 3500); }}
        >
          <div className="hero-carousel" role="region" aria-label="Video carousel">
            {CARDS.map((card, i) => {
              const position = cardPositions[i];
              const prevPosition = prevPositionsRef.current[i];
              const isWrapping = Math.abs(position - prevPosition) > 4;
              const isCenter = position === 0;
              const visible = Math.abs(position) <= 2;

              const rotateY = position * -30;
              const translateZ = -Math.abs(position) * 80;
              const scale = isCenter ? 1 : 0.85;
              const cardOpacity = visible ? (isCenter ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.12)) : 0;
              const zIdx = 10 - Math.abs(position);

              return (
                <div
                  key={i}
                  className={`hero-card${isCenter ? ' is-centered' : ''}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${position * spacing}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    opacity: cardOpacity,
                    zIndex: zIdx,
                    transition: isWrapping ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                  role="group"
                  aria-label={`Video ${i + 1}`}
                >
                  <img src={card.poster} alt={`Creator ${i + 1}`} loading="lazy" />
                  <div className="play-btn"><span /></div>
                </div>
              );
            })}
          </div>

          {/* Nav Arrows */}
          <button
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => { clearInterval(autoPlayRef.current); goPrev(); autoPlayRef.current = setInterval(goNext, 3500); }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0061b0'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
            aria-label="Previous"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => { clearInterval(autoPlayRef.current); goNext(); autoPlayRef.current = setInterval(goNext, 3500); }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0061b0'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
            aria-label="Next"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Dot Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px', position: 'relative', zIndex: 20 }}>
            {CARDS.map((_, i) => {
              const isCentered = cardPositions[i] === 0;
              return (
                <button
                  key={i}
                  onClick={() => {
                    clearInterval(autoPlayRef.current);
                    const currentPos = cardPositions[i];
                    const shift = -currentPos;
                    setCardPositions(prev => prev.map(p => p + shift));
                    autoPlayRef.current = setInterval(goNext, 3500);
                  }}
                  style={{
                    width: isCentered ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: isCentered ? '#0061b0' : 'rgba(255,255,255,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* We've Worked With Section */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 'bold', color: 'white', lineHeight: 1.1, textAlign: 'center', marginBottom: '64px' }}>
            We've Worked With
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ width: '190px', height: '240px', borderRadius: '16px', border: '2px solid #0061b0', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,97,176,0.3)', transform: 'rotate(-6deg)', transition: 'all 0.5s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-6deg) scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop" alt="Client 1" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

            <div style={{ width: '190px', height: '240px', borderRadius: '16px', border: '2px solid #0061b0', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,97,176,0.3)', transform: 'rotate(3deg)', transition: 'all 0.5s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(3deg) scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=600&fit=crop" alt="Client 2" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

            <div style={{ width: '190px', height: '240px', borderRadius: '16px', border: '2px solid #0061b0', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,97,176,0.3)', transform: 'rotate(-3deg)', transition: 'all 0.5s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-3deg) scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&h=600&fit=crop" alt="Client 3" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

            <div style={{ width: '190px', height: '240px', borderRadius: '16px', border: '2px solid #0061b0', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,97,176,0.3)', transform: 'rotate(6deg)', transition: 'all 0.5s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(6deg) scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop" alt="Client 4" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
          </div>
        </div>
      </section>

      {/* Design That Speak Section */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'white' }}>Design That Speak for </span>
              <span style={{ color: '#0061b0' }}>Your Brand</span>
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              From scroll-stopping thumbnails to engaging posts and reel covers,<br />
              we craft visuals that make your content impossible to ignore.
            </p>
          </div>

          {/* Design Portfolio Grid */}
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            {/* Top Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '12px' }}>
              {[
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop'
              ].map((src, i) => (
                <div key={i} style={{ aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', border: '2px solid #0061b0', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = '#0078d4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#0061b0'; }}
                >
                  <img src={src} alt={`Design ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'filter 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />
                </div>
              ))}
            </div>
            {/* Bottom Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
              {[
                'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop'
              ].map((src, i) => (
                <div key={i} style={{ aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', border: '2px solid #0061b0', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = '#0078d4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#0061b0'; }}
                >
                  <img src={src} alt={`Design ${i + 6}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'filter 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/services/graphic')}
              style={{ background: '#0061b0', color: 'white', padding: '14px 42px', borderRadius: '45px', fontSize: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 0 20px rgba(0,97,176,0.5), 0 4px 15px rgba(0,0,0,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0078d4'; e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,120,212,0.7), 0 8px 25px rgba(0,0,0,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0061b0'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,97,176,0.5), 0 4px 15px rgba(0,0,0,0.3)'; }}
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Website That Speak Section */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'white' }}>Website That Speak </span>
              <span style={{ color: '#0061b0' }}>Your Brand</span>
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              From scroll-stopping thumbnails to engaging posts and reel covers,<br />
              we craft visuals that make your content impossible to ignore.
            </p>
          </div>

          {/* Website Showcase */}
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0,97,176,0.1), transparent)', border: '2px solid #0061b0', borderRadius: '20px', padding: '48px 32px', textAlign: 'center' }}>
              <h3 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '32px' }}>
                E - Commerce Website
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ borderRadius: '14px', border: '2px solid #0061b0', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="E-commerce Dashboard" style={{ width: '100%', height: 'auto', objectFit: 'cover', transition: 'filter 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />
                </div>
                <div style={{ borderRadius: '14px', border: '2px solid #0061b0', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop" alt="E-commerce Services" style={{ width: '100%', height: 'auto', objectFit: 'cover', transition: 'filter 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/services/web')}
              style={{ background: '#0061b0', color: 'white', padding: '14px 42px', borderRadius: '45px', fontSize: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 0 20px rgba(0,97,176,0.5), 0 4px 15px rgba(0,0,0,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0078d4'; e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,120,212,0.7), 0 8px 25px rgba(0,0,0,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0061b0'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,97,176,0.5), 0 4px 15px rgba(0,0,0,0.3)'; }}
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* How We Help You Section */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'white' }}>How We </span>
              <span style={{ color: '#0061b0' }}>Help You</span>
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              We help your brand grow with powerful designs, consistent branding,<br />
              and strategies that boost engagement—while<br />
              saving you time and effort.
            </p>
          </div>

          {/* Process Cards */}
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'rgba(0,0,0,0.4)', border: '2px solid #0061b0', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', boxShadow: '0 0 30px rgba(0,97,176,0.4), inset 0 0 20px rgba(0,97,176,0.1)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ width: '64px', height: '64px', margin: '0 auto 24px', background: '#004a8f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,97,176,0.6)' }}>
                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Grow Your Reach</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 0 }}>
                We help you reach more people with content that gets seen and shared. More visibility means more growth.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.4)', border: '2px solid #0061b0', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', boxShadow: '0 0 30px rgba(0,97,176,0.4), inset 0 0 20px rgba(0,97,176,0.1)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ width: '64px', height: '64px', margin: '0 auto 24px', background: '#004a8f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,97,176,0.6)' }}>
                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.5c5.5 0 10 1.3 10 3v2c0 1.7-4.5 3-10 3S2 9.2 2 7.5v-2c0-1.7 4.5-3 10-3zm0 14c-1.9 0-3.7-.2-5.2-.5L5 20.8c-.2.4-.1.9.3 1.2.2.2.4.2.7.2.2 0 .4-.1.6-.2l2.9-2.4c.8.1 1.7.2 2.5.2s1.7-.1 2.5-.2l2.9 2.4c.4.3 1 .3 1.3-.1.3-.4.3-1-.1-1.3L17 16.5c-1.5.3-3.3.5-5 .5zm10-6.5v3c0 1.7-4.5 3-10 3s-10-1.3-10-3v-3c2.3 1.2 5.9 2 10 2s7.7-.8 10-2z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Boost Engagement</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 0 }}>
                Turn passive scrollers into active fans with content designed to spark conversations and interactions.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.4)', border: '2px solid #0061b0', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', boxShadow: '0 0 30px rgba(0,97,176,0.4), inset 0 0 20px rgba(0,97,176,0.1)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ width: '64px', height: '64px', margin: '0 auto 24px', background: '#004a8f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,97,176,0.6)' }}>
                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8.41L20.59 12 12 15.59 3.41 12 12 8.41M12 6l-9 4.5v3L12 18l9-4.5v-3L12 6zm8 10.5V20c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3.5l2-1 2 1z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Save Your Time</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 0 }}>
                We bring creative ideas plus expert editing, so you can focus on what you do best—creating content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'white' }}>Hear it directly from our </span>
              <span style={{ color: '#0061b0' }}>clients</span>
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 0 }}>
              Hear what our contributors to say. An testimonial reflect<br />
              the authenticity claim made in our service.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0,97,176,0.1), transparent)', border: '2px solid #0061b0', borderRadius: '20px', padding: '32px', transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ width: '100%', height: '180px', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #0061b0', marginBottom: '24px' }}>
                <button style={{ width: '56px', height: '56px', background: '#dc2626', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                  <svg style={{ width: '20px', height: '20px', color: 'white', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <p style={{ fontSize: '15px', color: 'white', lineHeight: 1.6, marginBottom: '20px' }}>
                "These guys don't mess around. We saw results from month one. If you want to grow your business, look no further."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={testimonialAvatar} alt="Scott Henry" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #0061b0', objectFit: 'cover' }} />
                <div>
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>Scott Henry</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: 0 }}>Content Creator</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(0,97,176,0.1), transparent)', border: '2px solid #0061b0', borderRadius: '20px', padding: '32px', transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ width: '100%', height: '180px', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #0061b0', marginBottom: '24px' }}>
                <button style={{ width: '56px', height: '56px', background: '#dc2626', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                  <svg style={{ width: '20px', height: '20px', color: 'white', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <p style={{ fontSize: '15px', color: 'white', lineHeight: 1.6, marginBottom: '20px' }}>
                "My results and online presence went through the roof more or less overnight, mind-blowing!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={testimonialAvatar} alt="William" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #0061b0', objectFit: 'cover' }} />
                <div>
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>William</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: 0 }}>Content Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
