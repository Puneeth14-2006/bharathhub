export const categories = [
  { name: 'Grocery', icon: 'ShoppingBasket', color: 'leaf' },
  { name: 'Bakery', icon: 'Croissant', color: 'saffron' },
  { name: 'Hardware', icon: 'Hammer', color: 'navy' },
  { name: 'Paint', icon: 'PaintBucket', color: 'saffron' },
  { name: 'Pharmacy', icon: 'Pill', color: 'leaf' },
  { name: 'Electronics', icon: 'Plug', color: 'navy' },
  { name: 'Clothing', icon: 'Shirt', color: 'saffron' },
  { name: 'Home & Living', icon: 'Sofa', color: 'leaf' },
  { name: 'Restaurants', icon: 'UtensilsCrossed', color: 'saffron' },
  { name: 'Stationery', icon: 'PenLine', color: 'navy' },
  { name: 'Beauty', icon: 'Sparkles', color: 'leaf' },
  { name: 'More', icon: 'LayoutGrid', color: 'navy' },
]

export const shops = [
  {
    id: 'shop-1',
    name: 'More Supermarket',
    category: 'Grocery',
    rating: 4.6,
    reviews: 1204,
    distance: '2.5 km',
    open: true,
    eta: '20-25 min',
    tags: ['Grocery', 'Daily Needs'],
  },
  {
    id: 'shop-2',
    name: 'Sri Bakery',
    category: 'Bakery',
    rating: 4.5,
    reviews: 812,
    distance: '3.1 km',
    open: true,
    eta: '25-30 min',
    tags: ['Bakery', 'Snacks'],
  },
  {
    id: 'shop-3',
    name: 'City Hardware',
    category: 'Hardware',
    rating: 4.3,
    reviews: 356,
    distance: '1.8 km',
    open: true,
    eta: '30-35 min',
    tags: ['Hardware', 'Tools'],
  },
  {
    id: 'shop-4',
    name: 'Bharath Pharmacy',
    category: 'Pharmacy',
    rating: 4.8,
    reviews: 990,
    distance: '0.9 km',
    open: true,
    eta: '15-20 min',
    tags: ['Pharmacy', 'Wellness'],
  },
  {
    id: 'shop-5',
    name: 'Smart Electronics',
    category: 'Electronics',
    rating: 4.4,
    reviews: 621,
    distance: '4.2 km',
    open: false,
    eta: '40-45 min',
    tags: ['Electronics', 'Mobiles'],
  },
]

export const products = [
  { id: 'p1', name: 'Rice 5kg', category: 'Grocery', price: 350, stock: 45, status: 'In Stock', shopId: 'shop-1' },
  { id: 'p2', name: 'Sugar 1kg', category: 'Grocery', price: 48, stock: 20, status: 'In Stock', shopId: 'shop-1' },
  { id: 'p3', name: 'Milk 1L', category: 'Grocery', price: 30, stock: 5, status: 'Low Stock', shopId: 'shop-1' },
  { id: 'p4', name: 'Maggi 4-pack', category: 'Grocery', price: 56, stock: 0, status: 'Out of Stock', shopId: 'shop-1' },
  { id: 'p5', name: 'Butter Croissant', category: 'Bakery', price: 45, stock: 30, status: 'In Stock', shopId: 'shop-2' },
  { id: 'p6', name: 'Sourdough Loaf', category: 'Bakery', price: 120, stock: 12, status: 'In Stock', shopId: 'shop-2' },
]

export const popularProducts = [
  { id: 'pp1', name: 'Rice 5kg', shop: 'More Supermarket', price: 350 },
  { id: 'pp2', name: 'Butter Croissant', shop: 'Sri Bakery', price: 45 },
  { id: 'pp3', name: 'Paracetamol Strip', shop: 'Bharath Pharmacy', price: 22 },
  { id: 'pp4', name: 'LED Bulb 9W', shop: 'Smart Electronics', price: 99 },
]

export const customerOrders = [
  { id: '#12345', shop: 'More Supermarket', status: 'Preparing', eta: '25 min', amount: 428, date: '12 Sep 2026' },
  { id: '#12344', shop: 'Sri Bakery', status: 'Delivered', eta: '—', amount: 260, date: '10 Sep 2026' },
  { id: '#12343', shop: 'City Hardware', status: 'Delivered', eta: '—', amount: 640, date: '05 Sep 2026' },
]

export const shopOrders = [
  { id: '#12345', customer: 'Ramesh', items: 3, amount: 428, status: 'Preparing' },
  { id: '#12344', customer: 'Priya', items: 2, amount: 260, status: 'Accepted' },
  { id: '#12343', customer: 'Arjun', items: 5, amount: 630, status: 'Delivered' },
  { id: '#12342', customer: 'Sneha', items: 1, amount: 312, status: 'Accepted' },
  { id: '#12341', customer: 'Vijay', items: 4, amount: 540, status: 'Preparing' },
]

export const shopStats = {
  todaysOrders: 24,
  totalSales: 12480,
  pendingOrders: 6,
  totalProducts: 128,
}

export const inventory = [
  { name: 'Rice 5kg', stock: 45, status: 'In Stock' },
  { name: 'Sugar 1kg', stock: 20, status: 'In Stock' },
  { name: 'Milk 1L', stock: 5, status: 'Low Stock' },
  { name: 'Maggi 4-pack', stock: 0, status: 'Out of Stock' },
]

export const availableDeliveries = [
  { id: '#12347', shop: 'Grocery Store', distance: '2.1 km', amount: 320 },
  { id: '#12346', shop: 'More Supermarket', distance: '3.4 km', amount: 450 },
  { id: '#12345', shop: 'Bakery Shop', distance: '1.8 km', amount: 290 },
  { id: '#12344', shop: 'Hardware Store', distance: '4.2 km', amount: 620 },
]

export const deliveryStats = {
  todaysDeliveries: 8,
  todaysEarnings: 1240,
  pendingDeliveries: 2,
  completedDeliveries: 6,
}

export const currentDelivery = {
  orderId: '#12345',
  pickup: 'More Supermarket',
  drop: 'Ramesh Kumar, 4th Cross, Shivamogga',
  distance: '3.2 km',
  customerName: 'Ramesh Kumar',
}

export const deliveryHistory = [
  { id: '#12299', shop: 'Sri Bakery', date: '25 Sep', amount: 60, status: 'Completed' },
  { id: '#12280', shop: 'City Hardware', date: '24 Sep', amount: 90, status: 'Completed' },
  { id: '#12261', shop: 'Bharath Pharmacy', date: '24 Sep', amount: 40, status: 'Completed' },
]

export const adminStats = {
  totalUsers: 125430,
  totalShops: 8420,
  deliveryPartners: 45821,
  totalOrders: 1250000,
  revenue: 48250000,
}

export const recentActivity = [
  { text: 'New shop registered — Sri Bakery', time: '5 mins ago', type: 'shop' },
  { text: 'Order #12345 completed', time: '12 mins ago', type: 'order' },
  { text: 'Delivery partner joined — Ravi Kumar', time: '18 mins ago', type: 'delivery' },
  { text: 'User complaint raised — issue with delivery', time: '25 mins ago', type: 'complaint' },
  { text: 'New order placed — #12346', time: '32 mins ago', type: 'order' },
]

export const topCategories = [
  { name: 'Grocery', share: 32, color: '#1E9C5F' },
  { name: 'Food', share: 24, color: '#EC7A2A' },
  { name: 'Hardware', share: 15, color: '#0F3D63' },
  { name: 'Others', share: 29, color: '#8C9BA6' },
]

export const adminUsers = [
  { id: 'U-1001', name: 'Puneeth H', role: 'Customer', location: 'Shivamogga', status: 'Active' },
  { id: 'U-1002', name: 'More Supermarket', role: 'Shop Owner', location: 'Shivamogga', status: 'Active' },
  { id: 'U-1003', name: 'Ravi Kumar', role: 'Delivery Partner', location: 'Shivamogga', status: 'Active' },
  { id: 'U-1004', name: 'Sneha R', role: 'Customer', location: 'Davangere', status: 'Suspended' },
  { id: 'U-1005', name: 'City Hardware', role: 'Shop Owner', location: 'Shivamogga', status: 'Pending' },
]

export const adminShops = [
  { id: 'S-201', name: 'More Supermarket', owner: 'Manjunath K', category: 'Grocery', orders: 3120, status: 'Active' },
  { id: 'S-202', name: 'Sri Bakery', owner: 'Lakshmi N', category: 'Bakery', orders: 1890, status: 'Active' },
  { id: 'S-203', name: 'City Hardware', owner: 'Suresh P', category: 'Hardware', orders: 640, status: 'Active' },
  { id: 'S-204', name: 'Smart Electronics', owner: 'Farhan A', category: 'Electronics', orders: 410, status: 'Pending' },
]

export const adminDeliveryPartners = [
  { id: 'D-301', name: 'Ravi Kumar', location: 'Shivamogga', deliveries: 1240, rating: 4.8, status: 'Online' },
  { id: 'D-302', name: 'Naveen S', location: 'Shivamogga', deliveries: 980, rating: 4.6, status: 'Offline' },
  { id: 'D-303', name: 'Abdul R', location: 'Davangere', deliveries: 760, rating: 4.7, status: 'Online' },
]

export const complaints = [
  { id: 'C-501', from: 'Sneha R', subject: 'Late delivery', status: 'Open' },
  { id: 'C-502', from: 'Arjun P', subject: 'Item missing from order', status: 'In Review' },
  { id: 'C-503', from: 'Priya M', subject: 'Wrong item delivered', status: 'Resolved' },
]

export const salesTrend = [18, 24, 20, 32, 28, 40, 36]
