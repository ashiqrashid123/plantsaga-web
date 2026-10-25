// Preserve the existing shared download URL's device-to-store routing.
// Both store links remain available when scripting is disabled or navigation fails.
(() => {
  const agent = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(agent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    window.location.replace('https://apps.apple.com/us/app/plantsaga/id6757720295');
  } else if (/android/i.test(agent)) {
    window.location.replace('https://play.google.com/store/apps/details?id=plant.care.app');
  }
})();
