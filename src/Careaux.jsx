import Cartes from "./Cartes";
import "./Careaux.css";
function Careaux({ carrer }) {
  return (
    <>
      <div className="div_globale">
        {carrer.map((value) => (
          <Cartes
            image={value.image}
            titre={value.titre}
            description={value.description}
          />
        ))}
      </div>
    </>
  );
}
export default Careaux;
