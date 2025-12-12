/**
 * Helper function to resolve asset paths correctly for both development and production
 * In development: returns /images/...
 * In production (GitHub Pages): returns /Amoruso-Inversiones/images/...
 * 
 * @param {string} path - The asset path (e.g., '/images/logo/logo.png' or 'images/logo/logo.png')
 * @returns {string} The resolved path with the correct base URL
 */
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
