import React, {useState,  useRef, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import shirt from './Images/d1.jpg';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';



function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
 
  return (
    <Router>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>
                      &#9776;
                  </button>
                  <Link to='/'>amazona</Link>
                  
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign In</a>
              </div>
      
          </header>
          <aside className="sidebar">
              <h3>Shopping category</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>
                  x
              </button>
              <ul>
                  <li>
                      <a href="">Pants</a>
                  </li>
                  <li>
                      <a href="">Shirts</a>
                  </li>
              </ul>

          </aside>
          <main className="main">
              <div className="content">
                <Routes>
                  <Route path='/product/:id' element={<ProductScreen />}/> 
                  <Route path='/' exact={true} element={<HomeScreen />} />
                  
                </Routes>
                  
              </div>
              
          </main>
          <footer className="footer">
              All right reserverd
          </footer>
      </div> 
    </Router>
    
  );
}

export default App;
