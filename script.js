document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let isMouseDown = false;
    cursor.style.display = 'none'
    
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
      cursor.style.display = 'block'; // Display cursor on mouse move
    });
    document.addEventListener('mousedown', () => {
      isMouseDown = true;
      cursor.classList.add('cursor-clicked');
      cursor.style.transform = 'scale(1.5)';
    });
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
      cursor.style.transform = 'scale(1)';
      cursor.classList.remove('cursor-clicked');
    });
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none'; // Hide cursor when mouse leaves the window
    });
});
