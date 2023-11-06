import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/navbar.jsx"
import Home from './pages/Home';
import Categories from './pages/Categories';
import SubCategory from './pages/SubCategory';
import CheckoutPage from './pages/Checkout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from './actions/shop';
import BookingPage from './pages/Bookings';
import { getOrders } from './actions/shop';
import Auth from './pages/Auth';
import Notifications from './pages/Notifications';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getOrders())
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: JSON.parse(localStorage.getItem('Profile'))
    })
  })
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/bookings' element={<BookingPage />} />
        <Route path='/auth' element={<Auth />} />
        <Route exact path='/notifications' element={<Notifications />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<SubCategory />} />
        <Route path='/categories/:catId/book/:clinId' element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
