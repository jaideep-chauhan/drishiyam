import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { makeNavigationClickable } from '../utils/navigation';

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    makeNavigationClickable();
  }, []);

  const categories = ['All', 'Video Marketing', 'Design Tips', 'Web Development', 'Social Media', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Video Editing Tricks That Make Content Go Viral',
      excerpt: 'Discover the secret techniques top creators use to make their videos impossible to scroll past. From pacing to hooks, we break down what actually works.',
      category: 'Video Marketing',
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Why Your Brand Needs a Design System (And How to Build One)',
      excerpt: 'Stop recreating the wheel every time you post. Learn how a design system saves time, builds consistency, and makes your brand instantly recognizable.',
      category: 'Design Tips',
      date: 'Feb 8, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'How We Helped a Creator Go From 10K to 500K Followers in 90 Days',
      excerpt: 'A complete breakdown of the content strategy, posting schedule, and editing techniques that led to explosive growth.',
      category: 'Case Studies',
      date: 'Feb 5, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 4,
      title: 'The Anatomy of a High-Converting Landing Page',
      excerpt: 'What separates a landing page that converts at 2% from one that converts at 15%? We reverse-engineer the best performers.',
      category: 'Web Development',
      date: 'Feb 3, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
    },
    {
      id: 5,
      title: 'Instagram Reels vs TikTok: Where Should You Focus in 2026?',
      excerpt: 'Platform algorithms are changing fast. Here\'s where to invest your time for maximum reach and engagement.',
      category: 'Social Media',
      date: 'Jan 30, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop'
    },
    {
      id: 6,
      title: 'Color Psychology in Branding: What Your Palette Says About You',
      excerpt: 'Blue means trust. Red means urgency. But the truth is more nuanced. Learn how to choose colors that actually resonate.',
      category: 'Design Tips',
      date: 'Jan 28, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=500&fit=crop'
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100%', maxWidth: '100vw', position: 'relative', overflow: 'hidden', overflowY: 'auto' }} data-name="blog">
      <style>{`
        html, body { overflow-x: hidden; width: 100%; max-width: 100vw; margin: 0; padding: 0; }
        * { box-sizing: border-box; }
        #root { overflow-x: hidden; max-width: 100vw; }
      `}</style>
      <NavBar />

      {/* Ambient Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: 'min(1200px, 100vw)', height: '1200px', background: '#0061b0', opacity: 0.06, filter: 'blur(300px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '-10%', width: 'min(800px, 80vw)', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '70%', right: '-10%', width: 'min(800px, 80vw)', height: '800px', background: '#0061b0', opacity: 0.05, filter: 'blur(250px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Hero Section */}
      <section style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h1 className="text-[56px] md:text-[68px] font-bold leading-[1.1] mb-6" style={{ color: 'white' }}>
            Insights & <span style={{ color: '#0061b0' }}>Strategies</span>
          </h1>
          <p className="text-[18px] md:text-[21px]" style={{ color: 'white', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto', opacity: 0.85 }}>
            Practical advice, proven strategies, and behind-the-scenes insights to help you grow your brand.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '40px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: selectedCategory === category ? '#0061b0' : 'rgba(0, 0, 0, 0.5)',
                  border: selectedCategory === category ? '2px solid #0061b0' : '2px solid rgba(0, 97, 176, 0.3)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '45px',
                  fontSize: '15px',
                  fontWeight: selectedCategory === category ? 'bold' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category ? '0 0 20px rgba(0, 97, 176, 0.4)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = '#0061b0';
                    e.currentTarget.style.background = 'rgba(0, 97, 176, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = 'rgba(0, 97, 176, 0.3)';
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && featuredPost && (
        <section style={{ padding: '40px 32px 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '2px solid rgba(0, 97, 176, 0.3)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 97, 176, 0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                gap: '0',
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
            >
              <img src={featuredPost.image} alt={featuredPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ padding: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ background: '#0061b0', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                    FEATURED
                  </span>
                  <span className="text-[14px]" style={{ color: 'white', opacity: 0.6 }}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-[32px] md:text-[38px] font-bold mb-4" style={{ color: 'white', lineHeight: '1.2' }}>
                  {featuredPost.title}
                </h2>
                <p className="text-[17px] md:text-[18px] mb-6" style={{ color: 'white', opacity: 0.8, lineHeight: '1.7' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'white', opacity: 0.6, fontSize: '14px' }}>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ padding: '40px 32px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
            {regularPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(0, 97, 176, 0.3)',
                  borderRadius: '20px',
                  overflow: 'hidden',
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
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '28px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <span className="text-[13px]" style={{ color: '#0061b0', fontWeight: 'bold' }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-bold mb-3" style={{ color: 'white', lineHeight: '1.3' }}>
                    {post.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] mb-4" style={{ color: 'white', opacity: 0.7, lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', opacity: 0.5, fontSize: '13px' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
