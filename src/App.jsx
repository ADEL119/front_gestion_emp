import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListeEmployes from './components/ListeEmployes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AjouterEmploye from './components/AjouterEmploye';
import ModifierEmploye from './components/ModifierEmploye';
import SupprimerEmploye from './components/SupprimerEmploye';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListeEmployes />} />
        
        <Route path="/employe/ajouter" element={<AjouterEmploye />} />
        <Route path="/employe/modifier/:id" element={<ModifierEmploye/>}/>
        <Route path="/employe/supprimer/:id" element={<SupprimerEmploye/>}/>
      </Routes>
    </Router>
  );
}

export default App;
