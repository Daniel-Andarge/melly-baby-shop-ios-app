/** 
 * ==================== STATUS BAR FIX ==================== 
 * Forces solid #f8f8f8 background on Android and prevents transparency 
 */
const initStatusBar = () => {
    const statusBarSettings = {
        style: 'dark',
        color: '#f8f8f8',
        overlay: false,
        blur: false
    };

    if (typeof median !== 'undefined') {
        median.statusbar.set(statusBarSettings); 
        setTimeout(() => median.statusbar.set(statusBarSettings), 50);
        
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --status-bar-height: 24px;
            }
            body {
                padding-top: var(--status-bar-height) !important;
                margin-top: 0 !important;
            }
        `;
        document.head.appendChild(style);
    } else {
        console.error("Median status bar method not available!");
    }
};

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
    console.error('Initialization Error:", e);
});