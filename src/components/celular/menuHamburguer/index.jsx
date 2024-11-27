import './MenuHamburguer.css'

import { useState } from 'react';

import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { FaHome, FaHotel, FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { Link } from 'react-router-dom';

export default function MenuHamburguer(){

    const [isOpenMenuHamburguer,setIsOpenMenuHamburguer] = useState(false)

    const options = [
        {
            text:'início',
            icon:<FaHome/>,
            link:'inicial'
        },
        {
            text:'seus agendamentos',
            icon: <FaCalendarAlt/>,
            link:'seusagendamentos'
        },
        {
            text:'hospedagens',
            icon: <FaHotel/>,
            link:'hospedagens'
        }
    ]

    return(
        <div className="menuHamburguer">
            <IoMdMenu onClick={() => setIsOpenMenuHamburguer(true)}/>

            {isOpenMenuHamburguer ? 
                <div className="overlayMobile">

                    <div className="content">

                        <div className="headerContent">
                            <div className="title">
                                <h3>PetFamily</h3>
                                <MdPets />
                            </div>
                            <div className="close">
                                <IoMdClose onClick={() => setIsOpenMenuHamburguer(false)}/>
                            </div>
                        </div>

                        <ul className="options">
                            {options.map(opcoes => (
                                <li 
                                    key={opcoes.text}
                                    onClick={() => setPage(opcoes)}
                                >
                                    <span>{opcoes.icon}</span>
                                    <h3>{opcoes.text}</h3>
                                </li>
                            ))}
                        </ul>
                        
                        <Link to='/' style={{textDecoration:'none'}}>
                            <div className="left">
                                <FaArrowLeftLong />
                                <p>Sair</p>
                            </div>
                        </Link>

                    </div>

                </div>
            : ''}

        </div>  
    )
}