import "./FormulaireCandidat.css";
import React, { useState } from "react";

function FormulaireCandidat() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    diplome: "",
    experience: "",
    salaire: "",
    photo: "",
    competences: "",
    localisation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Transformer les compétences en tableau
    const candidat = {
      ...formData,
      competences: formData.competences.split(",").map((comp) => comp.trim()),
    };
    g;
    // Envoyer les données vers le backend
    fetch("http://localhost:5000/candidats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidat),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de l'envoi");
        return res.json();
      })
      .then((data) => {
        alert("Candidat ajouté avec succès !");
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'envoi du candidat.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un candidat</h2>

      <input
        name="prenom"
        placeholder="Prénom"
        onChange={handleChange}
        value={formData.prenom}
      />
      <input
        name="nom"
        placeholder="Nom"
        onChange={handleChange}
        value={formData.nom}
      />
      <input
        name="age"
        type="number"
        placeholder="Âge"
        onChange={handleChange}
        value={formData.age}
      />
      <input
        name="diplome"
        placeholder="Diplôme"
        onChange={handleChange}
        value={formData.diplome}
      />
      <input
        name="experience"
        placeholder="Expérience"
        onChange={handleChange}
        value={formData.experience}
      />
      <input
        name="salaire"
        placeholder="Salaire"
        onChange={handleChange}
        value={formData.salaire}
      />
      <input
        name="photo"
        placeholder="URL de la photo"
        onChange={handleChange}
        value={formData.photo}
      />
      <input
        name="competences"
        placeholder="Compétences (séparées par des virgules)"
        onChange={handleChange}
        value={formData.competences}
      />
      <input
        name="localisation"
        placeholder="Localisation"
        onChange={handleChange}
        value={formData.localisation}
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireCandidat;
