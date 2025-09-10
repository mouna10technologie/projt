import "./Recruteurs.css";

function CarteRecruteurs({ titre, description }) {
  return (
    <div className="div_recruteurs">
      <h2>{titre}</h2>
      <h4>{description}</h4>
    </div>
  );
}

function CarteSiteRecrutement({
  nom,
  description,
  url,
  logo,
  type,
  pays,
  specialite,
}) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="carte-site-recrutement" onClick={handleClick}>
      <div className="carte-site-header">
        <div className="logo-site">
          <img src={logo} alt={`Logo ${nom}`} />
        </div>
        <div className="badge-type">
          <span className={`badge ${type}`}>
            {type === "maroc" ? "🇲🇦 Maroc" : "🌍 International"}
          </span>
        </div>
      </div>

      <div className="carte-site-body">
        <h3 className="nom-site">{nom}</h3>
        <p className="description-site">{description}</p>

        <div className="info-site">
          <div className="specialite-section">
            <span className="specialite-badge">{specialite}</span>
          </div>
          <div className="pays-section">
            <span className="pays-info">📍 {pays}</span>
          </div>
        </div>
      </div>

      <div className="carte-site-footer">
        <button className="btn-visiter">
          <span>Visiter le site</span>
          <span className="arrow">→</span>
        </button>
      </div>

      <div className="hover-overlay">
        <span className="click-text">Cliquez pour visiter</span>
      </div>
    </div>
  );
}
function Recruteurs() {
  let box2 = [
    {
      titre: "Plateformes de sourcing et publication d’offres",
      description:
        "es plateformes de sourcing et de publication d’offres incluent LinkedIn Recruiter pour contacter directement des développeurs, des sites d’annonces comme Indeed, Monster et Glassdoor, GitHub pour identifier et évaluer les contributions des développeurs, Stack Overflow Jobs pour les profils tech spécialisés, et AngelList pour recruter dans les startups.",
    },

    {
      titre:
        "Outils de gestion du recrutement (ATS - Applicant Tracking Systems)",
      description:
        "Les ATS (Applicant Tracking Systems) comme Greenhouse, Lever, SmartRecruiters, Workable et Breezy HR permettent de centraliser les candidatures, gérer le pipeline de recrutement et intégrer des tests techniques.",
    },

    {
      titre: "Tests techniques et évaluation des compétences",
      description:
        "Les outils de tests techniques comme Codility, HackerRank, LeetCode, DevSkiller et Kaggle permettent d’évaluer les compétences des développeurs et data scientists via des exercices de codage et projets réels.",
    },

    {
      titre: " Outils de vidéo conférence",
      description:
        "Les outils de vidéoconférence comme Zoom, Microsoft Teams, Google Meet et Whereby sont utilisés pour réaliser des entretiens à distance.",
    },
    {
      titre: "Outils de communication et collaboration interne",
      description:
        "Les outils comme Slack et Microsoft Teams facilitent la communication et la collaboration entre recruteurs et équipes techniques.",
    },
  ];

  // Sites de recrutement pour développeurs
  const sitesRecrutement = [
    // Sites Marocains
    {
      nom: "Rekrute.com",
      description:
        "Premier site d'emploi au Maroc, spécialisé dans tous les secteurs y compris l'IT",
      url: "https://www.rekrute.com",
      logo: "./public/Developeurs.png",
      type: "maroc",
      pays: "Maroc",
      specialite: "Généraliste IT",
    },
    {
      nom: "Emploi.ma",
      description:
        "Plateforme leader au Maroc pour les offres d'emploi tech et développement",
      url: "https://www.emploi.ma",
      logo: "./public/DevloppeurX.jpeg",
      type: "maroc",
      pays: "Maroc",
      specialite: "Tech & Dev",
    },
    {
      nom: "Bayt.com",
      description:
        "Site d'emploi du Moyen-Orient et Afrique du Nord, très actif au Maroc",
      url: "https://www.bayt.com",
      logo: "./public/Developeurs.png",
      type: "maroc",
      pays: "MENA",
      specialite: "IT & Software",
    },
    {
      nom: "M3alem.com",
      description:
        "Plateforme marocaine pour freelances et projets de développement",
      url: "https://www.m3alem.com",
      logo: "./public/DevloppeurX.jpeg",
      type: "maroc",
      pays: "Maroc",
      specialite: "Freelance Dev",
    },

    // Sites Internationaux
    {
      nom: "LinkedIn Jobs",
      description:
        "Réseau professionnel mondial, incontournable pour le recrutement tech",
      url: "https://www.linkedin.com/jobs",
      logo: "./public/Developeurs.png",
      type: "international",
      pays: "Mondial",
      specialite: "Professional Network",
    },
    {
      nom: "Stack Overflow Jobs",
      description:
        "Plateforme spécialisée pour développeurs et professionnels tech",
      url: "https://stackoverflow.com/jobs",
      logo: "./public/DevloppeurX.jpeg",
      type: "international",
      pays: "Mondial",
      specialite: "Développeurs",
    },
    {
      nom: "GitHub Jobs",
      description:
        "Offres d'emploi directement intégrées à la plateforme de développement",
      url: "https://jobs.github.com",
      logo: "./public/Developeurs.png",
      type: "international",
      pays: "Mondial",
      specialite: "Open Source",
    },
    {
      nom: "AngelList",
      description:
        "Spécialisé dans les startups et entreprises tech innovantes",
      url: "https://angel.co/jobs",
      logo: "./public/DevloppeurX.jpeg",
      type: "international",
      pays: "Mondial",
      specialite: "Startups",
    },
    {
      nom: "Remote.co",
      description:
        "Plateforme dédiée aux emplois en télétravail pour développeurs",
      url: "https://remote.co",
      logo: "./public/Developeurs.png",
      type: "international",
      pays: "Remote",
      specialite: "Télétravail",
    },
    {
      nom: "Dice.com",
      description: "Site américain spécialisé dans les emplois technologiques",
      url: "https://www.dice.com",
      logo: "./public/DevloppeurX.jpeg",
      type: "international",
      pays: "USA",
      specialite: "Tech Jobs",
    },
  ];

  return (
    <>
      <div className="les_recruteurs">
        <img
          src="./public/Recruteur.jpg"
          alt="image sur les recruteurs "
          width="400px"
          height="400px"
        />
        <h1 className="h1_recruteurs">
          {"Les recruteurs".split('').map((char, index) => (
            <span key={index} className="lettre-brillante-titre-rec" style={{animationDelay: `${index * 0.1}s`}}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <h3 className="h3_recruteurs">
          <span className="texte-lumineux-rec">
            {"Le recruteur est un professionnel qui identifie et sélectionne les meilleurs profils pour répondre aux besoins d'une entreprise, notamment dans le secteur tech.".split('').map((char, index) => (
              <span key={index} className="lettre-brillante-rec" style={{animationDelay: `${index * 0.02}s`}}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h3>
      </div>

      {/* Section des sites de recrutement */}
      <div className="section-sites-recrutement">
        <div className="sites-header">
          <h2 className="titre-sites-recrutement">
            {"🚀 Plateformes de Recrutement pour Développeurs"
              .split("")
              .map((char, index) => (
                <span
                  key={index}
                  className="lettre-animee-recruteur"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </h2>
          <p className="sous-titre-sites">
            Découvrez les meilleures plateformes pour trouver votre prochain
            emploi
          </p>
        </div>

        <div className="grille-sites">
          {sitesRecrutement.map((site, index) => (
            <CarteSiteRecrutement
              key={index}
              nom={site.nom}
              description={site.description}
              url={site.url}
              logo={site.logo}
              type={site.type}
              pays={site.pays}
              specialite={site.specialite}
            />
          ))}
        </div>
      </div>

      <div className="div_recruter">
        <h2 className="titre-outils-recruteurs">
          {"Les outils couramment utilisés par les recruteurs pour le recrutement des développeurs"
            .split("")
            .map((char, index) => (
              <span
                key={index}
                className="lettre-animee-outils"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </h2>
      </div>

      <div className="Recruteurs">
        {box2.map((valeur, index3) => (
          <CarteRecruteurs
            key={index3}
            titre={valeur.titre}
            description={valeur.description}
          />
        ))}
      </div>
    </>
  );
}
export default Recruteurs;
