import './SeusAgendamentosComponente.css'

import { FaArrowRight, FaHotel } from "react-icons/fa";

export default function SeusAgendamentosComponente({clicar}){
    return(
        <div 
            className="seusAgendamentosComponente"
            onClick={clicar}
        >
            <h3>Seu(s) Agendamento(s)</h3>

            <div className="seusAgendamentosComponenteContainer">
                <div className="icone">
                    <FaHotel />
                </div>

                <div className="descricao">
                    <h2>Hotel 1</h2>
                    <button>
                        ver mais
                        <FaArrowRight/>
                    </button>
                </div>
                
            </div>

        </div>
    )
}