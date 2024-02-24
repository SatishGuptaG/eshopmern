import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,ActivationPage,HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage, ProfilePage, ShopCreatePage,SellerActivationPage} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from './reducx/store.js';
import { loadUser } from './reducx/actions/user.js';
import { useSelector } from 'react-redux';
import ProtectedRoute from "./ProtectedRoute.js";


const App = () => {
  const {loading, isAuthenticated} = useSelector((state) => state.user);
  // const { isLoading, isSeller } = useSelector((state) => state.seller);
  useEffect(() => {
     Store.dispatch(loadUser());
     //Store.dispatch(loadSeller());
  }, []);
  return (
   <>
   {
    loading ? (
      null
    ) : (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
           <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/product/:name" element={<ProductDetailsPage />}/>
          <Route path="/best-selling" element={<BestSellingPage />}/>
          <Route path="/events" element={<EventsPage />}/>
          <Route path="/faq" element={<FAQPage />}/>
          
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage/>
            </ProtectedRoute>
          }/>

           {/* shop Routes */}
           <Route path="/shop-create" element={<ShopCreatePage />} />
            {/* <Route path="/shop-login" element={<ShopLoginPage />} /> */}
            {/* <Route
              path="/shop/:id"
              element={
                <SellerProtectedRoute
                isSeller={isSeller}
                >
                  <ShopHomePage />
                </SellerProtectedRoute>
              }
            /> */}

      </Routes>
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    )
   }
   </>
  )
}

export default App
