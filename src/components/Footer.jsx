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
    <footer style={{ background: '#000', borderTop: '1px solid white', padding: '48px 0 24px' }} id="footer" data-name="footer">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        {/* Call to Action */}
        <div style={{ marginBottom: '40px' }}>
          <h2 className="text-[28px] md:text-[32px] font-bold text-white">
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
