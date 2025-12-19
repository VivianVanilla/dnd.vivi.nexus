
import { createRoot } from 'react-dom/client'
import "./index.css"
import Hub from './Hub'
import DndApp from './DndApp'
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/dnd/*" element={<DndApp />} />
    </Routes>
  </BrowserRouter>
)
