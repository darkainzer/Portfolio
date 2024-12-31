function onDOMLoaded() {
    const header = document.querySelector('.top');

    header.style.position = 'relative';

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.7) 90%)"; // Increased size and darker default
    overlay.style.transition = 'opacity 0.2s ease';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '1';

    header.insertBefore(overlay, header.firstChild);

    header.addEventListener('mousemove', (event) => {
        const rect = header.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.7) 98%)`;
        overlay.style.opacity = '1';
    });

    header.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
    });

}



document.addEventListener('DOMContentLoaded', onDOMLoaded);


