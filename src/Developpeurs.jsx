import "./Developpeurs.css";
function CarteDeveloppeurs({ titre, description }) {
  return (
    <div className="div_developpeurs">
      <h2>{titre}</h2>
      <h4>{description}</h4>
    </div>
  )
}
function Developpeurs() {
  let box1 = [{
    titre: "Langages de programmation (selon le domaine)",
    description: "Les langages et outils varient selon le domaine : web (frontend/backend), mobile, logiciel, data/IA, avec Git pour le versionnement et des bases de données relationnelles ou NoSQL.",
  },

  {
    titre: "Environnement de développement",
    description: "Un environnement de développement réunit un éditeur de code (comme VS Code), l’usage du terminal avec des commandes de base, et des gestionnaires de paquets adaptés au langage (npm, pip, composer).",
  },

  {
    titre: "Tests et débogage",
    description: "Les tests et le débogage reposent sur des frameworks dédiés (Jest, Pytest, JUnit, PHPUnit) pour valider le bon fonctionnement du code, des débogueurs intégrés aux IDE pour identifier les erreurs à l’exécution, ainsi que des linters et formatters (ESLint, Prettier, Black) pour maintenir un code propre et uniforme.",
  },

  {
    titre: "Déploiement & DevOps (bases recommandées)",
    description: "Maîtrise des bases de Docker, des pipelines CI/CD (GitHub Actions, GitLab CI, Jenkins) et des principales plateformes d’hébergement comme Vercel, Netlify, Heroku, AWS et DigitalOcean.",
  },
  {
    titre: "Soft Skills & pratiques pro",
    description: "Maîtrise des méthodologies Agile/Scrum, gestion de projet avec Trello/Jira, communication claire en anglais, et lecture efficace de documentation technique.",
  },
  {
    titre: "Portfolio & présence pro",
    description: "Avoir un GitHub organisé avec des projets soignés, un portfolio personnel clair incluant projets, CV et contact, un CV à jour, et un profil LinkedIn complet et professionnel.",
  },
  {
    titre: "Plateformes pour trouver un job",
    description: "Pour décrocher un job tech, explore des sites spécialisés (LinkedIn, Welcome to the Jungle, Indeed, Stack Overflow Jobs, Malt), engage-toi dans des hackathons, meetups, communautés Discord et forums, et valorise tes contributions open-source pour te différencier.",
  },
  {
    titre: "Bonus : selon le domaine, apprendre…",
    description: "Selon le domaine, il est utile d’apprendre la cybersécurité de base, les principes UX/UI surtout pour le frontend, l’architecture logicielle côté backend, ainsi que le Clean Code et les principes SOLID pour un code propre et maintenable.",
  },





  ]

  return (
    <>
      <div className="les_developpeurs">
        <img
          src="./public/Un_developpeur.png"
          alt="image sur les developpeurs"
        />
        <h1 className="h1_developpeurs">Les developpeurs</h1>
        <h3 className="h3_developpeurs ">
          Les développeurs sont les artisans du monde numérique, créant et
          maintenant les applications et sites web qui facilitent notre
          quotidien. Maîtres de plusieurs langages de programmation, ils
          innovent et optimisent les solutions digitales. Leur expertise est
          essentielle pour toute entreprise souhaitant réussir sa transformation
          numérique.
        </h3>
      </div>
        <div className="div_devlopper"><p className="p_developpeurs">Les outils essentiels qu’un développeur doit maîtriser ou connaître</p></div>

      <div className="Developpeurs">
        {box1.map((valeur, index) => (
          <CarteDeveloppeurs
            key={index}
            titre={valeur.titre}
            description={valeur.description}

          />
        ))}
      </div>




    </>
  );
}
export default Developpeurs;
