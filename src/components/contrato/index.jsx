import './Contrato.css'

import { useState } from 'react'

import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

import VerMais from './verMais'
import Botao from '../botao'

export default function Contrato(){

    const [isOpenVerMais, setIsOpenVerMais] = useState(false)

    return(
        <div className="contratoContainer">

            <div className="usuarioContainer">
                <div className="tutorContainer">
                    <IoPerson/>
                    <h2>tutor 1 da silva</h2>
                </div>
                <div className="datasContainer">
                    <FaCalendarAlt />
                    <p>25/07 - 30/07</p>
                </div>
            </div>

            <div className="btnContratoContainer">
                <Botao
                    clicar={() => setIsOpenVerMais(true)}
                    texto='ver mais'
                />
            </div>

            {isOpenVerMais ? 
                <div className="overlayVerMais">
                    <VerMais fechar={() => setIsOpenVerMais(false)}/>
                </div>
            : ''}

        </div>
    )
}