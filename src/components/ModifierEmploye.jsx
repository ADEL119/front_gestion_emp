import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ModifierEmploye = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [employe,setEmploye]=useState({})

    const loadEmploye=async()=>{
        try {
            const res = await axios.get(`http://localhost:8080/employe/${id}`);
            setEmploye(res.data);
          } catch (error) {
            console.log("Erreur lors du chargement des données", error);
          }
        }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:8080/employe/modifier/${id}`, employe);
          navigate("/");
        } catch (error) {
          console.log("Erreur d'insertion", error);
        }
      };
      useEffect(()=>{loadEmploye()},[])

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Modifier l'employé</h2>
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
              placeholder="Entrez l'email de l'employé"
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
              placeholder="Entrez la date d'embauche de l'employé"
              value={employe.dateEmbauche}
              onChange={(e) => setEmploye({ ...employe, dateEmbauche: e.target.value })}
              required
            />
          </div>

          
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-auto">Modifier</button>
            
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default ModifierEmploye;
