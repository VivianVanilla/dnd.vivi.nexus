import { Routes, Route } from "react-router";
import Home from './dnd/Home';
import Feats from './dnd/pages/Feats';
import Classes from './dnd/pages/Classes';
import Races from './dnd/pages/Races';
import FragmentedPantheon from './dnd/pages/FragmentedPantheon';
import VotA from './dnd/pages/VotA';
import Archived from './dnd/pages/Archived';

function DndApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Feats" element={<Feats />} />
      <Route path="/Classes" element={<Classes />} />
      <Route path="/Races" element={<Races />} />
      <Route path="/FragmentedPantheon" element={<FragmentedPantheon />} />
      <Route path="/VotA" element={<VotA />} />
      <Route path="/Archived" element={<Archived />} />
    </Routes>
  );
}

export default DndApp;