export interface GalleryImage {
  src: string;
  alt: string;
  category: 'hair' | 'nails' | 'makeup' | 'bridal';
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/sisesthetics-scraped/podstrigvane-2-min.jpg',
    alt: 'Hair Cutting',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/stailing-2-min.jpg',
    alt: 'Styling',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/boiadisvane-2-min.jpg',
    alt: 'Hair Coloring',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/terapia-1-min.jpg',
    alt: 'Hair Treatment',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/bulka-2-min.jpg',
    alt: 'Bridal Styling',
    category: 'bridal',
  },
  {
    src: '/sisesthetics-scraped/manikiur-2-min.jpg',
    alt: 'Manicure',
    category: 'nails',
  },
  {
    src: '/sisesthetics-scraped/pedikiur-2-min.jpg',
    alt: 'Pedicure',
    category: 'nails',
  },
  {
    src: '/sisesthetics-scraped/grim-2-min.jpg',
    alt: 'Makeup',
    category: 'makeup',
  },
  {
    src: '/sisesthetics-scraped/viber_image_2025-03-19_14-00-54-053.jpg',
    alt: 'Salon Interior',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/20250206_115518-scaled.jpg',
    alt: 'Salon Work',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/1.png',
    alt: 'Beauty Work',
    category: 'hair',
  },
  {
    src: '/sisesthetics-scraped/2.png',
    alt: 'Beauty Work',
    category: 'makeup',
  },
];

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
];

export const contactInfo = {
  phone: '+359 896 034 640',
  email: 'info@sisesthetics.bg',
  address: 'Sofia, Bulgaria',
  social: {
    facebook: 'https://www.facebook.com/sisesthetics',
    instagram: 'https://www.instagram.com/sisestheticshair/',
    tiktok: 'https://www.tiktok.com/@sis_esthetics',
  },
};
