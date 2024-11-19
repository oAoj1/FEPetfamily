import './Servicos.css'

import { useState, useEffect } from 'react';

import MenuLateral from '../../../components/menuLateral'

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import api from '../../../api/api.js'

export default function Servicos(){

    const [servicos,setServicos] = useState([])
    const [isOpenFormAdd,setIsOpenAddForm] = useState(false)
    const [novoServico, setNovoServico] = useState({
        idServico:'',
        descricao:''
    })

    useEffect(() => {
        async function lerServicos(){
            const response = await api.get('/servicos')
            const data = response.data

            setServicos(data[0])
        }

        lerServicos()
    },[])

    async function insertServico(e){
        e.preventDefault()
    }

    return(
        <div className="servicosContainer">
            <MenuLateral/>

            <div className="tituloServicos">
                <h1>Serviços</h1>
                <IoMdAdd onClick={() => setIsOpenAddForm(true)}/>
            </div>

            {isOpenFormAdd ? 
                <div className="overlay">
                    <div className="formContainer">
                        <IoClose onClick={() => setIsOpenAddForm(false)}/>

                        <h2>Adicionando seriço</h2>

                        <form onSubmit={insertServico}>
                            <input 
                                type="text"
                                placeholder='Descrição do serviço'
                                onChange={e => setNovoServico({
                                    ...novoServico,
                                    descricao:e.target.value
                                })
                            }
                            />
                            <input 
                                type="number"
                                placeholder='Preço do serviço'
                                onChange={e => setNovoServico({
                                    ...novoServico,
                                    descricao:e.target.value
                                })}
                            />

                            <button>Cadastrar</button>
                        </form>

                    </div>
                </div>
            : ''}

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