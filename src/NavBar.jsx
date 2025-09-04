import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav>
        <p className="logo_nav">Dev-job</p>
        <ul>
          <li>
            <a>Developpeurs</a>
          </li>
          <li>
            <a>Recruteurs</a>
          </li>
          <li>
            <a>Actualites dev</a>
          </li>
          <li>
            <a>IA</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
