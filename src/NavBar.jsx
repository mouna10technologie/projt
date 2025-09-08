import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav>

        <p className="logo_nav">Dev-job</p>
        <ul>
          <li>
           <Link to="/">Home</Link> 
          </li>
         <li>
           <Link to="/Developpeurs"> Developpeurs</Link> 
          </li>
          <li>
            <Link to="/Recruteurs"> Recruteurs</Link>
          </li>
          <li>
           <Link to="/Actualites_dev"> Actualites_dev</Link>
          </li>
          <li>
           <Link to="/IA"> IA</Link>
          </li>
          <li>
           <Link to="/Contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
}
export default NavBar;
