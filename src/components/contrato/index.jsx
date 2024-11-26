import './Contrato.css'

import { useState, useEffect } from 'react'

import { IoPerson } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaCheck, FaRegCircleCheck } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import VerMais from './verMais'
import Botao from '../botao'

import api from '../../api/api.js'

export default function Contrato({ status }){

    const [contratos,setContratos] = useState([])
    const [isOpenVerMais,setIsOpenVerMais] = useState(false)
    const [idContratoAtual, setIdContratoAtual] = useState('')

    useEffect(() => {
        async function lerContrato(){
            const response = await api.get(`/contratos/${status}`)
            const data = response.data

            setContratos(data[0])
        }

        lerContrato()
    },[status])

    async function alterarAgendamento(idContrato,texto){
        const confirmar = window.confirm(`Deseja ${texto} contrato?`)

        if(confirmar){
            await api.put(`/contratos/${idContrato}`,
                texto == 'aprovar' ? {idStatus:2} : 
                texto == 'negar' ? {idStatus:6} :
                texto == 'cancelar' ? {idStatus:5} : ''
            )
            .then(() => {
                alert(`${
                    texto == 'aprovar' ? 'Agendamento aprovado com sucesso' :
                    texto == 'negar' ? 'Agendamento negado com sucesso' :
                    texto = 'cancelar' ? 'Agendamento cancelado com sucesso' : ''
                }`)
                location.reload()
            })
            .catch((err) => {
                alert('Erro ao cancelar contrato, confira o console')
                console.log(err)
            })

        }
    }

    function abrirVerMaisIdContratoAtual(boolean,idContrato){
        setIsOpenVerMais(boolean)
        setIdContratoAtual(idContrato)
    }

    console.log(contratos)

    return (
        <div className='wraper'>
            {contratos.length > 0 ? (
                contratos.map(contrato => (
                    <>
                        <div 
                            className="contratoContainer" 
                            key={contrato.idContrato}
                        >
                            <div 
                                style={{
                                    width:'100%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'space-between'
                                }}
                            >
                                <div className="usuarioContainer">

                                    <div className="tutorContainer">
                                        <IoPerson />
                                        <h2>tutor 1 da silva</h2>
                                    </div>

                                </div>

                                <div className="iconStatus">
                                    {status == 1 ? <HiDotsHorizontal /> :
                                    status == 2 ? <FaCheck style={{color:'#60F700'}}/> : 
                                    status == 3 ? <FaTools style={{color:'#1C1B1F'}}/> : 
                                    status == 4 ? <FaRegCircleCheck style={{color:'#84ff38'}}/> :
                                    status == 5 ?  <IoIosRemoveCircleOutline style={{color:'#8F8F8F'}}/> : 
                                    status == 6 ? <MdBlock style={{color:'#8F8F8F'}}/> : ''} 
                                </div> 
                            </div>

                            <div className="btnContratoContainer">
                                <Botao
                                    classe='btnContrato'
                                    texto='ver mais'
                                    estilo={{backgroundColor:'#8692DE',color:'#fff'}}
                                    clicar={
                                        () => abrirVerMaisIdContratoAtual(
                                            true,
                                            contrato.idContrato
                                        )
                                    }
                                />

                                {status == 1 ? 
                                    <>
                                        <Botao
                                            classe='btnContrato'
                                            texto='aprovar'
                                            estilo={{backgroundColor:'#60F700',color:'#000'}}
                                            clicar={() => alterarAgendamento(contrato.idContrato,'aprovar')}
                                        />
                                        <Botao
                                            classe='btnContrato'
                                            texto='negar'
                                            estilo={{backgroundColor:'#FF2121',color:'#fff'}}
                                            clicar={() => alterarAgendamento(contrato.idContrato,'negar')}
                                        />
                                    </>
                                : status == 2 || status == 3 ? 
                                    <>
                                        <Botao
                                            classe='btnContrato'
                                            texto='cancelar'
                                            estilo={{backgroundColor:'#FF2121',color:'#fff'}}
                                            clicar={() => alterarAgendamento(contrato.idContrato,'cancelar')}
                                        />
                                    </>
                                : ''} 
                            </div>

                        </div> 

                        {isOpenVerMais && contrato.idContrato == idContratoAtual ? 
                            <VerMais 
                                fechar={() => setIsOpenVerMais(false)}
                                dataInicio={contrato.dataInicio}
                                dataFim={contrato.dataFim}
                                valorTotal={contrato.valorTotal}
                            />
                        : ''}

                    </>
                ))
            ) : (
                <p 
                    style={{
                        textAlign:'center',
                        width:'100%',
                        marginTop:'1rem'
                    }}
                >
                    Não há contratos para exibir com o status selecionado.
                </p>
            )}
        </div>
    )
}