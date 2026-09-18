import { getImageAsset } from "./bundles";

export function getBySlug(slug) {
  return categoryData
    .flatMap(category => category.combos)
    .find(combo => combo.slug === slug);
}

// 1. LQIP Placeholders (Base64 or small image URL)
const lqipImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=20&blur=5&as=metadata',
  eager: true,
});

// 2. SrcSet Strings (WebP formats)
const srcsetImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=400;800;1200&format=webp&as=srcset',
  eager: true,
});

// 3. Main Fallback Image Source
const fallbackImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=800&format=webp',
  eager: true,
});

function buildSrc(imagePath) {
  return {
    srcSet: getImageAsset(imagePath, srcsetImages),
    src: {
      src: getImageAsset(imagePath, fallbackImages) || imagePath,
      lqip: getImageAsset(imagePath, lqipImages)
    }
  };
}


// Hardcoded data reading directly from the glob maps using string paths
export const categoryData = [
  {
    id: "category-kitchen-001",
    category: 'cocina',
    description: '',
    combos: [
      {
        id: 'kitchen-combo-001',
        slug: 'cocina-basica',
        title: 'basico',
        listPrice: 747,
        price: 689,
        description: 'Organiza tu cocina con repisas flotantes que mantienen vajilla, especias y utensilios siempre al alcance. Una solución práctica que aporta orden y un estilo moderno a cualquier cocina.',
        content: '(3 grande 78cm)',
        ...buildSrc('/src/assets/products/kitchen_2.png')
      },

      
      {
        id: 'kitchen-combo-002',
        slug: 'cocina-deluxe',
        title: 'deluxe',
        listPrice: 1494,
        price: 1349,
        description: 'Dale un toque de diseño a tu cocina con repisas flotantes que destacan vajilla, cristalería, plantas y accesorios decorativos. La combinación perfecta entre almacenamiento inteligente y elegancia contemporánea.',
        content: '(6 grande 78cm)',
        ...buildSrc('/src/assets/products/kitchen.png')
      },
    ]
  },
  {
    id: "category-restroom-001",
    category: 'baño',
    description: '',
    combos: [
      {
        id: 'restroom-combo-001',
        slug: 'baño-basica',
        title: 'basico',
        listPrice: 699,
        price: 639,
        description: 'Mantén tu baño limpio y organizado con repisas flotantes que ofrecen el espacio ideal para toallas, artículos de higiene y pequeños detalles decorativos. Funcionalidad y estilo para el día a día.',
        content: '(2 mediano 65cm + 1 grande 78)',
        ...buildSrc('/src/assets/products/restroom.png')
      },
      {
        id: 'restroom-combo-002',
        slug: 'baño-completo',
        title: 'completo',
        listPrice: 723,
        price: 679,
        description: 'Convierte tu baño en un espacio tipo spa con repisas flotantes que combinan diseño, elegancia y practicidad. Perfectas para exhibir toallas, accesorios y decoración con un acabado sofisticado.',
        content: '(6 grande 78cm)',
        ...buildSrc('/src/assets/products/restroom_2.png')
      }
    ]
  },
  {
    id: "category-office/bedroom-001",
    category: 'recamara / oficina',
    description: '',
    combos: [
      {
        id: 'office-combo-001',
        slug: 'oficina-basica',
        title: 'Office',
        listPrice: 663,
        price: 619,
        description: 'Transforma tu oficina en un entorno ejecutivo con repisas flotantes que fusionan diseño vanguardista, orden y profesionalismo. Ideales para organizar archivos confidenciales, exhibir reconocimientos y destacar elementos corporativos.',
        content: '(1 mediano 65cm + 2 grande 78cm)',
        ...buildSrc('/src/assets/products/office.png')
      },
      {
        id: 'bedroom-combo-001',
        slug: 'recamara-basica',
        title: 'recamara',
        listPrice: 663,
        price: 619,
        description: 'Transforma tu recámara con repisas flotantes modernas, ideales para exhibir decoración, libros, fotografías y objetos esenciales. La combinación perfecta de organización, calidez y un estilo limpio y contemporáneo.',
        content: '(1 mediano 65cm + 2 grande 78cm)',
        ...buildSrc('/src/assets/products/bedroom.png')
      }
    ]
  },    
  {
    id: "category-livingroom-001",
    category: 'sala',
    description: '',
    combos: [
      {
        id: 'livingroom-combo-001',
        slug: 'sala-galeria',
        title: 'Gallery',
        listPrice: 1350,
        price: 1239,
        description: 'Dale un nuevo aire a tu sala con repisas flotantes que realzan cuadros, plantas, libros y piezas decorativas. La combinación ideal de almacenamiento funcional y diseño moderno para un espacio acogedor.',
        content: '(6 mediano 65cm)',
        ...buildSrc('/src/assets/products/livingroom.png')
      }
    ]
  },
  {
    id: "category-entrance-001",
    category: 'Entrada',
    description: '',
    combos: [
      {
        id: 'entrance-combo-001',
        slug: 'entrada-premium',
        title: 'Premium',
        listPrice: 4000,
        price: 3500,
        description: 'Sustituye muebles voluminosos por repisas flotantes que crean una sensación de mayor amplitud. Ideales para exhibir decoración, arte y objetos esenciales con un estilo moderno y minimalista.',
        content: '(1 extra grande 2 metros)',
        ...buildSrc('/src/assets/products/entrance.png')
      }
    ]
  },
];