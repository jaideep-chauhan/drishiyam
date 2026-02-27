// Navigation helper to be used with onClick handlers
export function navigateToPage(page) {
  const routes = {
    'home': '/',
    'about': '/about',
    'service': '/services',
    'services': '/services',
    'review': '/testimonials',
    'reviews': '/testimonials',
    'blog': '/blog',
    'graphic': '/services/graphic',
    'web': '/services/web',
    'video': '/services/video',
    'testimonials': '/testimonials',
    'contact': '#footer'
  };

  const route = routes[page.toLowerCase()];

  if (route) {
    if (route.startsWith('#')) {
      // Scroll to section
      const element = document.querySelector(route);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      // Navigate to route
      window.location.href = route;
    }
  }
}

export function makeNavigationClickable() {
  // This will be called on component mount to make nav items clickable
  if (typeof window === 'undefined') return;

  setTimeout(() => {
    const navItems = document.querySelectorAll('[data-name="NavBar"] p, [data-name="NavBar"] div[class*="text"]');

    navItems.forEach((item) => {
      const text = item.textContent?.trim().toLowerCase();
      if (text && ['home', 'about', 'service', 'services', 'review', 'reviews', 'blog', 'contact'].includes(text)) {
        const element = item;
        element.style.cursor = 'pointer';
        element.onclick = (e) => {
          e.preventDefault();
          navigateToPage(text);
        };
      }
    });

    // Make "Discover more" buttons work
    const buttons = document.querySelectorAll('[data-name*="button"], [data-name*="batton"]');
    buttons.forEach((button) => {
      const element = button;
      element.style.cursor = 'pointer';
      element.onclick = (e) => {
        e.preventDefault();
        // Scroll down to next section
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      };
    });
  }, 100);
}
