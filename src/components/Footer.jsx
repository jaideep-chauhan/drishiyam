import { useNavigate } from 'react-router-dom';
import logo from '../assets/87dc8e368800a8db2a02f8b1a1d4d0ac02bba735.png';
import instagramIcon from '../assets/9c713b827e3d1faac8fd82add5a6e8c056fb69fc.png';
import linkedinIcon from '../assets/2e2cbb0528428cc45fa6c67bcbe1cbd815d5188c.png';
import facebookIcon from '../assets/bfbfbaf49f383890db0f3cdb5ea6010c929d919f.png';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 24px' }} id="footer" data-name="footer">
      {/* Vertical Blue Light Streaks Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #000000 0%, #001a33 15%, #00264d 50%, #001a33 100%)', zIndex: 0 }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: 0,
            left: `${(i / 14) * 100}%`,
            width: `${100 / 14}%`,
            height: '100%',
            background: `linear-gradient(to bottom, transparent 0%, rgba(0,97,176,${0.15 + Math.sin(i * 0.8) * 0.08}) 15%, rgba(0,97,176,${0.25 + Math.sin(i * 1.2) * 0.1}) 40%, rgba(0,97,176,${0.2 + Math.cos(i * 0.6) * 0.08}) 65%, rgba(0,97,176,${0.12 + Math.sin(i) * 0.06}) 100%)`,
            borderLeft: `1px solid rgba(0,97,176,${0.1 + Math.sin(i * 1.5) * 0.05})`,
            borderRight: `1px solid rgba(0,97,176,${0.06 + Math.cos(i * 1.3) * 0.03})`,
            opacity: 0.5 + Math.sin(i * 0.9) * 0.5,
          }} />
        ))}
        {/* Soft center glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center 45%, rgba(0,97,176,0.2) 0%, transparent 55%)', pointerEvents: 'none' }} />
      </div>

      <div style={{ width: '100%', padding: '0 64px', position: 'relative', zIndex: 1 }}>
        {/* Call to Action */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 'bold', color: 'white', lineHeight: 1.1, fontFamily: "'Inter', sans-serif" }}>
            Ready to Make Your Brand Stand Out?
          </h2>
        </div>

        {/* Footer Content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', gap: '48px' }}>
          {/* Logo, Tagline & Social Icons */}
          <div style={{ flex: '0 0 240px' }}>
            <img src={logo} alt="Drishyam Media" style={{ height: '40px', width: 'auto', marginBottom: '12px' }} />
            <p className="text-[13px] text-white/80" style={{ marginBottom: '20px', lineHeight: '1.5' }}>
              Crafting designs & strategies<br />
              that help your brand shine online.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <img src={facebookIcon} alt="WhatsApp" style={{ height: '32px', width: '32px', objectFit: 'cover' }} />
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <img src={instagramIcon} alt="Instagram" style={{ height: '32px', width: '32px', objectFit: 'cover' }} />
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <img src={linkedinIcon} alt="LinkedIn" style={{ height: '32px', width: '32px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/about')}
              >
                About us
              </p>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/')}
              >
                Home
              </p>
            </div>
          </div>

          {/* Quick Links Column 2 */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/services')}
              >
                Services
              </p>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/testimonials')}
              >
                Reviews
              </p>
            </div>
          </div>

          {/* Quick Links Column 3 */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('#footer')}
              >
                Contact
              </p>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </p>
              <p
                className="text-[15px] text-white cursor-pointer hover:text-[#0061b0] transition-colors"
                onClick={() => handleNavClick('/services')}
              >
                Pricing
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)', marginBottom: '16px' }}></div>

        {/* Copyright */}
        <div style={{ textAlign: 'center' }}>
          <p className="text-[13px] text-white/70">
            © 2025 Drishyam Media Marketing Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
