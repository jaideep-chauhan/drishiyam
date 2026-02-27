import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="about">
      <style>{`
        html, body { overflow-x: hidden; width: 100%; }
      `}</style>
      <NavBar />

      {/* Ambient Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '60%', right: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <section style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <h1 className="text-[56px] md:text-[68px] font-bold leading-[1.1] mb-6" style={{ color: 'white' }}>
            We Don\'t Just Create Content.<br />
            <span style={{ color: '#0061b0' }}>We Build Brands That Last.</span>
          </h1>
          <p className="text-[18px] md:text-[21px]" style={{ color: 'white', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto', opacity: 0.85 }}>
            Behind every viral post, polished website, and stunning design is a team that believes your success isn\'t optional—it\'s inevitable. We\'re not just another agency. We\'re your growth partner.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="text-[45px] md:text-[56px] font-bold mb-6" style={{ color: 'white', lineHeight: '1.2' }}>
              Our <span style={{ color: '#0061b0' }}>Mission</span>
            </h2>
            <p className="text-[19px] md:text-[21px]" style={{ color: 'white', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto', opacity: 0.9 }}>
              To empower creators, entrepreneurs, and businesses to dominate their industries through world-class content, strategic branding, and data-driven marketing.
            </p>
          </div>

          {/* Values Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Obsessed With Results',
                desc: 'We don\'t chase vanity metrics. Every campaign, every design, every line of code is built to drive measurable growth.',
                icon: '📈'
              },
              {
                title: 'Speed Without Compromise',
                desc: 'Trends move fast. So do we. Get your content delivered in days—without sacrificing quality or creativity.',
                icon: '⚡'
              },
              {
                title: 'Transparency Always',
                desc: 'No hidden fees. No ghosting. No surprises. You\'ll always know what we\'re doing, why we\'re doing it, and what comes next.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(0, 97, 176, 0.4)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  boxShadow: '0 0 30px rgba(0, 97, 176, 0.2), inset 0 0 20px rgba(0, 97, 176, 0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#0061b0';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 97, 176, 0.4), inset 0 0 30px rgba(0, 97, 176, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.4)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 97, 176, 0.2), inset 0 0 20px rgba(0, 97, 176, 0.05)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{value.icon}</div>
                <h3 className="text-[24px] md:text-[26px] font-bold mb-4" style={{ color: 'white' }}>{value.title}</h3>
                <p className="text-[16px] md:text-[17px]" style={{ color: 'white', opacity: 0.8, lineHeight: '1.6' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="text-[45px] md:text-[56px] font-bold text-center mb-12" style={{ color: 'white', lineHeight: '1.2' }}>
            How <span style={{ color: '#0061b0' }}>Drishyam Media</span> Was Born
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(0, 97, 176, 0.3)',
              borderRadius: '20px',
              padding: '48px',
              boxShadow: '0 0 30px rgba(0, 97, 176, 0.2)',
            }}>
              <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>
                It started with a simple frustration: <strong style={{ color: '#0061b0' }}>why do only the biggest brands get world-class creative support?</strong>
              </p>
              <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>
                We watched talented creators struggle with inconsistent branding, slow turnaround times, and agencies that ghosted them after taking their money. Meanwhile, corporate giants had entire in-house teams producing content 24/7.
              </p>
              <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>
                So we built Drishyam Media to level the playing field. <strong style={{ color: '#0061b0' }}>A creative powerhouse accessible to everyone</strong>—from solopreneurs to scaling startups—without the enterprise price tag.
              </p>
              <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.8', opacity: 0.9 }}>
                Today, we\'ve helped over <strong style={{ color: '#0061b0' }}>500+ brands</strong> generate millions of views, build loyal audiences, and scale their businesses. And we\'re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-[45px] md:text-[56px] font-bold text-center mb-16" style={{ color: 'white', lineHeight: '1.2' }}>
            By The <span style={{ color: '#0061b0' }}>Numbers</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { number: '500+', label: 'Brands Transformed', icon: '🚀' },
              { number: '10M+', label: 'Views Generated', icon: '👁️' },
              { number: '98%', label: 'Client Retention', icon: '❤️' },
              { number: '24/7', label: 'Support Available', icon: '💬' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid #0061b0',
                  borderRadius: '20px',
                  padding: '40px 24px',
                  textAlign: 'center',
                  boxShadow: '0 0 30px rgba(0, 97, 176, 0.3), inset 0 0 20px rgba(0, 97, 176, 0.05)',
                  transition: 'all 0.3s ease',
                }}
                className="hover:scale-105"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 97, 176, 0.5), inset 0 0 30px rgba(0, 97, 176, 0.1)';
                  e.currentTarget.style.borderColor = '#0078d4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 97, 176, 0.3), inset 0 0 20px rgba(0, 97, 176, 0.05)';
                  e.currentTarget.style.borderColor = '#0061b0';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{stat.icon}</div>
                <div className="text-[44px] md:text-[48px] font-bold mb-2" style={{ color: '#0061b0' }}>{stat.number}</div>
                <p className="text-[18px] md:text-[20px]" style={{ color: 'white', opacity: 0.9 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional - can add team photos later) */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="text-[45px] md:text-[56px] font-bold mb-12" style={{ color: 'white', lineHeight: '1.2' }}>
            Meet The <span style={{ color: '#0061b0' }}>Dream Team</span>
          </h2>
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid rgba(0, 97, 176, 0.3)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 0 30px rgba(0, 97, 176, 0.2)',
          }}>
            <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.7', marginBottom: '24px', opacity: 0.9 }}>
              We\'re a tight-knit crew of designers, developers, strategists, and storytellers who live and breathe digital marketing.
            </p>
            <p className="text-[18px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.7', opacity: 0.9 }}>
              <strong style={{ color: '#0061b0' }}>Every project gets treated like it\'s our own.</strong> Because when you win, we win. That\'s the Drishyam difference.
            </p>
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
            Ready to <span style={{ color: '#0061b0' }}>Work Together</span>?
          </h2>
          <p className="text-[18px] md:text-[20px] mb-8" style={{ color: 'white', opacity: 0.85, lineHeight: '1.6' }}>
            Let\'s turn your vision into viral content. Get in touch and let\'s build something incredible.
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
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
