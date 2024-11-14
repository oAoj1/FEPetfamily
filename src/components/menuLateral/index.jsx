import './MenuLateral.css'

import { MdPets, MdPeople  } from "react-icons/md";
import { FaHome, FaCalendarAlt, FaTools, FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosChatbubbles, IoIosDocument , IoIosSettings  } from "react-icons/io";

import { useState } from 'react';

export default function MenuLateral(){

    const opcoes = [
        {
            opcao:'inicio',
            icone:<FaHome/>
        },
        {
            opcao:'agendamentos',
            icone:<FaCalendarAlt/>
        },
        {
            opcao:'funcionários',
            icone:<MdPeople/>
        },
        {
            opcao:'serviços',
            icone:<FaTools/>
        },
        {
            opcao:'mensagens',
            icone:<IoIosChatbubbles/>
        },
        {
            opcao:'interações',
            icone:<FaStar/>
        },
        {
            opcao:'Documentos',
            icone:<IoIosDocument/>
        },
        {
            opcao:'configurações',
            icone:<IoIosSettings/>
        },

    ] 

    return(
        <div className="menuLateral">

            <div className="tituloMenuLateral">
                <h2>PetFamily</h2>
                <MdPets/>
            </div>

            <ul className="opcoes">
                {opcoes.map(opcoes => (
                    <li key={opcoes.opcao}>
                        <button>
                            <span>{opcoes.icone}</span>
                            <h3>{opcoes.opcao}</h3>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="sair">
                <FaArrowLeftLong/>
                <p>Sair</p>
            </div>

        </div>
    )
}