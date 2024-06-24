import React from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/bootstrap.custom.css";
import "./styles/index.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ProductShow from "./pages/ProductShow";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminRoute from "./components/AdminRoute";
import AllOrders from "./pages/admin/AllOrders";
import AllProducts from "./pages/admin/AllProducts";
import ProductEdit from "./pages/admin/ProductEdit";
import AllUsers from "./pages/admin/AllUsers";
import UserEdit from "./pages/admin/UserEdit";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/page/:pageNumber" index={true} element={<Home />} />
      <Route path="/search/:keyword" element={<Home />} />
      <Route path="/search/:keyword/page/:pageNumber" element={<Home />} />
      <Route path="/cart" index={true} element={<Cart />} />
      <Route path="/products/:id" index={true} element={<ProductShow />} />
      <Route path="/login" index={true} element={<Login />} />
      <Route path="/register" index={true} element={<Register />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="/shipping" index element={<Shipping />} />
        <Route path="/payment" index element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orders/all" element={<AllOrders />} />
        <Route
          path="/admin/orders/all/page/:pageNumber"
          element={<AllOrders />}
        />
        <Route path="/admin/products/all" element={<AllProducts />} />
        <Route
          path="/admin/products/all/page/:pageNumber"
          element={<AllProducts />}
        />
        <Route path="/admin/products/:id/edit" element={<ProductEdit />} />
        <Route path="/admin/users/all" element={<AllUsers />} />
        <Route
          path="/admin/users/all/page/:pageNumber"
          element={<AllUsers />}
        />
        <Route path="/admin/users/:id/edit" element={<UserEdit />} />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider
          deferLoading={true}
          options={{ "client-id": "test" }}
        >
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
