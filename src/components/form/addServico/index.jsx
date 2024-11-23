import './Form.css'

import { useState } from "react";

import { IoClose } from "react-icons/io5";

export default function FormAddServico({ fechar }){

    const [novoServico, setNovoServico] = useState({
        idServico:'',
        descricao:''
    })

    async function insertServico(e){
        e.preventDefault()
    }

    return(
        <div className="formContainer">
            <IoClose onClick={fechar}/>

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
    )
}