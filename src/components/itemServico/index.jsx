import './Servico.css'

import { useState, useEffect } from 'react';

import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import api from '../../api/api.js'

export default function ItemServico(){

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
        <ul className="servicosListados">
            {servicos.map(item => (
                <li key={item.idServico}>
                    <div className="descricaoServico">
                        <h2>{item.descricao}</h2>
                        <h3>R$ {item.preco}</h3>
                    </div>
                    <div className="btnServico">
                        <MdEdit/>
                        <IoMdClose/>
                    </div>
                </li>
            ))}
        </ul>
    )
}