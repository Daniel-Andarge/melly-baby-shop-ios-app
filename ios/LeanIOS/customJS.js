/** 
 * ==================== VIEWPORT MANAGER ==================== 
 * Handles mobile viewport optimizations 
 */
const initMobileViewport = () => {
    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.insertBefore(meta, document.head.firstChild);
    }

    const setVh = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    window.addEventListener('resize', setVh);
    setVh();
};


/** 
 * ==================== ERROR HANDLING ==================== 
 */
window.addEventListener('error', (e) => {
    console.error('Initialization Error:', e);
});