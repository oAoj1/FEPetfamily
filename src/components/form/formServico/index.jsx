import './FormServico.css'

import { useState } from "react";

import { IoClose } from "react-icons/io5";

import api from '../../../api/api.js';

export default function FormServico({ fechar, descricaoProps, precoProps }){

    const [novoServico, setNovoServico] = useState({
        descricao:'',
        preco:'',
        idHospedagem:1
    })

    async function insertServico(e){
        e.preventDefault()

        const confirmar = window.confirm('Deseja adicionar serviço a hospedagem?')

        if(confirmar){
            await api.post('/servicos', novoServico)

                .then(() => {
                    alert('Servico adicionado com sucesso!')
                    location.reload()
                })
                .catch((err) => {
                    alert('Erro ao adicionar servico, confira o console')
                    console.log(err)
                })

        }

    }

    return(
        <div className="formContainer">
            <IoClose onClick={fechar}/>

            <h2>Adicionando serviço</h2>

            <form onSubmit={insertServico}>
                <input 
                    type="text"
                    placeholder='Descrição'
                    value={null || descricaoProps}
                    onChange={e => setNovoServico({
                        ...novoServico,
                        descricao:e.target.value
                    })}
                />

                <input 
                    type="number"
                    placeholder='Preço(R$)'
                    value={null || precoProps}
                    onChange={e => setNovoServico({
                        ...novoServico,
                        preco:e.target.value
                    })}
                />

                <button>Cadastrar</button>
            </form>

        </div>
    )
}