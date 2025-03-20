document.addEventListener('mousemove', (e) => {
    document.getElementById('mouse-x').textContent = e.clientX;
    document.getElementById('mouse-y').textContent = e.clientY;
  
    // Create a trail effect
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.getElementById('trail-container').appendChild(trail);
  
    setTimeout(() => trail.remove(), 500);
  });
  
  document.addEventListener('click', () => {
    const clickMessage = document.getElementById('click-message');
    clickMessage.classList.remove('hidden');
    clickMessage.classList.add('visible');
  
    setTimeout(() => {
      clickMessage.classList.remove('visible');
      clickMessage.classList.add('hidden');
    }, 1000);
  });