import {
  Phones,
  PhonesB,
  Computers,
  SmartWatches,
  Cameras,
  Headphones,
  Gaming,
  Twitter,
  FaceBook,
  Tiktok,
  Instagram,
} from '../assets/icons';

export const MAX_LIST_LENGTH = {
  HOME: {
    CATEGORY: 6,
    PRODUCTS: 8,
    BIG_CATEGORY: 4,
  },
  LIST: {
    PRODUCTS: 12,
  },
};

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

export const NAV_LIST = [
  { name: 'Phones', src: Phones },
  { name: 'Computers', src: Computers },
  { name: 'Smart Watches', src: SmartWatches },
  { name: 'Cameras', src: Cameras },
  { name: 'Headphones', src: Headphones },
  { name: 'Gaming', src: Gaming },
];

export const CATEGORY_LIST = [
  { src: PhonesB, name: 'phones' },
  { src: PhonesB, name: 'cameras' },
  { src: PhonesB, name: 'watches' },
  { src: PhonesB, name: 'gaming' },
];

export const MENU_ITEMS = [
  { name: 'New Arrival', id: 2 },
  { name: 'Bestseller', id: 3 },
  { name: 'Featured Product', id: 4 },
];

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

export const DEVICE = {
  mobile: 640,
  tablet: 768,
  notebook_base: 1024,
  notebook_medium: 1280,
  desktop_base: 1440,
  desktop_wide: 1920,
};
