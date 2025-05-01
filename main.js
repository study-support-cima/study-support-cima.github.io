document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.parentNode.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Add styles for mobile menu toggle
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .site-nav {
        display: none;
      }
      
      .site-nav.active {
        display: block;
      }
      
      .menu-toggle {
        display: block;
        background: none;
        border: none;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;
      }
      
      .menu-toggle span {
        display: block;
        width: 25px;
        height: 3px;
        margin-bottom: 5px;
        position: relative;
        background: white;
        border-radius: 3px;
      }
      
      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg);
        top: 8px;
      }
      
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg);
        top: -8px;
      }
    }
    
    @media (min-width: 769px) {
      .menu-toggle {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add gallery image lightbox functionality
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length > 0) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    const lightboxImg = document.createElement('img');
    const lightboxClose = document.createElement('span');
    lightboxClose.innerHTML = '&times;';
    lightboxClose.classList.add('lightbox-close');
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxClose);
    document.body.appendChild(lightbox);
    
    // Add lightbox styles
    const lightboxStyle = document.createElement('style');
    lightboxStyle.textContent = `
      .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        justify-content: center;
        align-items: center;
      }
      
      .lightbox.active {
        display: flex;
      }
      
      .lightbox img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      }
      
      .lightbox-close {
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
      }
    `;
    document.head.appendChild(lightboxStyle);
    
    // Add click event to gallery images
    galleryItems.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', function() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close lightbox on outside click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
