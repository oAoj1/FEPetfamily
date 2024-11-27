import './Celular.css'

import { useState } from 'react';

import { IoChatbubble } from "react-icons/io5";
import { FaHotel, FaArrowRight } from "react-icons/fa";

import MenuHamburguer from './menuHamburguer';

export default function Celular(){

    const [page,setPage] = useState('')

    return(
        <div className="celularContainer">

            <div className="celular">
                
                <div className="headerCelularTutor">
                    <div style={{
                        width:'100%',
                        display:'flex',
                        alignItems:'flex-start',
                        justifyContent:'space-between'
                    }}>
                        <MenuHamburguer/>
                        <p>PetFamily</p>
                        <IoChatbubble/> 
                    </div>
                    <h2>Bem vindo Tutor</h2>
                </div>

                <div className="seusAgendamentos">
                    <h3>Seu(s) Agendamento(s)</h3>

                    <div className="seusAgendamentosContainer">
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

                <div className="hospedagens">
                    <h3>Hospedagens</h3>

                    <div className="hospedagemContainer">
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

            </div>

        </div>
    )
}