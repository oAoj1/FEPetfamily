import './Servicos.css'

import { useState, useEffect } from 'react';

import MenuLateral from '../../../components/menuLateral'

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import api from '../../../api/api.js'

export default function Servicos(){

    const [servicos,setServicos] = useState([])

    useEffect(() => {
        async function lerServicos(){
            const response = await api.get('/servicos')
            const data = response.data

            setServicos(data[0])
        }

        lerServicos()
    },[])

    return(
        <div className="servicosContainer">
            <MenuLateral/>

            <div className="tituloServicos">
                <h1>Serviços</h1>
                <IoMdAdd/>
            </div>

            <ul className="servicos">
                {servicos.map(servicos => (
                    <li key={servicos.idServico}>
                        <div className="descricaoServico">
                            <h2>{servicos.descricao}</h2>
                            <h3>R$ {servicos.preco}</h3>
                        </div>
                        <div className="btnServico">
                            <MdEdit/>
                            <IoMdClose/>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}