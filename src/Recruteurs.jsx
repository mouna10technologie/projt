import "./Recruteurs.css";
function CarteRecruteurs({ titre, description }) {
  return (
    <div className="div_recruteurs">
      <h2>{titre}</h2>
      <h4>{description}</h4>
    </div>
  )
}
function Recruteurs() {
  let box2 = [{
    titre: "Plateformes de sourcing et publication d’offres",
    description: "es plateformes de sourcing et de publication d’offres incluent LinkedIn Recruiter pour contacter directement des développeurs, des sites d’annonces comme Indeed, Monster et Glassdoor, GitHub pour identifier et évaluer les contributions des développeurs, Stack Overflow Jobs pour les profils tech spécialisés, et AngelList pour recruter dans les startups.",
  },

  {
    titre: "Outils de gestion du recrutement (ATS - Applicant Tracking Systems)",
    description: "Les ATS (Applicant Tracking Systems) comme Greenhouse, Lever, SmartRecruiters, Workable et Breezy HR permettent de centraliser les candidatures, gérer le pipeline de recrutement et intégrer des tests techniques.",
  },

  {
    titre: "Tests techniques et évaluation des compétences",
    description: "Les outils de tests techniques comme Codility, HackerRank, LeetCode, DevSkiller et Kaggle permettent d’évaluer les compétences des développeurs et data scientists via des exercices de codage et projets réels.",
  },

  {
    titre: " Outils de vidéo conférence",
    description: "Les outils de vidéoconférence comme Zoom, Microsoft Teams, Google Meet et Whereby sont utilisés pour réaliser des entretiens à distance.",
  },
  {
    titre: "Outils de communication et collaboration interne",
    description: "Les outils comme Slack et Microsoft Teams facilitent la communication et la collaboration entre recruteurs et équipes techniques.",
  },
  
  ]

  return (
    <>
      <div className="les_recruteurs">
        <img src="./public/Recruteur.jpg" alt="image sur les recruteurs " />
        <h1 className="h1_recruteurs">Les recruteurs</h1>
        <h3 className="h3_recruteurs">
          Le recruteur est un professionnel qui identifie et sélectionne les
          meilleurs profils pour répondre aux besoins d’une entreprise,
          notamment dans le secteur tech.**
        </h3>
      </div>
 <div className="div_recruter"><p className="p_recruteur">Les outils couramment utilisés par les recruteurs pour le recrutement des développeurs</p></div>
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
