import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Inicio from './screens/inicio'
import Tutor from './screens/tutor'
import Hospedagem from './screens/hospedagem'
import Agendamentos from "./screens/hospedagem/Agendamentos"
import ServicosHospedagem from "./screens/hospedagem/ServicosHospedagem"

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/tutor" element={<Tutor/>}/>
          <Route path="/hospedagem" element={<Hospedagem/>}/>
          <Route path="/hospedagem/agendamentos" element={<Agendamentos/>}/>
          <Route path="/hospedagem/servicos" element={<ServicosHospedagem/>}/>
        </Routes>
      </Router>
    </div>
  )
}