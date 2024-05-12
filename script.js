document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let isMouseDown = false;

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
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
});
