import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AjouterEmploye = () => {
  const navigate = useNavigate();
  const [employe, setEmploye] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/employe/ajouter", employe);
      navigate("/");
    } catch (error) {
      console.log("Erreur d'insertion", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Ajouter un Employé</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom de l'Employé</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Entrez le nom de l'employé"
              value={employe.nom}
              onChange={(e) => setEmploye({ ...employe, nom: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="poste" className="form-label">Poste</label>
            <input
              type="text"
              id="poste"
              className="form-control"
              placeholder="Entrez le poste de l'employé"
              value={employe.poste}
              onChange={(e) => setEmploye({ ...employe, poste: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Entrez le email de l'employé"
              value={employe.email}
              onChange={(e) => setEmploye({ ...employe, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateEmbauche" className="form-label">Date d'embauche</label>
            <input
              type="date"
              id="dateEmbauche"
              className="form-control"
              placeholder="Entrez le dateE d'embauche de l'employé"
              value={employe.dateEmbauche}
              onChange={(e) => setEmploye({ ...employe, dateEmbauche: e.target.value })}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-auto">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterEmploye;
