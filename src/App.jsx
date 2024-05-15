import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ErrorHandler from "./Pages/ErrorHandler.jsx";
import AdultsProductsPage from "./Pages/AdultsProductsPage.jsx";
import BestSellersProductsPage from "./Pages/BestSellersProductsPage.jsx";
import EducationalProductsPage from "./Pages/EducationalProductsPage.jsx";
import EnglishProductsPage from "./Pages/EnglishProductsPage.jsx";
import KidsAndTeensProductsPage from "./Pages/KidsAndTeensProductsPage.jsx";
import OfferProductsPage from "./Pages/OfferProductsPage.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Cart from "./Pages/Cart.jsx";
import AboutProductPage from "./Pages/AboutProductPage.jsx";
import AuthPage from "./Pages/Authentication/AuthPage.jsx";
import StationeryPage from "./Pages/StationeryPage.jsx";
import CartProvider from "./context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/adults_products" element={<AdultsProductsPage />} />
          <Route path="/best_sellers" element={<BestSellersProductsPage />} />
          <Route path="/educational" element={<EducationalProductsPage />} />
          <Route path="/english_products" element={<EnglishProductsPage />} />
          <Route
            path="/kids_and_teens"
            element={<KidsAndTeensProductsPage />}
          />
          <Route path="/offers" element={<OfferProductsPage />} />
          <Route
            path="/about_product/:category/:id"
            element={<AboutProductPage />}
          />
          <Route path="/stationery" element={<StationeryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<ErrorHandler />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
