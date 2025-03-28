import { Routes, Route } from "react-router-dom";
import "./App.css";

import AuthLayout from "./components/auth/layout.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import AdminLayout from "./components/admin-view/index.jsx";
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import AdminFeatures from "./pages/admin-view/features.jsx";
import AdminProducts from "./pages/admin-view/products";
import AdminOrder from "./pages/admin-view/orders";
import ShoppingViewLayout from "./components/shopping-view/layout";
import NotFound from "./components/not-found";
import ShoppingAccount from "./pages/shopping view/account";
import ShoppingCheckOut from "./pages/shopping view/checkout";
import ShoppingHome from "./pages/shopping view/home";
import ShoppingListing from "./pages/shopping view/listing";
import CheckAuth from "./components/common/check-auth";
import UnAuth from "./components/unauth/index";

function App() {
  const isAuthenticated = false
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingViewLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckOut />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
        </Route>
        <Route path="unauth" element={<UnAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
