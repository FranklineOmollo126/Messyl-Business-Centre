    // mobile toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinksDiv = document.getElementById('navLinks');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        navLinksDiv.classList.toggle('show');
      });
    }
    // contact form simple alert
    const form = document.getElementById('contactForm');
    if(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Thank you! We have received your message. A representative from Messyl Business Centre will contact you within 1 hour.');
        form.reset();
      });
    }
    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
          if (navLinksDiv.classList.contains('show')) navLinksDiv.classList.remove('show');
        }
      });
    });
  
