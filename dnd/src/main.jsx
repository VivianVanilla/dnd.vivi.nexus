
import { createRoot } from 'react-dom/client'
import "./index.css"
import Home from './Home.jsx'
import Feats from './pages/Feats.jsx'
import Classes from './pages/Classes.jsx'
import Races from './pages/Races.jsx'
import FragmentedPantheon from './pages/FragmentedPantheon.jsx'
import VotA from './pages/VotA.jsx'
import Archived from './pages/archived.jsx'
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Feats" element={<Feats /> } /> 
      <Route path="/Classes" element={<Classes /> } />
      <Route path="/Races" element={<Races /> } />
      <Route path="/FragmentedPantheon" element={<FragmentedPantheon /> } />
      <Route path="/VotA" element={<VotA /> } />
      <Route path="/Archived" element={<Archived /> } />
    </Routes>
  </BrowserRouter>
)
