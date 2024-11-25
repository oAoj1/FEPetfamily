import './Contrato.css'

import { useState, useEffect } from 'react'

import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt, FaTools } from "react-icons/fa";
import { FaCheck, FaRegCircleCheck } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import VerMais from './verMais'
import Botao from '../botao'

import api from '../../api/api.js'

export default function Contrato({ status }){

    const [isOpenVerMais, setIsOpenVerMais] = useState(false)
    const [isOpenConfirmar, setIsOpenConfirmar] = useState(false)
    const [isOpenCancelar, setIsOpenCancelar] = useState(false)
    const [isOpenNegar, setIsOpenNegar] = useState(false)

    const [contratos,setContratos] = useState([])

    useEffect(() => {
        async function lerContrato(){
            const response = await api.get(`/contratos/${status}`)
            const data = response.data

            setContratos(data[0])
        }

        lerContrato()
    },[status])

    return (
        <>
            {contratos.length > 0 ? (
                contratos.map(contrato => (
                    <div className="contratoContainer" key={contrato.idContrato}>
                        <div className="usuarioContainer">
                            <div className="tutorContainer">
                                <IoPerson />
                                <h2>tutor 1 da silva</h2>
                            </div>

                            <div className="datasContainer">
                                <FaCalendarAlt />
                                <input 
                                    type='date'
                                    value={contrato.dataInicio}
                                    disabled
                                />
                                <input 
                                    type='date'
                                    value={contrato.dataFim}
                                    disabled
                                />
                            </div>

                        </div>

                        <div className="iconStatus">
                            {status == 1 ? <HiDotsHorizontal /> :
                            status == 2 ? <FaCheck /> : 
                            status == 3 ? <FaTools /> : 
                            status == 4 ? <FaRegCircleCheck /> :
                            status == 5 ? <MdBlock /> : 
                            status == 6 ? <IoIosRemoveCircleOutline /> : ''} 
                        </div>
                    </div> 
                ))
            ) : (
                <p>Não há contratos para exibir com o status selecionado.</p>
            )}
        </>
    )
}