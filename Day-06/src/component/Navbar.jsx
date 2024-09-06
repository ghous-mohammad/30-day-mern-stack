
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (


    <div className="navbar">
      
      <nav className="navigation">
        <ul className="unorderlist">
          <li><NavLink  to="/" activeClassName="active" exact>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/our-mission" activeClassName="active">Our Mission</NavLink></li>
          <li><NavLink to="/view-pages" activeClassName="active">View Pages</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
