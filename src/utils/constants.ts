export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    category: 'Electronics',
    image: '/images/bluetooth-headphone.png', // Placeholder image 
    rating: 4,
    stock: 50
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 199.99,
    description: 'Track your fitness, receive notifications, and more with this advanced smartwatch.',
    category: 'Electronics',
    image: '/images/smart-watch.jpg', // Placeholder image
    rating: 5,
    stock: 30
  },
  {
    id: '3',
    name: 'Wireless Mechanical Keyboard',
    price: 89.99,
    description: 'Mechanical keyboard with RGB lighting and wireless connectivity.',
    category: 'Electronics',
    image: '/images/keyboard.jpg', // Placeholder image
    rating: 4,
    stock: 45
  },
  {
    id: '4',
    name: 'Noise Cancelling Earbuds',
    price: 129.99,
    description: 'True wireless earbuds with active noise cancellation.',
    category: 'Electronics',
    image: '/images/earbuds.jpg', // Placeholder image
    rating: 5,
    stock: 60
  },
];

export const adminMenuItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
  { name: 'Products', path: '/admin/products', icon: '📦' },
  { name: 'Orders', path: '/admin/orders', icon: '📝' },
  { name: 'Customers', path: '/admin/customers', icon: '👥' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
];