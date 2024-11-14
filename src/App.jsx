import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Servicos from "./screens/servicos"

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Servicos/>}/>
        </Routes>
      </Router>
    </div>
  )
}