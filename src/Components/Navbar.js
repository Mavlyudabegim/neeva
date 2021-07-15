import '../Styles/Navbar.css'
import "../Styles/navbar-responsive.css"
import {Link} from "react-router-dom";
import Logo from "../images/Vector.svg";
import Hamburger from "../images/bars-solid.svg";
import React, {useState} from 'react';
function Navbar() {
  const [openLinks, setOpenLinks]=useState(false);
  const toggleNavbar=()=>{
    setOpenLinks(!openLinks);
  }

  return (
    <div className="Navbar">
      <div className="leftSide" id={openLinks ? "open":"close"}> 
      <Link className="link"><img src={Logo} alt="There is a logo"/></Link>
      <ul>
         <li> <Link className="link">Sign in</Link></li>
         <li> <Link className="link">Features</Link></li>
         <li> <Link className="link">FAQ</Link></li>
         <li><Link className="link">Blog</Link></li>
         <li><Link className="link">Press</Link></li>
         <li><Link className="link">About</Link></li>
         </ul>  </div>
     
      
    
   
      <button className="hamburger-icon-link" onClick={toggleNavbar}>
          <img src={Hamburger} alt="There is a hamburger-menu icon" width="100%" height="100%"/>
      </button>
    </div>
  );
}

export default Navbar;