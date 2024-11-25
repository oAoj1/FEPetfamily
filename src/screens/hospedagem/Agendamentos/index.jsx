import './Agendamentos.css'

import { useState, useEffect } from 'react'

import MenuLateral from '../../../components/menuLateral'
import Contrato from '../../../components/contrato';

import api from '../../../api/api.js'

export default function Agendamentos() {

    const [status, setStatus] = useState([])
    const [filtrarStatus, setFiltrarStatus] = useState('')

    useEffect(() => {
        async function lerStatus() {
            const response = await api.get('/status')
            const data = response.data

            setStatus(data[0])
        }

        lerStatus()
    }, [])

    return (
        <div className="agendamentos">
            <MenuLateral />

            <div className="tituloAgendamentos">
                <h1>Agendamentos</h1>
            </div>

            <select 
                onChange={(e) => setFiltrarStatus(e.target.value)}
                className='filtrarStatus'
            >

                <option 
                    disabled 
                    selected
                    style={{backgroundColor:'#ccc'}}
                >
                    status
                </option>

                {status.map(status => (
                    <option key={status.idServico} value={status.idStatus}>
                        {status.descricao}
                    </option>
                ))}
            </select>
            
            <Contrato status={filtrarStatus}/>

        </div>
    )
}
