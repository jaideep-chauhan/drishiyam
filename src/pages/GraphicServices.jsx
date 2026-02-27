import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function GraphicServices() {
  const navigate = useNavigate();

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const services = [
    {
      title: 'Social Media Graphics',
      tagline: 'Stop The Scroll',
      description: 'Eye-catching posts, stories, and carousels designed to boost engagement and brand recognition across all platforms.',
      features: ['Instagram Posts', 'Facebook Graphics', 'Twitter Banners', 'LinkedIn Content', 'Story Templates']
    },
    {
      title: 'YouTube Thumbnails',
      tagline: 'Click-Worthy Designs',
      description: 'Custom thumbnails that increase CTR and stand out in crowded feeds, optimized for desktop and mobile viewing.',
      features: ['High CTR Design', 'Text Overlay', 'Brand Consistency', 'A/B Test Variants', 'Quick Turnaround']
    },
    {
      title: 'Branding & Identity',
      tagline: 'Build Recognition',
      description: 'Complete brand packages including logos, color palettes, and style guides that make your brand unforgettable.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography', 'Asset Library']
    },
    {
      title: 'Marketing Collateral',
      tagline: 'Professional Materials',
      description: 'Print and digital materials that communicate your message clearly and leave lasting impressions.',
      features: ['Brochures', 'Flyers', 'Posters', 'Business Cards', 'Presentations']
    },
    {
      title: 'Album & Reel Covers',
      tagline: 'Artistic Expression',
      description: 'Creative artwork that captures your vibe and entices viewers to click, watch, and remember.',
      features: ['Album Art', 'Reel Covers', 'Podcast Covers', 'Playlist Graphics', 'Profile Banners']
    },
    {
      title: 'Infographics & Data Viz',
      tagline: 'Complex Made Simple',
      description: 'Turn boring data into compelling visual stories that educate, engage, and get shared.',
      features: ['Custom Infographics', 'Charts & Graphs', 'Process Diagrams', 'Comparison Graphics', 'Timeline Designs']
    }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="graphic services">
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
            Graphic Design That Makes Your Brand <span style={{ color: '#0061b0' }}>Unforgettable</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'white', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', opacity: 0.85 }}>
            From scroll-stopping social media posts to click-worthy thumbnails, we craft visuals that capture attention and convert viewers into followers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            What We <span style={{ color: '#0061b0' }}>Design</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
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

      {/* Why Design Matters Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Why <span style={{ color: '#0061b0' }}>Professional Design</span> Matters
          </h2>
          <p style={{ fontSize: '18px', color: 'white', opacity: 0.8, marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            First impressions happen in milliseconds. Make yours count with designs that demand attention and build trust.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { stat: '0.05s', label: 'Time to form a first impression' },
              { stat: '94%', label: 'of first impressions are design-related' },
              { stat: '3.5x', label: 'more engagement with quality visuals' },
              { stat: '80%', label: 'of people remember what they see' }
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

      {/* Design Process */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            Our <span style={{ color: '#0061b0' }}>Design</span> Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your brand, audience, and design goals to create the perfect brief' },
              { step: '02', title: 'Concept', desc: 'Our designers craft multiple concepts based on your unique brand identity' },
              { step: '03', title: 'Refine', desc: 'You provide feedback, and we polish every pixel until it\'s perfect' },
              { step: '04', title: 'Deliver', desc: 'Get your final files in all formats, ready to publish and impress' }
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

      {/* What You Get Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            What You <span style={{ color: '#0061b0' }}>Always</span> Get
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎨', title: 'Custom Designs', desc: 'No templates. Every design is built from scratch for your brand.' },
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Most designs delivered within 24-48 hours, rush available.' },
              { icon: '♾️', title: 'Unlimited Revisions', desc: 'We refine until you\'re 100% satisfied—no questions asked.' },
              { icon: '📁', title: 'All File Formats', desc: 'PNG, JPG, PDF, SVG, AI—whatever you need, you get.' },
              { icon: '📱', title: 'Platform Optimized', desc: 'Sized and formatted perfectly for every social platform.' },
              { icon: '💬', title: 'Direct Communication', desc: 'Work directly with your designer, no middlemen.' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '16px',
                  padding: '28px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.background = 'rgba(0, 97, 176, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'white', opacity: 0.8, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
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
            Ready to Elevate Your <span style={{ color: '#0061b0' }}>Visual Brand</span>?
          </h2>
          <p style={{ fontSize: '20px', color: 'white', opacity: 0.85, marginBottom: '40px', lineHeight: '1.6' }}>
            Join hundreds of brands who trust us to make their visuals stand out. Let\'s create designs that don\'t just look good—they convert.
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
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
