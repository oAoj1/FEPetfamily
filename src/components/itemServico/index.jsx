import './Servico.css'

import { useState, useEffect } from 'react';

import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import api from '../../api/api.js';

export default function ItemServico() {
    const [servicos, setServicos] = useState([]);
    const [isEditing, setIsEditing] = useState(null); // Armazena o id do serviço em edição
    const [editForm, setEditForm] = useState({
        descricao: '',
        preco: ''
    });

    useEffect(() => {
        async function lerServicos() {
            const response = await api.get('/servicos');
            const data = response.data;
            setServicos(data[0]);
        }
        lerServicos();
    }, []);

    async function salvarEdicao(idServico) {
        try {
            await api.put(`/servicos/${idServico}`, editForm);
            alert('Serviço atualizado com sucesso!');

            setServicos(servicos.map(servico => 
                servico.idServico === idServico ? { ...servico, ...editForm } : servico
            ));
            setIsEditing(null);
        } catch (error) {
            alert('Erro ao salvar as alterações, confira o console');
            console.log(error);
        }
    }

    async function deletarServico(idServico) {
        const confirmar = window.confirm('Deseja deletar o serviço?');
        if (confirmar) {
            try {
                await api.delete(`/servicos/${idServico}`);
                alert('Serviço deletado com sucesso!');
                setServicos(servicos.filter(item => item.idServico !== idServico));
            } catch (error) {
                alert('Erro ao deletar serviço, confira o console');
                console.log(error);
            }
        }
    }

    function handleEditClick(item) {
        setIsEditing(item.idServico);
        setEditForm({ descricao: item.descricao, preco: item.preco });
    }

    return (
        <ul className="servicosListados">
            {servicos.map(item => (
                <li key={item.idServico}>
                    {isEditing === item.idServico ? (
                        <div className="editServico">
                            <input
                                type="text"
                                className='inputEditServico'
                                value={editForm.descricao}
                                onChange={(e) => setEditForm({ 
                                    ...editForm, descricao: e.target.value 
                                })}
                            />

                            <input
                                type="number"
                                className='inputEditServico'
                                value={editForm.preco}
                                onChange={(e) => setEditForm({ 
                                    ...editForm, preco: e.target.value 
                                })}
                            />

                            <div className="btnContainerEditServico">
                                <button 
                                    onClick={() => salvarEdicao(item.idServico)}
                                    className='btnEditServico'
                                >
                                    Salvar
                                </button>

                                <button 
                                    onClick={() => setIsEditing(null)}
                                    className='btnEditServico'
                                >
                                    Cancelar
                                </button>
                            </div>
                            
                        </div>
                    ) : (
                        <div className="descricaoServico">
                            <h2>{item.descricao}</h2>
                            <h3>R$ {item.preco}</h3>
                        </div>
                    )}
                    <div className="btnServico">
                        <MdEdit onClick={() => handleEditClick(item)} />
                        <IoMdClose onClick={() => deletarServico(item.idServico)} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
