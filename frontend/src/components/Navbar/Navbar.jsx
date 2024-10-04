// Navbar.js
import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("booking");



  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          home
        </Link>
        <a href='#explore-menu' onClick={() => setMenu("booking")} className={menu === "booking" ? "active" : ""}>
          booking
        </a>
        <a href='#app-download' onClick={() => setMenu("prices")} className={menu === "prices" ? "active" : ""}>
          prices
        </a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token?<button onClick={() => setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" />
              <p>Orders</p>
            </li>
            <hr />
            <li onClick={logout}>
              <img src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
  
};

export default Navbar;

// import React, { useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Navbar = ({setShowLogin}) => {

//     const[menu,setMenu] = useState("booking");
//   return (
//     <div className='navbar'>
//       <img src={assets.logo} alt=""  className="logo"/>
//       <ul className="navbar-menu">
//         <Link to='/' onclick={()=>setMenu("home")} className={menu==="home"?" active":""}>home</Link>
//         <a href='#explore-menu' onclick={()=>setMenu("booking")} className={menu==="booking"?" active":""}>booking</a>
//         <a href='#app-download' onclick={()=>setMenu("prices")} className={menu==="prices"?" active":""}>prices</a>
//         <a href='#footer' onclick={()=>setMenu("contact")} className={menu==="contact"?" active":""}>contact</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//             <img src={assets.basket_icon} alt="" />
//             <div className="dot"></div>
//         </div>
//         <button onClick={()=>setShowLogin(true)}>Sign In</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
