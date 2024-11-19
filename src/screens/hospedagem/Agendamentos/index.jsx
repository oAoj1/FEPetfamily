import './Agendamentos.css'

import { useState, useEffect } from 'react'

import MenuLateral from '../../../components/menuLateral'
import Contrato from '../../../components/contrato';

import api from '../../../api/api.js'

export default function Agendamentos() {

    const [status, setStatus] = useState([]);
    const [statusSelecionado, setStatusSelecionado] = useState(null);

    useEffect(() => {
        async function lerStatus() {
            const response = await api.get('/status');
            const data = response.data;

            setStatus(data[0]);
        }

        lerStatus();
    }, []);

    return (
        <div className="agendamentos">
            <MenuLateral />

            <div className="tituloAgendamentos">
                <h1>Agendamentos</h1>
            </div>

            <ul className="status">
                {status.map((item) => (
                    <li
                        key={item.idStatus}
                        className={statusSelecionado === item.idStatus ? 'selecionado' : ''}
                        onClick={() => setStatusSelecionado(item.idStatus)}
                    >
                        {item.descricao}
                    </li>
                ))}
            </ul>
            
            <Contrato
                status={status.descricao}
            />

        </div>
    );
}
