import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './auth/Login'
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'
import RestaurantDetail from './components/RestaurantDetail'
import Cart from './components/Cart'
import Restaurant from './admin/Restaurant'
import MenuAdd from './admin/MenuAdd'
import Orders from './admin/Orders'
import Myorder from './components/Myorder'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/search/:text" element={<SearchPage/>} />
      <Route path="/restaurant/:rid" element={<RestaurantDetail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/verify-email" element={<VerifyEmail/>} />
      <Route path="/admin/restaurant" element={<Restaurant/>} />
      <Route path="/admin/addmenu" element={<MenuAdd/>} />
      <Route path="/admin/orders" element={<Orders/>} />
      <Route path="/order/status" element={<Myorder/>} />
    </Routes>
    </BrowserRouter>                  
  )
}

export default App