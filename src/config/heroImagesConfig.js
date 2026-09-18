
export function getImageAsset(path, globMap) {
    const asset = globMap[path]?.default;

    return typeof asset === 'string' ? asset : asset?.src || '';
}

// LQIP
const heroLqip = import.meta.glob('/src/assets/**/*.avif', {
    query: '?w=20&blur=5&as=metadata',
    eager: true,
});

// Responsive srcset
const heroSrcset = import.meta.glob('/src/assets/**/*.avif', {
    query: '?w=400;800;1200;1920&format=avif&as=srcset',
    eager: true,
});

// Fallback
const heroFallback = import.meta.glob('/src/assets/**/*.avif', {
    query: '?w=1200&format=avif',
    eager: true,
});

// Build image configuration
function buildHeroSrc(imagePath) {
    return {
        srcSet: getImageAsset(imagePath, heroSrcset),
        src: {
            src: getImageAsset(imagePath, heroFallback) || imagePath,
            lqip: getImageAsset(imagePath, heroLqip),
        },
    };
}

// Hero image configuration
export const heroImagesConfig = {
    heroWide: buildHeroSrc('/src/assets/hero/hero_section_wide.avif'),
    heroMobile: buildHeroSrc('/src/assets/hero/hero_section.avif'),
    cta: buildHeroSrc('/src/assets/CTA_image.avif'),
    logoIdea: buildHeroSrc('/src/assets/logo_idea.avif'),
};
