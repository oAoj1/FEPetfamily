import './HospedagensComponente.css'

import { FaArrowRight, FaHotel } from "react-icons/fa";

export default function HospedagensComponente({clicar}){
    return(
        <div 
            className="hospedagensComponente"
            onClick={clicar}
        >
            <h3>Hospedagens</h3>

            <div className="hospedagemComponenteContainer">
                <div className="icone">
                    <FaHotel />
                </div>

                <div className="descricao">
                    <h2>Hotel 1</h2>

                    <h4>Melhores avaliadas</h4>
                    <h3>rua tal tal 111</h3>

                    <button>
                        ver mais
                        <FaArrowRight/>
                    </button>
                    
                </div>

            </div>    

        </div>
    )
}