
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.querySelector('.search-button');
  
  // Update clock
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    document.getElementById('time').textContent = timeString;
  }
  
  // Initialize clock and update every minute
  updateClock();
  setInterval(updateClock, 60000);
  
  // Handle search function
  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  }
  
  // Event listener for search button
  searchButton.addEventListener('click', performSearch);
  
  // Event listener for Enter key in search input
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Create dynamic stars
  function createStars() {
    const scene = document.querySelector('.scene');
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.top = `${Math.random() * 60}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`;
      scene.appendChild(star);
    }
  }
  
  // Add CSS for twinkling animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.2; }
      50% { opacity: 1; }
      100% { opacity: 0.2; }
    }
  `;
  document.head.appendChild(style);
  
  // Create stars
  createStars();
  
  // Focus the search input when page loads
  searchInput.focus();
});
</lov-write>
