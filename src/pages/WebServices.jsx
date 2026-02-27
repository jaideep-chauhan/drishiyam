import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function WebServices() {
  const navigate = useNavigate();

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const services = [
    {
      title: 'E-Commerce Websites',
      tagline: 'Sell More Online',
      description: 'High-converting online stores with seamless checkout, payment integration, and inventory management that turn visitors into customers.',
      features: ['Custom Shopping Cart', 'Payment Gateway', 'Product Management', 'Order Tracking', 'Customer Accounts']
    },
    {
      title: 'Business Websites',
      tagline: 'Build Authority Online',
      description: 'Professional websites that establish credibility, showcase your services, and generate leads automatically.',
      features: ['Modern Design', 'Lead Capture Forms', 'SEO Optimized', 'Mobile Responsive', 'Content Management']
    },
    {
      title: 'Landing Pages',
      tagline: 'Convert Like Crazy',
      description: 'Single-page powerhouses designed for one goal: converting visitors into customers, subscribers, or leads.',
      features: ['Conversion Focused', 'A/B Testing Ready', 'Fast Loading', 'Analytics Integration', 'Lead Magnets']
    },
    {
      title: 'SaaS & Web Apps',
      tagline: 'Build Your Platform',
      description: 'Custom web applications with user dashboards, authentication, and real-time features that scale with your business.',
      features: ['User Authentication', 'Admin Dashboard', 'API Integration', 'Real-time Updates', 'Database Management']
    },
    {
      title: 'Portfolio Websites',
      tagline: 'Showcase Your Work',
      description: 'Stunning portfolio sites that highlight your best work and help you land more clients and opportunities.',
      features: ['Project Galleries', 'Contact Forms', 'Testimonials', 'Blog Integration', 'Social Links']
    },
    {
      title: 'Custom Solutions',
      tagline: 'Anything You Need',
      description: 'Unique web solutions tailored to your specific needs, from booking systems to membership platforms.',
      features: ['Custom Features', 'Third-party APIs', 'Advanced Workflows', 'Scalable Architecture', 'Ongoing Support']
    }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="web services">
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
            Web Development That Turns <span style={{ color: '#0061b0' }}>Visitors Into Revenue</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'white', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', opacity: 0.85 }}>
            Fast, beautiful, and conversion-optimized websites built with modern tech that grow your business while you sleep.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            What We <span style={{ color: '#0061b0' }}>Build</span>
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

      {/* Tech Stack Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Built With <span style={{ color: '#0061b0' }}>Modern Tech</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'white', opacity: 0.8, textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            We use cutting-edge technologies that are fast, secure, and scalable—so your website grows with your business.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
            {['React', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Express', 'Vite', 'Firebase', 'Supabase', 'Vercel'].map((tech, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.background = 'rgba(0, 97, 176, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
                }}
              >
                <p style={{ fontSize: '18px', color: 'white', fontWeight: '600' }}>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Websites Matter Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            Why a <span style={{ color: '#0061b0' }}>Professional Website</span> Matters
          </h2>
          <p style={{ fontSize: '18px', color: 'white', opacity: 0.8, marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            Your website is your 24/7 salesperson, brand ambassador, and growth engine. Here\'s what the data says.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { stat: '75%', label: 'judge credibility based on website design' },
              { stat: '57%', label: 'won\'t recommend poorly designed sites' },
              { stat: '94%', label: 'of traffic comes from first impressions' },
              { stat: '0.05s', label: 'to form an opinion about your site' }
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

      {/* Development Process */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            Our <span style={{ color: '#0061b0' }}>Development</span> Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'We understand your goals, audience, and requirements to craft the perfect blueprint' },
              { step: '02', title: 'Design & Prototype', desc: 'Beautiful mockups and wireframes you\'ll approve before we write a single line of code' },
              { step: '03', title: 'Development & Testing', desc: 'Clean, efficient code built with best practices and tested across all devices' },
              { step: '04', title: 'Launch & Support', desc: 'We deploy, optimize, and provide ongoing support to keep your site running smoothly' }
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

      {/* What's Included Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '60px', lineHeight: '1.2' }}>
            Every Website <span style={{ color: '#0061b0' }}>Includes</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🚀', title: 'Lightning Fast', desc: 'Optimized for speed with <1s load times that keep visitors engaged.' },
              { icon: '📱', title: 'Mobile Responsive', desc: 'Perfect on every device—phones, tablets, desktops, you name it.' },
              { icon: '🔍', title: 'SEO Optimized', desc: 'Built to rank on Google with proper structure and meta tags.' },
              { icon: '🔒', title: 'Secure & Safe', desc: 'SSL certificates, security headers, and best practices built-in.' },
              { icon: '📊', title: 'Analytics Ready', desc: 'Track visitors, conversions, and behavior from day one.' },
              { icon: '🛠️', title: 'Easy to Update', desc: 'Simple CMS or admin panel to manage your content yourself.' }
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
            Ready to Build Your <span style={{ color: '#0061b0' }}>Dream Website</span>?
          </h2>
          <p style={{ fontSize: '20px', color: 'white', opacity: 0.85, marginBottom: '40px', lineHeight: '1.6' }}>
            Join 300+ businesses who chose us to build their online presence. Let\'s create a website that works as hard as you do.
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
