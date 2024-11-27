import './SeusAgendamentosScreen.css'

import { useEffect, useState } from 'react';

import MenuHamburguer from '../../../components/celular/menuHamburguer'

import { IoChatbubble } from "react-icons/io5";
import { FaHotel, FaArrowRight } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import api from '../../../api/api.js'

export default function SeusAgendamentosScreen(){

    const [contratos,setContratos] = useState([])

    useEffect(() => {
        async function lerContratos(){
            const response = await api.get('/contratos')
            const data = response.data

            setContratos(data[0])
        }

        lerContratos()
    },[])

    return(
        <div className="seusAgendamentosScreen">
            <div className="cabecalho">
                <MenuHamburguer/>
                <p>PetFamily</p>
                <IoChatbubble/>
            </div>

            <div className="titleHospedagens">
                <h1> 
                    <span>seus</span>
                    <span>Agendamentos</span>  
                </h1>
            </div>

            {contratos.map(contrato => (
                <div 
                    className="hotel" 
                    key={contrato.idContrato}
                >
                    <div className="hotelHeader">
                        <FaHotel/>
                    </div>

                    <div className="hotelDescricao">
                        <h2>Hotel 1</h2>
                        <div className="datasDescricao">
                            <span>{contrato.dataInicio}</span>
                            <span>{contrato.dataFim}</span>
                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}