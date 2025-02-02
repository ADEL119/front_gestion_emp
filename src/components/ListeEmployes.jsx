import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ListeEmployes = () => {
  const [employes, setEmployes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7; // Number of employees per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employe");
        setEmployes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployes();
  }, []);

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = employes.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(employes.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Liste des Employés</h2>
        <Link to="/employe/ajouter" className="btn btn-primary">Ajouter</Link>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Poste</th>
            <th>Email</th>
            <th>Date d'Embauche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.nom}</td>
              <td>{emp.poste}</td>
              <td>{emp.email}</td>
              <td>{emp.dateEmbauche}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`employe/modifier/${emp.id}`)}>Modifier</button>
                <button className="btn btn-danger btn-sm" onClick={() => navigate(`employe/supprimer/${emp.id}`)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={"← Précédent"}
        nextLabel={"Suivant →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ListeEmployes;
