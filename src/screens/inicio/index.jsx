import './Inicio.css'

import { IoPersonSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

export default function Inicio(){

    const botoes = [
        {
            texto:'tutor',
            icone:<IoPersonSharp/>
        },
        {
            texto:'hospedagem',
            icone:<RiHotelLine/>
        }
    ]

    return(
        <div className="inicio">
            
            <div className="tituloInicio">
                <h1>PetFamily</h1>
                <h2>Veja as visões das personas do sistema</h2>
            </div>

            <div className="btnContainer">
                {botoes.map((btn,index) => (
                    <Link to={`/${btn.texto}`}>
                        <button
                            key={index}
                            className='btnPersonas'
                        >
                            <p>{btn.texto}</p>
                            {btn.icone}
                        </button>
                    </Link>
                ))}
            </div>

        </div>
    )
}