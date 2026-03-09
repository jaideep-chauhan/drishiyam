import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/87dc8e368800a8db2a02f8b1a1d4d0ac02bba735.png';

export default function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setMenuOpen(false);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const handleContactClick = () => {
    setMenuOpen(false);
    setTimeout(() => {
      const footer = document.querySelector('#footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Review', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <nav
      data-name="NavBar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '70px',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 50,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
          position: 'relative',
        }}
      >
        {/* Logo — Left */}
        <img
          src={logo}
          alt="Drishyam Studio"
          style={{
            height: '48px',
            width: 'auto',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          onClick={() => handleNavClick('/')}
        />

        {/* Nav Items — Absolute Center */}
        <div
          className="hidden md:flex items-center gap-10"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {navItems.map((item) => (
            <p
              key={item.label}
              style={{
                color: 'white',
                fontSize: '17px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                fontFamily: "'Inter', sans-serif",
                margin: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0061b0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* Contact Button — Right */}
        <button
          className="hidden md:block"
          style={{
            background: '#0061b0',
            color: 'white',
            padding: '8px 28px',
            borderRadius: '9999px',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            border: '1px solid rgba(0, 97, 176, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 97, 176, 0.3)',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0078d4';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 97, 176, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0061b0';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 97, 176, 0.3)';
          }}
          onClick={handleContactClick}
        >
          Contact
        </button>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="flex flex-col gap-5 md:hidden"
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 20px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {navItems.map((item) => (
            <p
              key={item.label}
              style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                margin: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0061b0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </p>
          ))}
          <button
            style={{
              background: '#0061b0',
              color: 'white',
              padding: '10px 28px',
              borderRadius: '9999px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content',
            }}
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
