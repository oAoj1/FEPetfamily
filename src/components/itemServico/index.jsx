import './Servico.css'

import { useState, useEffect } from 'react';

import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import api from '../../api/api.js'

import FormServico from '../form/formServico'
import PopUp from '../popUp';

export default function ItemServico(){

    const [servicos,setServicos] = useState([])
    const [isOpenEditForm,setIsOpenEditForm] = useState(false)
    const [idServicoAtual, setIdServicoAtual] = useState('')

    useEffect(() => {
        async function lerServicos(){
            const response = await api.get('/servicos')
            const data = response.data

            setServicos(data[0])
        }

        lerServicos()
    },[])

    async function deletarServico(idServico){
        const confirmar = window.confirm('Deseja deletar servico?')

        if(confirmar){
            try{
                await api.delete(`/servicos/${idServico}`)
                alert('Servico deletado com sucesso!')
                location.reload()
            }catch(error){
                alert('Erro ao deletar servico, confira o console')
                console.log(error)
            }

        }

    }

    return(
        <ul className="servicosListados">

            {servicos.map(item => (
                <li key={item.idServico}>
                    <div className="descricaoServico">
                        <h2>{item.descricao}</h2>
                        <h3>R$ {item.preco}</h3>
                    </div>
                    
                    <div className="btnServico">
                        <MdEdit 
                            onClick={() => {
                                setIsOpenEditForm(true)
                                setIdServicoAtual(item.idServico)
                            }}
                        />
                        <IoMdClose onClick={() => deletarServico(item.idServico)}/>
                    </div>
                    
                    {isOpenEditForm && item.idServico == idServicoAtual ? 
                        <div className="overlayServicos">
                            <FormServico 
                                fechar={() => setIsOpenEditForm(false)}
                                descricaoProps={item.descricao}
                                precoProps={item.preco}
                            />
                        </div>
                    : ''}

                </li>
            ))}


        </ul>
    )
}