import { Outlet, Link } from "react-router-dom";
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <>

      <nav id="navbar" class="navbar navbar-expand-lg navbar-light">

        {/* Nav Logo */}
        <a class="navbar-brand" href="#"><img id="navLogo" src={require("../assets/NHCS-rmbg.png")} alt="NHCS"/></a>

        {/* Nav Items */}
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/validationform">VALIDATION FORM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/alertform">ALERT FORM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">LOGIN</a>
          </li>
        </ul>
        
      </nav> 

      <Outlet />

    </>
  )
};

export default Navbar;