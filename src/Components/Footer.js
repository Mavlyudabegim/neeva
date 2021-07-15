import "../Styles/Footer.css";
import "../Styles/footer-responsive.css"
import Logo from "../images/Group.png";
import Twitter from "../images/Vector (1).jpg";
import Facebook from "../images/Vector (2).jpg";
import Linkedin from "../images/Vector (3).jpg";
import Instagram from "../images/Frame (2).jpg";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="Footer">
     <div className="row footer-row">
        <div className="row">
        <div className="column logo"><Link><img src={Logo}/></Link></div>
        <div className="second-row">
        <nav className="column navbar-column">
          <ul className="navbar-links">
          <li><Link className="navbar-link">Home</Link></li>
          <li><Link className="navbar-link">Features</Link></li>
          <li><Link className="navbar-link">About</Link></li>
          <li><Link className="navbar-link">Blog</Link></li>
          <li><Link className="navbar-link">Press</Link></li>
          <li><Link className="navbar-link">Community</Link></li>
          <li><Link className="navbar-link">Learn</Link></li>
          </ul>
          </nav>
          <address className="column" style={{fontStyle:"normal"}}>
          <ul className="navbar-links">
          <li><Link className="navbar-link">Contact</Link></li>
          <li><Link className="navbar-link">Careers</Link></li>
          <li><Link className="navbar-link">Terms</Link></li>
          <li><Link className="navbar-link">Privacy</Link></li>
          <li><Link className="navbar-link">Bill of Rights</Link></li>
          <li><Link className="navbar-link">DMCA</Link></li>
          <li><Link className="navbar-link">Neeva Web Crawler</Link></li>
          </ul>
          </address></div></div>
        
          <div className="column icons-column">
            <div className="icons">
            <Link className="icon-link"><img src={Twitter}/></Link>
            <Link className="icon-link"><img src={Facebook}/></Link>
            <Link className="icon-link"><img src={Instagram}/></Link>
            <Link className="icon-link"><img src={Linkedin}/></Link></div>
            <p className="copyright"><span>&copy;</span> 2021 Neeva Inc</p>
          </div>
      </div>
      <hr className="footer-line"/>
    </div>
  );
}

export default Footer;