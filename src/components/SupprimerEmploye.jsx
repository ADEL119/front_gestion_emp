import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SupprimerEmploye = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employe, setEmploye] = useState();

  const loadEmploye = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/employe/${id}`);
      setEmploye(res.data);
    } catch (error) {
      console.log("Erreur lors du chargement des données", error);
    }
  };

  useEffect(() => {
    loadEmploye();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/employe/supprimer/${id}`);
      navigate("/");
    } catch (error) {
      console.log("Erreur de suppression", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 text-center">
        <h2>Supprimer Employé</h2>
        {employe && (
          <p>
            Voulez-vous vraiment supprimer <strong>{employe.nom}</strong> ?
          </p>
        )}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-danger w-auto" onClick={handleDelete}>
            Oui, Supprimer
          </button>
          <button className="btn btn-secondary w-auto" onClick={() => navigate("/")}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupprimerEmploye;
