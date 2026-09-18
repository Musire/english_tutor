export function getImageAsset(path, globMap) {
  const asset = globMap[path]?.default;
  return typeof asset === 'string' ? asset : asset?.src || '';
}

// 1. Vite registers these keys exactly as they are written in the string literal below
const heroLqip = import.meta.glob('/src/assets/**/*.avif', {
  query: '?w=20&blur=5&as=metadata',
  eager: true,
});

const heroSrcset = import.meta.glob('/src/assets/**/*.avif', {
  query: '?w=400;800;1200;1920&format=avif&as=srcset', 
  eager: true,
});

const heroFallback = import.meta.glob('/src/assets/**/*.avif', {
  query: '?w=1200&format=avif',
  eager: true,
});

// 2. Helper builder function mapping to the glob dictionaries
function buildHeroSrc(imagePath) {
  return {
    srcSet: getImageAsset(imagePath, heroSrcset),
    src: {
      src: getImageAsset(imagePath, heroFallback) || imagePath,
      lqip: getImageAsset(imagePath, heroLqip)
    }
  };
}

// 3. Config dictionary mapping your specific keys to their exact file paths
// MUST match the glob signature casing and structural pattern perfectly
export const heroImagesConfig = {
  heroWide: buildHeroSrc('/src/assets/hero/hero_section_wide.avif'),
  heroMobile: buildHeroSrc('/src/assets/hero/hero_section.avif'),
  cta: buildHeroSrc('/src/assets/CTA_image.avif'),
  logoIdea: buildHeroSrc('/src/assets/logo_idea.avif')
};
