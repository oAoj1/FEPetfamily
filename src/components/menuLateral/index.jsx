import './MenuLateral.css'

import { MdOutlinePets } from "react-icons/md";

import { FaHome, FaCalendarAlt, FaTools, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MenuLateral(){

    const opcoes = [
        {
            texto:'início',
            icon:<FaHome/>,
            link:''
        },
        {
            texto:'agendamentos',
            icon:<FaCalendarAlt/>,
            link:'agendamentos'
        },
        {
            texto:'serviços',
            icon:<FaTools/>,
            link:'servicos'
        }
    ]

    return(
        <div className="menuLateral">

            <Link to='/hospedagem' style={{textDecoration:'none'}}>
                <div className="tituloMenuLateral">
                    <h2>PetFamily</h2>
                    <MdOutlinePets/>
                </div>
            </Link>

            <ul className="opcoes">
                {opcoes.map(opcoes => (
                    <li key={opcoes}>
                        <Link to={`/hospedagem/${opcoes.link}`}>
                            <button>
                                {opcoes.icon}
                                <p>{opcoes.texto}</p>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="sair">
                <Link to='/'>
                    <button>
                        <FaArrowLeft/>
                        <p>Sair</p>
                    </button>
                </Link>
            </div>

        </div>
    )
}