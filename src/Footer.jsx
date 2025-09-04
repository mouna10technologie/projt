import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="div_globale_footer">
        <div className="footer_rubrique">
          <h3>Rubrique de site:</h3>
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
        </div>
        <div className="div_actualité">
          <h3>Contact:</h3>
          <h4>📞tel : +212 6 79 01 34 59</h4>
          <h4>📧Email: Dev_job@gmail.com</h4>
          <h4> Adress: Casa , Maroc </h4>
        </div>
      </div>
      <p>Dev_job copryt @2025</p>
    </>
  );
}
export default Footer;
