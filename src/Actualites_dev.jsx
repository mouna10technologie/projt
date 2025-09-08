import "./Actualites_dev.css";
function CarteActualités({ titre, description }) {
  return (
    <div className="div_actualités">
      <h2>{titre}</h2>
      <h4>{description}</h4>
    </div>
  )
}
function Actualites_dev() {
  let box3 = [{
    titre: "Sites Web et plateformes de contenu tech",
    description: "Sites comme Hacker News, Reddit (r/programming, r/webdev...), Medium, Dev.to et Hashnode offrent des actualités tech, des discussions, des articles et des tutoriels pour les développeurs..",
  },

  {
    titre: "Newsletters Tech populaires",
    description: "Des newsletters comme JavaScript Weekly, Frontend Focus, TLDR ou The Pragmatic Engineer offrent un résumé régulier de l’actualité tech, du développement web, de l’IA et des tendances du secteur.",
  },

  {
    titre: "Podcasts pour développeurs",
    description: "Les podcasts comme Syntax.fm, CodeNewbie, Developer Tea, The Changelog et Command Line Heroes permettent aux développeurs de rester informés sur le frontend, les projets open source, les carrières tech et l’histoire de la technologie.",
  },

  {
    titre: "Chaînes YouTube",
    description: "Des chaînes YouTube comme Fireship, The Net Ninja, Traversy Media ou TechWorld with Nana proposent des vidéos pédagogiques et actuelles sur le développement, le DevOps, et les technologies cloud.",
  },
  {
    titre: "Communautés / Forums",
    description: "Des communautés comme Stack Overflow, Discord, GitHub Trending et Twitter/X permettent de suivre les tendances, échanger avec d'autres développeurs et découvrir des projets ou contenus populaires..",
  },
  {
    titre: "Conférences et événements",
    description: "Des conférences comme Google I/O, WWDC, JSConf ou des meetups locaux permettent de découvrir les nouveautés tech, approfondir des sujets spécialisés et rencontrer la communauté.",
  },
  {
    titre: "Outils de veille tech automatisée",
    description: "Des outils comme Feedly, Daily.dev, Pocket et GitHub permettent d'automatiser la veille tech en centralisant, sauvegardant et suivant les contenus et projets pertinents.",
  },
  



  ]
  return (
    <>
      <div className="Les_actualités">
        <img src="./public/Evolution.jpeg"/>
        <h1 className="h1_actualités"> Les actualités</h1>
        <h3 className="h3_actualités">
          Suivez les actualités clés du développement, quels que soient votre
          niveau et votre spécialité : nouvelles technologies, langages à jour,
          outils émergents et tendances du secteur.
        </h3>
      </div>
       <div className="div_actuel"><p className="p_actuel"> les outils et ressources que les développeurs utilisent pour rester à jour</p>
         </div>

      <div className="Actualités">
        {box3.map((valeur, index4) => (
          <CarteActualités
            key={index4}
            titre={valeur.titre}
            description={valeur.description}

          />
        ))}
      </div>



    </>
  );
}
export default Actualites_dev;
