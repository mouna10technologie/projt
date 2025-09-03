import Careaux from "./Careaux";
import "./App.css";
function App() {
  let box = [
    [
      {
        image:
          "https://www.newmanstech.com/wp-content/uploads/2023/12/developpeur-web.jpeg",
        titre: "Developpeurs",
        description:
          "Trouvez les meilleurs développeurs spécialisés en IA, machine learning et technologies émergentes pour vos projets innovants.",
      },

      {
        image:
          "https://tse2.mm.bing.net/th/id/OIP.eIaKrf93sPiMKNAeCzKvBAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        titre: "Recruteurs",
        description:
          "Accédez à une plateforme complète pour identifier, évaluer et recruter les talents tech les plus prometteurs du marché.",
      },

      {
        image: "",
        titre: "Types de contrat",
        description:
          "Explorez toutes les modalités de collaboration : CDI, freelance, missions courtes, contrats internationaux adaptés à vos besoins.",
      },
    ],

    [
      {
        image:
          "https://tse1.mm.bing.net/th/id/OIP.RYyqwfKufF34oycQyQ1n_AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        titre: "Comment developer votre competences",
        description:
          "Accédez à des formations personnalisées, des certifications reconnues et des ressources d'apprentissage pour rester à la pointe de la technologie.",
      },

      {
        image:
          "https://static.vecteezy.com/ti/photos-gratuite/p2/23431352-aujourd-hui-est-le-journee-symbole-concept-mots-revenir-sur-les-atouts-sur-en-bois-blocs-gratuit-photo.jpg",
        titre: " Rester  à jour ",
        description:
          "Suivez les dernières tendances technologiques, les actualités du secteur et les évolutions du marché de l'emploi tech.",
      },

      {
        image:
          "https://static.vecteezy.com/system/resources/previews/034/464/429/non_2x/an-icon-design-of-job-test-vector.jpg",
        titre: "Test technique",
        description:
          "Un test technique pour les développeurs est une évaluation pratique visant à mesurer les compétences techniques d’un candidat, souvent à travers des exercices de programmation, des résolutions de bugs ou des projets à coder.",
      },
    ],
  ];

  return (
    <>
      {box.map((carrer) => (
        <Careaux carrer="carrer" />
      ))}
    </>
  );
}
export default App;
