import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function VideoServices() {
  const navigate = useNavigate();

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const services = [
    {
      title: 'Short-Form Content',
      tagline: 'Make Every Second Count',
      description: 'Viral-ready videos optimized for Instagram Reels, TikTok, and YouTube Shorts that stop the scroll and drive engagement.',
      features: ['Hook Optimization', 'Trending Audio', 'Captions & Graphics', 'Platform-Specific Formats', 'Fast Turnaround']
    },
    {
      title: 'Long-Form YouTube Videos',
      tagline: 'Keep Them Watching',
      description: 'Professional editing that maintains viewer attention from intro to outro, complete with motion graphics and chapter markers.',
      features: ['Full Editing Suite', 'Custom Intro/Outro', 'B-Roll Integration', 'Color Grading', 'Sound Design']
    },
    {
      title: 'Podcast Editing',
      tagline: 'Crystal Clear Audio',
      description: 'Transform raw recordings into polished episodes with professional audio mixing, noise reduction, and video sync.',
      features: ['Audio Enhancement', 'Multi-Track Editing', 'Video Syncing', 'Audiograms', 'Show Notes Graphics']
    },
    {
      title: 'Social Media Ads',
      tagline: 'Convert Clicks to Customers',
      description: 'High-converting video ads designed to capture attention in the first 3 seconds and drive measurable results.',
      features: ['Hook Scripts', 'CTA Optimization', 'A/B Testing Variants', 'Platform Specs', 'Performance Analytics']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      videos: '4-8 Videos/Month',
      ideal: 'Perfect for new creators building consistency',
      features: ['Basic Editing', 'Captions', '48h Turnaround', 'Revisions Included'],
      cta: 'Start Growing'
    },
    {
      name: 'Creator',
      videos: '12-16 Videos/Month',
      ideal: 'For creators ready to scale their content',
      features: ['Advanced Editing', 'Motion Graphics', '24h Turnaround', 'Unlimited Revisions', 'Custom Thumbnails'],
      popular: true,
      cta: 'Scale Up'
    },
    {
      name: 'Enterprise',
      videos: 'Unlimited Videos',
      ideal: 'For brands producing at volume',
      features: ['White-Glove Service', 'Dedicated Editor', 'Same-Day Rush', 'Brand Asset Library', 'Strategy Calls'],
      cta: 'Go Unlimited'
    }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="video services">
      <style>{`
        html, body { overflow-x: hidden; width: 100%; }
      `}</style>
      <NavBar />

      {/* Ambient Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '75%', right: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <section style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '68px', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '24px', color: 'white' }}>
            Video Editing That Makes Content <span style={{ color: '#0061b0' }}>Impossible to Ignore</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'white', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', opacity: 0.85 }}>
            From viral TikToks to polished YouTube videos, we turn raw footage into scroll-stopping content that drives views, engagement, and growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            What We <span style={{ color: '#0061b0' }}>Edit</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 97, 176, 0.2)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 97, 176, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 97, 176, 0.2)';
                }}
              >
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#0061b0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                  {service.tagline}
                </p>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '16px', lineHeight: '1.3' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'white', opacity: 0.8, lineHeight: '1.6', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#0061b0', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                      <span style={{ fontSize: '15px', color: 'white', opacity: 0.9 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Video Matters - Stats Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Why <span style={{ color: '#0061b0' }}>Professional Editing</span> Matters
          </h2>
          <p style={{ fontSize: '18px', color: 'white', opacity: 0.8, marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            The difference between amateur and professional editing is the difference between being scrolled past and going viral.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {[
              { stat: '80%', label: 'of internet traffic is video content' },
              { stat: '5x', label: 'higher engagement with edited videos' },
              { stat: '95%', label: 'message retention rate with video' },
              { stat: '3 sec', label: 'to capture attention—we nail it' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '20px',
                  padding: '40px 24px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#0061b0', marginBottom: '12px' }}>
                  {item.stat}
                </div>
                <p style={{ fontSize: '17px', color: 'white', opacity: 0.85, lineHeight: '1.5' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Process Timeline */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            Our <span style={{ color: '#0061b0' }}>Editing</span> Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Upload Footage', desc: 'Share your raw files via Google Drive, Dropbox, or direct upload' },
              { step: '02', title: 'We Edit Magic', desc: 'Our editors work their craft with cuts, color, sound, and motion graphics' },
              { step: '03', title: 'Review & Revise', desc: 'You review and request changes until it\'s exactly what you envisioned' },
              { step: '04', title: 'Final Delivery', desc: 'Get your polished video in any format, ready to upload and dominate' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '60px', fontWeight: 'bold', color: '#0061b0', marginBottom: '16px', opacity: 0.3 }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'white', opacity: 0.75, lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Choose Your <span style={{ color: '#0061b0' }}>Package</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'white', opacity: 0.8, textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            Whether you\'re just starting or scaling to millions, we have a plan that fits your content goals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                style={{
                  background: pkg.popular ? 'linear-gradient(135deg, rgba(0, 97, 176, 0.15) 0%, rgba(0, 0, 0, 0.8) 100%)' : 'rgba(0, 0, 0, 0.6)',
                  border: pkg.popular ? '3px solid #0061b0' : '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: pkg.popular ? '0 12px 50px rgba(0, 97, 176, 0.3)' : '0 8px 30px rgba(0, 0, 0, 0.4)',
                  transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                }}
              >
                {pkg.popular && (
                  <div style={{
                    background: '#0061b0',
                    color: 'white',
                    textAlign: 'center',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 15px rgba(0, 97, 176, 0.4)'
                  }}>
                    ⭐ MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '12px' }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: '22px', color: '#0061b0', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
                  {pkg.videos}
                </p>
                <p style={{ fontSize: '15px', color: 'white', opacity: 0.7, textAlign: 'center', marginBottom: '32px' }}>
                  {pkg.ideal}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#0061b0', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                      <span style={{ fontSize: '16px', color: 'white', opacity: 0.9 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    width: '100%',
                    background: pkg.popular ? '#0061b0' : 'transparent',
                    border: pkg.popular ? 'none' : '2px solid #0061b0',
                    color: 'white',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0078d4';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 97, 176, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = pkg.popular ? '#0061b0' : 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 32px 120px' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          background: 'rgba(0, 97, 176, 0.1)',
          border: '2px solid #0061b0',
          borderRadius: '24px',
          padding: '64px 32px',
          boxShadow: '0 0 60px rgba(0, 97, 176, 0.4), inset 0 0 40px rgba(0, 97, 176, 0.1)',
        }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready to Turn Your Content Into <span style={{ color: '#0061b0' }}>Gold</span>?
          </h2>
          <p style={{ fontSize: '20px', color: 'white', opacity: 0.85, marginBottom: '40px', lineHeight: '1.6' }}>
            Join 500+ creators who trust us to make their videos unforgettable. Let\'s create content that doesn\'t just exist—it dominates.
          </p>
          <button
            style={{
              background: '#0061b0',
              color: 'white',
              padding: '18px 48px',
              borderRadius: '45px',
              fontSize: '22px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(0, 97, 176, 0.6), 0 8px 20px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0078d4';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 120, 212, 0.8), 0 12px 30px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0061b0';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 97, 176, 0.6), 0 8px 20px rgba(0, 0, 0, 0.3)';
            }}
            onClick={() => document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Creating Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
