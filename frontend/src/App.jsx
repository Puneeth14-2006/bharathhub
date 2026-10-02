import { Routes, Route, Navigate } from 'react-router-dom'

import Landing from './pages/landing/Landing.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'

import CustomerLayout from './layouts/CustomerLayout.jsx'
import ShopLayout from './layouts/ShopLayout.jsx'
import DeliveryLayout from './layouts/DeliveryLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

import CustomerDashboard from './pages/customer/Dashboard.jsx'
import CustomerShops from './pages/customer/Shops.jsx'
import CustomerCategories from './pages/customer/Categories.jsx'
import CustomerOrders from './pages/customer/Orders.jsx'
import CustomerWishlist from './pages/customer/Wishlist.jsx'
import CustomerCart from './pages/customer/Cart.jsx'
import CustomerTrackOrder from './pages/customer/TrackOrder.jsx'
import CustomerWallet from './pages/customer/Wallet.jsx'
import CustomerProfile from './pages/customer/Profile.jsx'
import CustomerSettings from './pages/customer/Settings.jsx'

import ShopDashboard from './pages/shop/Dashboard.jsx'
import ShopOrders from './pages/shop/Orders.jsx'
import ShopProducts from './pages/shop/Products.jsx'
import ShopInventory from './pages/shop/Inventory.jsx'
import ShopSales from './pages/shop/Sales.jsx'
import ShopCustomers from './pages/shop/Customers.jsx'
import ShopProfile from './pages/shop/Profile.jsx'
import ShopReports from './pages/shop/Reports.jsx'
import ShopSettings from './pages/shop/Settings.jsx'

import DeliveryDashboard from './pages/delivery/Dashboard.jsx'
import DeliveryOrders from './pages/delivery/Orders.jsx'
import DeliveryDeliveries from './pages/delivery/Deliveries.jsx'
import DeliveryEarnings from './pages/delivery/Earnings.jsx'
import DeliveryHistory from './pages/delivery/History.jsx'
import DeliveryNavigation from './pages/delivery/NavigationPage.jsx'
import DeliveryProfile from './pages/delivery/Profile.jsx'
import DeliverySettings from './pages/delivery/Settings.jsx'

import AdminDashboard from './pages/admin/Dashboard.jsx'
import AdminUsers from './pages/admin/Users.jsx'
import AdminCustomers from './pages/admin/Customers.jsx'
import AdminShops from './pages/admin/Shops.jsx'
import AdminDeliveryPartners from './pages/admin/DeliveryPartners.jsx'
import AdminOrders from './pages/admin/Orders.jsx'
import AdminPayments from './pages/admin/Payments.jsx'
import AdminComplaints from './pages/admin/Complaints.jsx'
import AdminReports from './pages/admin/Reports.jsx'
import AdminAnalytics from './pages/admin/Analytics.jsx'
import AdminSettings from './pages/admin/Settings.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer */}
      <Route
        path="/customer"
        element={
          <ProtectedRoute role="customer">
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="shops" element={<CustomerShops />} />
        <Route path="categories" element={<CustomerCategories />} />
        <Route path="orders" element={<CustomerOrders />} />
        <Route path="wishlist" element={<CustomerWishlist />} />
        <Route path="cart" element={<CustomerCart />} />
        <Route path="track" element={<CustomerTrackOrder />} />
        <Route path="wallet" element={<CustomerWallet />} />
        <Route path="profile" element={<CustomerProfile />} />
        <Route path="settings" element={<CustomerSettings />} />
      </Route>

      {/* Shop Owner */}
      <Route
        path="/shop"
        element={
          <ProtectedRoute role="shop">
            <ShopLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ShopDashboard />} />
        <Route path="orders" element={<ShopOrders />} />
        <Route path="products" element={<ShopProducts />} />
        <Route path="inventory" element={<ShopInventory />} />
        <Route path="sales" element={<ShopSales />} />
        <Route path="customers" element={<ShopCustomers />} />
        <Route path="profile" element={<ShopProfile />} />
        <Route path="reports" element={<ShopReports />} />
        <Route path="settings" element={<ShopSettings />} />
      </Route>

      {/* Delivery Partner */}
      <Route
        path="/delivery"
        element={
          <ProtectedRoute role="delivery">
            <DeliveryLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DeliveryDashboard />} />
        <Route path="orders" element={<DeliveryOrders />} />
        <Route path="deliveries" element={<DeliveryDeliveries />} />
        <Route path="earnings" element={<DeliveryEarnings />} />
        <Route path="history" element={<DeliveryHistory />} />
        <Route path="navigation" element={<DeliveryNavigation />} />
        <Route path="profile" element={<DeliveryProfile />} />
        <Route path="settings" element={<DeliverySettings />} />
      </Route>

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="shops" element={<AdminShops />} />
        <Route path="delivery-partners" element={<AdminDeliveryPartners />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="complaints" element={<AdminComplaints />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
