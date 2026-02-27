import { useNavigate } from 'react-router-dom';
import logo from '../assets/87dc8e368800a8db2a02f8b1a1d4d0ac02bba735.png';

export default function NavBar() {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element doesn't exist on current page, scroll to bottom
        // This handles the case where footer is always at bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const handleContactClick = () => {
    // Scroll to footer on current page (footer is on all pages)
    setTimeout(() => {
      const footer = document.querySelector('#footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm h-[70px] border-b border-[rgba(255,255,255,0.08)] z-50" data-name="NavBar">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Drishyam Media"
            className="h-[38px] w-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick('/')}
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          <p
            className="text-white text-[16px] font-medium cursor-pointer hover:text-[#0061b0] transition-colors"
            onClick={() => handleNavClick('/')}
          >
            Home
          </p>
          <p
            className="text-white text-[16px] font-medium cursor-pointer hover:text-[#0061b0] transition-colors"
            onClick={() => handleNavClick('/about')}
          >
            About
          </p>
          <div className="relative group">
            <p
              className="text-white text-[16px] font-medium cursor-pointer hover:text-[#0061b0] transition-colors"
              onClick={() => handleNavClick('/services')}
            >
              Services
            </p>
            <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-sm border border-[#0061b0] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] shadow-xl">
              <p
                className="px-6 py-3 text-white text-[16px] hover:text-[#0061b0] cursor-pointer rounded-t-[12px] hover:bg-[#0061b0]/10 transition-colors"
                onClick={() => handleNavClick('/services/graphic')}
              >
                Graphic Design
              </p>
              <p
                className="px-6 py-3 text-white text-[16px] hover:text-[#0061b0] cursor-pointer hover:bg-[#0061b0]/10 transition-colors"
                onClick={() => handleNavClick('/services/web')}
              >
                Web Development
              </p>
              <p
                className="px-6 py-3 text-white text-[16px] hover:text-[#0061b0] cursor-pointer rounded-b-[12px] hover:bg-[#0061b0]/10 transition-colors"
                onClick={() => handleNavClick('/services/video')}
              >
                Video Editing
              </p>
            </div>
          </div>
          <p
            className="text-white text-[16px] font-medium cursor-pointer hover:text-[#0061b0] transition-colors"
            onClick={() => handleNavClick('/testimonials')}
          >
            Reviews
          </p>
          <p
            className="text-white text-[16px] font-medium cursor-pointer hover:text-[#0061b0] transition-colors"
            onClick={() => handleNavClick('/blog')}
          >
            Blog
          </p>
        </div>

        {/* Contact Button */}
        <button
          style={{
            background: '#0061b0',
            color: 'white',
            padding: '6px 28px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 97, 176, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0078d4';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 97, 176, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0061b0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 97, 176, 0.3)';
          }}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
