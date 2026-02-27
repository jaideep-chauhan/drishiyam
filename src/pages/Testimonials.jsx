import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';
import testimonialAvatar from '../assets/bd83ccb6d0330e546cc0e5bfdb7f21637ac1d831.png';

export default function Testimonials() {
  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const testimonials = [
    {
      name: 'Scott Henry',
      role: 'Content Creator',
      avatar: testimonialAvatar,
      text: "These guys don't mess around. We saw results from month one. If you want to grow your business, look no further.",
      rating: 5,
      result: '+300% engagement'
    },
    {
      name: 'William',
      role: 'Content Creator',
      avatar: testimonialAvatar,
      text: 'My results and online presence went through the roof more or less overnight, mind-blowing!',
      rating: 5,
      result: '10x reach in 30 days'
    },
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Owner',
      avatar: testimonialAvatar,
      text: 'The website they built for us increased our sales by 300%. Absolutely incredible work!',
      rating: 5,
      result: '+300% sales conversion'
    },
    {
      name: 'Mike Anderson',
      role: 'YouTuber',
      avatar: testimonialAvatar,
      text: 'Their video editing service is top-notch. My engagement has never been higher!',
      rating: 5,
      result: '2M+ views in 60 days'
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      avatar: testimonialAvatar,
      text: 'Professional, creative, and always delivers on time. Highly recommend their services!',
      rating: 5,
      result: '5 campaigns, 5 wins'
    },
    {
      name: 'David Rodriguez',
      role: 'Startup Founder',
      avatar: testimonialAvatar,
      text: 'They helped us establish a strong brand identity. Our designs are now industry-leading.',
      rating: 5,
      result: 'Brand recognized in 3 months'
    }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="testimonials">
      <style>{`
        html, body { overflow-x: hidden; width: 100%; }
      `}</style>
      <NavBar />

      {/* Ambient Glows - Matching HomePage Theme */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '25%', left: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '800px', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '1000px', background: '#0061b0', opacity: 0.04, filter: 'blur(280px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="text-[60px] md:text-[74px] font-bold leading-[1.1] mb-6">
            <span style={{ color: 'white' }}>Creators Who Trusted Us.<br /></span>
            <span style={{ color: '#0061b0' }}>Results That Speak.</span>
          </h1>
          <p className="text-[17px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', opacity: 0.85 }}>
            We don't just make content—we build movements. Here's what happens<br />
            when creators partner with a team obsessed with your success.
          </p>
        </div>
      </section>

      {/* Stats Section with Glow Effects */}
      <section style={{ padding: '48px 32px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {[
            { number: '500+', label: 'Brands Elevated', icon: '🚀' },
            { number: '10M+', label: 'Views Generated', icon: '👁️' },
            { number: '98%', label: 'Client Retention', icon: '❤️' },
            { number: '3-7 Days', label: 'Average Turnaround', icon: '⚡' }
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
      </section>

      {/* Testimonials Grid */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-[45px] md:text-[60px] font-bold text-center mb-16" style={{ color: 'white', lineHeight: '1.2' }}>
            Real Creators. <span style={{ color: '#0061b0' }}>Real Growth.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 97, 176, 0.2)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
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
                {/* Result Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#0061b0',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 0 20px rgba(0, 97, 176, 0.5)',
                }}>
                  {testimonial.result}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      border: '3px solid #0061b0',
                      boxShadow: '0 0 20px rgba(0, 97, 176, 0.4)',
                    }}
                  />
                  <div>
                    <h3 className="text-[20px] font-bold" style={{ color: 'white' }}>{testimonial.name}</h3>
                    <p className="text-[15px]" style={{ color: 'white', opacity: 0.7 }}>{testimonial.role}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#0061b0', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p className="text-[17px] md:text-[18px]" style={{ color: 'white', lineHeight: '1.6', opacity: 0.9 }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Story-driven */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="text-[50px] md:text-[60px] font-bold text-center mb-12" style={{ color: 'white', lineHeight: '1.2' }}>
            We\'re <span style={{ color: '#0061b0' }}>Drishyam Media</span>
          </h2>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="text-[19px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.7', opacity: 0.9 }}>
              We started with a simple belief: <strong style={{ color: '#0061b0' }}>every creator deserves a spotlight</strong>,
              not just the ones with big budgets. Most agencies talk about "growth." We obsess over it.
            </p>
            <p className="text-[19px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.7', opacity: 0.9 }}>
              <strong style={{ color: '#0061b0' }}>We\'re not here to "just edit."</strong> We\'re your creative partner who knows
              what makes people stop scrolling, click, share, and remember. From viral-ready clips to conversion-focused
              websites, we craft content that works as hard as you do.
            </p>
            <p className="text-[19px] md:text-[20px]" style={{ color: 'white', lineHeight: '1.7', opacity: 0.9 }}>
              Whether you\'re building from zero or scaling to millions, we bring the strategy, the creativity,
              and the execution that turns visions into results. <strong style={{ color: '#0061b0' }}>Your success story?
              That\'s our portfolio.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-[50px] md:text-[60px] font-bold text-center mb-16" style={{ color: 'white', lineHeight: '1.2' }}>
            Why Creators <span style={{ color: '#0061b0' }}>Choose Us</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'No Cookie-Cutter Content',
                desc: 'Every brand has a unique voice. We find yours and amplify it—not copy someone else\'s playbook.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                ),
                title: 'Lightning-Fast Turnaround',
                desc: 'Trends move fast. So do we. Get your content delivered in days, not weeks—without sacrificing quality.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                ),
                title: 'Data-Driven Strategy',
                desc: 'We don\'t guess what works. We analyze, test, and optimize until your content is unstoppable.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                ),
                title: 'You\'re Always in the Loop',
                desc: 'No ghosting. No delays. We communicate clearly, deliver on time, and make revisions hassle-free.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                ),
                title: 'Results You Can Track',
                desc: 'More views. Higher engagement. Better conversions. We measure what matters and show you the proof.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                    <path d="M12 2l-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><path d="M3 13.5h8v8H3z"/>
                  </svg>
                ),
                title: 'Full-Spectrum Expertise',
                desc: 'Video editing. Web design. Graphics. Strategy. One team, all the skills you need to dominate.'
              }
            ].map((reason, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(0, 97, 176, 0.4)',
                  borderRadius: '20px',
                  padding: '32px',
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
                <div style={{
                  width: '72px',
                  height: '72px',
                  margin: '0 auto 20px',
                  background: '#004a8f',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(0, 97, 176, 0.6)',
                }}>
                  {reason.icon}
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold mb-3" style={{ color: 'white' }}>{reason.title}</h3>
                <p className="text-[15px] md:text-[16px]" style={{ color: 'white', opacity: 0.8, lineHeight: '1.6' }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="text-[50px] md:text-[60px] font-bold text-center mb-16" style={{ color: 'white', lineHeight: '1.2' }}>
            How We <span style={{ color: '#0061b0' }}>Work Together</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'We learn about your brand, goals, and audience. No sales pitch—just a real conversation.'
              },
              {
                step: '02',
                title: 'Custom Strategy',
                desc: 'We craft a tailored plan designed specifically for your needs—not a one-size-fits-all template.'
              },
              {
                step: '03',
                title: 'Creation & Collaboration',
                desc: 'We bring your vision to life with drafts, feedback loops, and revisions until it\'s perfect.'
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                desc: 'Your content goes live, and we track performance to refine and maximize results over time.'
              }
            ].map((process, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '16px',
                  padding: '32px',
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
                <div className="text-[48px] md:text-[56px] font-bold" style={{ color: '#0061b0', opacity: 0.4, minWidth: '80px' }}>
                  {process.step}
                </div>
                <div>
                  <h3 className="text-[24px] md:text-[28px] font-bold mb-2" style={{ color: 'white' }}>{process.title}</h3>
                  <p className="text-[16px] md:text-[18px]" style={{ color: 'white', opacity: 0.8, lineHeight: '1.6' }}>
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
            Ready to Be Our Next <span style={{ color: '#0061b0' }}>Success Story</span>?
          </h2>
          <p className="text-[18px] md:text-[20px] mb-8" style={{ color: 'white', opacity: 0.85, lineHeight: '1.6' }}>
            Let\'s turn your vision into viral content. Get in touch, and let's build something amazing.
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
            Let\'s Create Together
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
