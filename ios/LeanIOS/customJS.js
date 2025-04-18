// Mobile Viewport Initialization
// =============================
function initMobileViewport() {
  // Only add viewport meta if it doesn't exist
  if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
  }

  // Disable zoom gestures (optional – Median might handle this natively)
  document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
}

// Wait for DOM content before initializing
document.addEventListener('DOMContentLoaded', function () {
  initMobileViewport();

  // Cart Badge Sync with WooCommerce Mini Cart
  // ==========================================
  function updateCartBadge() {
    const cartCountElement = document.querySelector('.mini-cart-number.set-cart-number');
    const badge = document.getElementById('cart-badge');

    let count = 0;

    if (cartCountElement) {
      const raw = parseInt(cartCountElement.innerText);
      if (!isNaN(raw)) count = raw;
    }

    if (badge) {
      badge.innerText = count;
      badge.style.display = 'inline'; // Always show (or 'none' if you want to hide when 0)

      // Add custom style
      badge.style.backgroundColor = '#81d1e5';
      badge.style.color = '#ffffff';
      badge.style.borderRadius = '12px';
      badge.style.padding = '2px 6px';
      badge.style.fontSize = '12px';
      badge.style.minWidth = '20px';
      badge.style.textAlign = 'center';
    } else {
      console.warn("cart-badge element not found");
    }
  }

  // Observe cart changes across the page
  const observer = new MutationObserver(updateCartBadge);
  observer.observe(document.body, { childList: true, subtree: true });

  // Run initially and after short delay to catch late loads
  updateCartBadge();
  setTimeout(updateCartBadge, 1000);
});



// Error Handling
// ==============
window.addEventListener('error', function (e) {
  console.error('Median Custom JS Error:', e.message, e.filename, e.lineno);
});
