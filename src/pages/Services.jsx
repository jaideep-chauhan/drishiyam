import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const services = [
    {
      title: 'Video Editing',
      tagline: 'Viral Content That Stops The Scroll',
      description: 'Transform raw footage into thumb-stopping content that drives engagement, builds audiences, and converts viewers into loyal fans.',
      features: [
        'Short-form content (TikTok, Reels, Shorts)',
        'Long-form YouTube videos',
        'Podcast editing & audiograms',
        'Social media ads',
        'Motion graphics & animations'
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      path: '/services/video',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Graphic Design',
      tagline: 'Brand Identity That Demands Attention',
      description: 'Eye-catching visuals that tell your brand story, build recognition, and make you unforgettable in a sea of sameness.',
      features: [
        'Social media graphics & templates',
        'Brand identity & logo design',
        'Marketing collateral',
        'Presentation decks',
        'Infographics & data visualization'
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      path: '/services/graphic',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Web Development',
      tagline: 'Websites That Work As Hard As You Do',
      description: 'High-performance, conversion-focused websites that turn visitors into customers and make your competitors jealous.',
      features: [
        'Custom website development',
        'E-commerce platforms',
        'Landing pages that convert',
        'SEO optimization',
        'Mobile-first responsive design'
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      path: '/services/web',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="services">
      <style>{`
        html, body { overflow-x: hidden; width: 100%; }
      `}</style>
      <NavBar />

      {/* Ambient Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '70%', right: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <section style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <h1 className="text-[56px] md:text-[72px] font-bold leading-[1.1] mb-6" style={{ color: 'white' }}>
            Services That <span style={{ color: '#0061b0' }}>Scale Your Brand</span>
          </h1>
          <p className="text-[18px] md:text-[21px]" style={{ color: 'white', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto', opacity: 0.85 }}>
            From viral videos to conversion-focused websites, we deliver the creative firepower you need to dominate your market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '24px',
                  padding: '48px',
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 97, 176, 0.2)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.boxShadow = '0 12px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 97, 176, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 97, 176, 0.2)';
                }}
                onClick={() => navigate(service.path)}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '48px', alignItems: 'center' }}>
                  {/* Icon */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: '#004a8f',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 40px rgba(0, 97, 176, 0.6)',
                    flexShrink: 0
                  }}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-[36px] md:text-[42px] font-bold mb-2" style={{ color: 'white' }}>
                      {service.title}
                    </h2>
                    <p className="text-[19px] md:text-[21px] mb-4" style={{ color: '#0061b0', fontWeight: '600' }}>
                      {service.tagline}
                    </p>
                    <p className="text-[17px] md:text-[18px] mb-6" style={{ color: 'white', opacity: 0.85, lineHeight: '1.7' }}>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                      {service.features.map((feature, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#0061b0', fontSize: '20px' }}>✓</span>
                          <span className="text-[15px] md:text-[16px]" style={{ color: 'white', opacity: 0.8 }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      style={{
                        background: '#0061b0',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '45px',
                        fontSize: '17px',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 20px rgba(0, 97, 176, 0.5)',
                      }}
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = '#0078d4';
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 120, 212, 0.7)';
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = '#0061b0';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 97, 176, 0.5)';
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(service.path);
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="text-[45px] md:text-[56px] font-bold text-center mb-16" style={{ color: 'white', lineHeight: '1.2' }}>
            Our <span style={{ color: '#0061b0' }}>Process</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We learn your goals, audience, and vision through a detailed strategy call.'
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'We craft a custom plan tailored to your brand—no cookie-cutter templates.'
              },
              {
                step: '03',
                title: 'Creation',
                desc: 'Our team brings your vision to life with world-class design and execution.'
              },
              {
                step: '04',
                title: 'Optimization',
                desc: 'We track performance, refine, and scale what works to maximize results.'
              }
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  boxShadow: '0 0 25px rgba(0, 97, 176, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 97, 176, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 97, 176, 0.2)';
                }}
              >
                <div className="text-[48px] md:text-[56px] font-bold mb-4" style={{ color: '#0061b0', opacity: 0.4 }}>
                  {step.step}
                </div>
                <h3 className="text-[24px] md:text-[26px] font-bold mb-3" style={{ color: 'white' }}>{step.title}</h3>
                <p className="text-[15px] md:text-[16px]" style={{ color: 'white', opacity: 0.8, lineHeight: '1.6' }}>
                  {step.desc}
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
          background: 'rgba(0, 0, 0, 0.6)',
          border: '3px solid #0061b0',
          borderRadius: '24px',
          padding: '64px 32px',
          boxShadow: '0 0 60px rgba(0, 97, 176, 0.4), inset 0 0 40px rgba(0, 97, 176, 0.1)',
        }}>
          <h2 className="text-[40px] md:text-[50px] font-bold mb-6" style={{ color: 'white', lineHeight: '1.2' }}>
            Ready to <span style={{ color: '#0061b0' }}>Level Up</span>?
          </h2>
          <p className="text-[18px] md:text-[20px] mb-8" style={{ color: 'white', opacity: 0.85, lineHeight: '1.6' }}>
            Let\'s talk about your project and how we can help you achieve your goals.
          </p>
          <button
            style={{
              background: '#0061b0',
              color: 'white',
              padding: '16px 48px',
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
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 120, 212, 0.8), 0 12px 30px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0061b0';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 97, 176, 0.6), 0 8px 20px rgba(0, 0, 0, 0.3)';
            }}
            onClick={() => document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
