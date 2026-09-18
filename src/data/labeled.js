import { getImageAsset } from "./bundles";

const labeledLqip = import.meta.glob('/src/assets/labeled/*.png', {
  query: '?w=20&blur=5&as=metadata',
  eager: true,
});

const labeledSrcset = import.meta.glob('/src/assets/labeled/*.png', {
  query: '?w=400;800;1200&format=webp&as=srcset',
  eager: true,
});

const labeledFallback = import.meta.glob('/src/assets/labeled/*.png', {
  query: '?w=800&format=webp',
  eager: true,
});

function buildLabledSrc(imagePath) {
  return {
    srcSet: getImageAsset(imagePath, labeledSrcset),
    src: {
      src: getImageAsset(imagePath, labeledFallback) || imagePath,
      lqip: getImageAsset(imagePath, labeledLqip)
    }
  };
}

// Config dictionary for the main labeled board images per variant
export const labeledImagesConfig = {
  grande: buildLabledSrc('/src/assets/labeled/board_grande_labeled.png'),
  mediano: buildLabledSrc('/src/assets/labeled/board_mediano_labeled.png'),
  chico: buildLabledSrc('/src/assets/labeled/board_chico_labeled.png')
};