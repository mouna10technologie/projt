import Image from "./Image";
import Body from "./Body";
import Careaux from "./Careaux";
import { Link } from "react-router-dom";
import "./Home.css";

function AnimatedText({ text }) {
  return (
    <div className="animated-text-container">
      <h1 className="animated-description">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="glowing-letter"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

function Home() {
  const descriptionText = "Une plateforme dédiée aux recruteurs pour identifier, évaluer et accompagner les meilleurs talents tech, spécialisés en IA, machine learning et technologies de pointe.";
  
  let box = [
    [
      {
        image:
          "https://www.newmanstech.com/wp-content/uploads/2023/12/developpeur-web.jpeg",
        titre: "Développeurs",
        description:
          "Trouvez les meilleurs développeurs spécialisés en IA, machine learning et technologies émergentes pour vos projets.",
      },

      {
        image:
          "https://tse2.mm.bing.net/th/id/OIP.eIaKrf93sPiMKNAeCzKvBAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        titre: "Recruteurs",
        description:
          "Accédez à une plateforme complète pour identifier, évaluer et recruter les talents tech les plus prometteurs du marché.",
      },

      {
        image:
          "https://olliewood.fr/wp-content/uploads/2025/08/Quels-sont-les-differents-types-de-contrats-de-travail-et-leurs-particularites-.jpg",
        titre: "Types de contrat",
        description:
          "Explorez toutes les modalités de collaboration : CDI, freelance, missions courtes, contrats internationaux adaptés à vos besoins.",
      },
    ],

    [
      {
        image:
          "https://tse1.mm.bing.net/th/id/OIP.RYyqwfKufF34oycQyQ1n_AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        titre: "Développer vos compétences",
        description:
          "Accédez à des formations personnalisées, des certifications reconnues et des ressources d'apprentissage pour rester à la pointe de la technologie.",
      },

      {
        image:
          "https://static.vecteezy.com/ti/photos-gratuite/p2/23431352-aujourd-hui-est-le-journee-symbole-concept-mots-revenir-sur-les-atouts-sur-en-bois-blocs-gratuit-photo.jpg",
        titre: "Rester à jour",
        description:
          "Suivez les dernières tendances technologiques, les actualités du secteur et les évolutions du marché de l'emploi tech.",
      },

      {
        image:
          "https://static.vecteezy.com/system/resources/previews/034/464/429/non_2x/an-icon-design-of-job-test-vector.jpg",
        titre: "Tests techniques",
        description:
          "Évaluation pratique des compétences d'un développeur via des exercices techniques adaptés aux besoins actuels.",
      },
    ],
  ];

  return (
    <div className="home-container">
      <Body />
      <Image />
      
      <AnimatedText text={descriptionText} />
      
      <div className="buttons-section">
        <Link to="/Recruteurs" className="home-button recruteur-button">
          Recruteur
        </Link>
        <Link to="/Candidat" className="home-button candidat-button">
          Candidat
        </Link>
      </div>
      
      <div className="cards-section">
        {box.map((carrer, index1) => (
          <Careaux key={index1} carrer={carrer} />
        ))}
      </div>
    </div>
  );
}
export default Home;
