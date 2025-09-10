import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-moderne">
      <div className="footer-container">
        {/* Section Logo et Description */}
        <div className="footer-section logo-section">
          <div className="footer-logo">
            <span className="logo-icon">💼</span>
            <span className="logo-text">
              <span className="logo-dev">Dev</span>
              <span className="logo-job">Job</span>
            </span>
          </div>
          <p className="footer-description">
            Votre plateforme de référence pour connecter les talents du développement 
            avec les meilleures opportunités professionnelles au Maroc et à l'international.
          </p>
          <div className="footer-stats">
            <div className="stat-footer">
              <span className="stat-number">500+</span>
              <span className="stat-label">Développeurs</span>
            </div>
            <div className="stat-footer">
              <span className="stat-number">200+</span>
              <span className="stat-label">Recruteurs</span>
            </div>
            <div className="stat-footer">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Offres</span>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="footer-section nav-section">
          <h3 className="footer-titre">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">🏠 Accueil</Link></li>
            <li><Link to="/Developpeurs" className="footer-link">👨‍💻 Développeurs</Link></li>
            <li><Link to="/Recruteurs" className="footer-link">🏢 Recruteurs</Link></li>
            <li><Link to="/Actualites_dev" className="footer-link">📰 Actualités Dev</Link></li>
            <li><Link to="/IA" className="footer-link">🤖 Intelligence Artificielle</Link></li>
            <li><Link to="/Contact" className="footer-link">📞 Contact</Link></li>
          </ul>
        </div>

        {/* Section Services */}
        <div className="footer-section services-section">
          <h3 className="footer-titre">Services</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">🔍 Recherche d'emploi</a></li>
            <li><a href="#" className="footer-link">📝 Publication d'offres</a></li>
            <li><a href="#" className="footer-link">💼 Gestion de profils</a></li>
            <li><a href="#" className="footer-link">📊 Analyses de marché</a></li>
            <li><a href="#" className="footer-link">🎓 Formation continue</a></li>
            <li><a href="#" className="footer-link">🤝 Mise en relation</a></li>
          </ul>
        </div>

        {/* Section Contact */}
        <div className="footer-section contact-section">
          <h3 className="footer-titre">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <span className="contact-label">Téléphone</span>
                <a href="tel:+212679013459" className="contact-value">+212 6 79 01 34 59</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:Dev_job@gmail.com" className="contact-value">Dev_job@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">Adresse</span>
                <span className="contact-value">Casablanca, Maroc</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div className="contact-details">
                <span className="contact-label">Horaires</span>
                <span className="contact-value">Lun - Ven : 9h00 - 18h00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="footer-section social-section">
          <h3 className="footer-titre">Suivez-nous</h3>
          <div className="social-links">
            <a href="#" className="social-link linkedin">
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link twitter">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link facebook">
              <span className="social-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link instagram">
              <span className="social-icon">📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link github">
              <span className="social-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link youtube">
              <span className="social-icon">📺</span>
              <span>YouTube</span>
            </a>
          </div>
          
          {/* Newsletter */}
          <div className="newsletter-section">
            <h4>Newsletter</h4>
            <p>Restez informé des dernières opportunités</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <span>✈️</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            <p>&copy; 2025 DevJob. Tous droits réservés.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="bottom-link">Politique de confidentialité</a>
            <a href="#" className="bottom-link">Conditions d'utilisation</a>
            <a href="#" className="bottom-link">Mentions légales</a>
            <a href="#" className="bottom-link">Plan du site</a>
          </div>
          <div className="footer-badge">
            <span className="badge-text">Made with ❤️ in Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
