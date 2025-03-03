import { Twitter, FaceBook, Tiktok, Instagram } from '../assets/icons';

export const SOCIAL_ICONS = [
  { src: Twitter, alt: 'Twitter' },
  { src: FaceBook, alt: 'Facebook' },
  { src: Tiktok, alt: 'TikTok' },
  { src: Instagram, alt: 'Instagram' },
];

export const FOOTER_MENU = [
  {
    title: 'Services',
    items: [
      { id: 1, name: 'Bonus program' },
      { id: 2, name: 'Gift cards' },
      { id: 3, name: 'Credit and payment' },
      { id: 4, name: 'Service contracts' },
      { id: 5, name: 'Non-cash account' },
      { id: 6, name: 'Payment' },
    ],
  },
  {
    title: 'Assistance to the buyer',
    items: [
      { id: 11, name: 'Find an order' },
      { id: 12, name: 'Terms of delivery' },
      { id: 13, name: 'Exchange and return of goods' },
      { id: 14, name: 'Guarantee' },
      { id: 15, name: 'Frequently asked questions' },
      { id: 16, name: 'Terms of use of the site' },
    ],
  },
];

export const CATEGORY_MAP = {
  phones: 1,
  computers: 2,
  'smart watches': 3,
  cameras: 4,
  headphones: 5,
  gaming: 6,
};

export const FILTER_LIST = [
  {
    title: 'Brand',
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Xiaomi' },
      { id: 3, name: 'Poco' },
    ],
  },
  {
    title: 'Battery capacity',
    items: [
      { id: 4, name: 'Apple' },
      { id: 5, name: 'Banana' },
      { id: 6, name: 'Cheese' },
      { id: 7, name: 'Dried Mango' },
      { id: 8, name: 'Egg' },
    ],
  },
  {
    title: 'Screen type',
    items: [{ id: 9, name: 'Orange' }],
  },
];
