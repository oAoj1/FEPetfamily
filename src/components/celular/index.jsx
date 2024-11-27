import './Celular.css'

import { useState, useEffect } from 'react';

import Header from './header';
import SeusAgendamentosComponente from './seusAgendamentosComponente'
import HospedagensComponente from './hospedagensComponente';

import HospedagensScreen from '../../screens/tutor/hospedagensScreen';
import SeusAgendamentosScreen from '../../screens/tutor/seusAgendamentosScreen';

import api from '../../api/api.js'

export default function Celular(){

    const [page,setPage] = useState('inicial')
    const [contratos, setContratos] = useState([])

    useEffect(() => {
        async function lerContratos(){
            const response = await api.get('/contratos')
            const data = response.data

            setContratos(data[0])
        }

        lerContratos()
    },[])

    return(
        <div className="celularContainer">

            <div className="celular">

                {page == 'inicial' ? 
                    <>
                        <Header/>

                        {contratos.length > 0 ? 
                            <SeusAgendamentosComponente 
                                clicar={() => setPage('seusagendamentos')}
                            /> 
                        : 
                            <div style={{
                                marginTop:'10rem'
                            }}>
                                <h3 
                                    style={{
                                        color:'#000',
                                        fontWeight:400,
                                        fontSize:'1.15em'
                                    }}>
                                        Seus agendamentos
                                </h3>
                                <p style={{
                                    color:'#575656',
                                    fontWeight:200,
                                    fontSize:'0.75em',
                                    marginTop:'0.5rem',
                                    fontStyle:'italic'
                                }}>
                                    Faça algum agendamento
                                </p>
                            </div> 
                        }

                        <HospedagensComponente 
                            clicar={() => setPage('hospedagens')}
                        />
                    </>
            
                : page == 'seusagendamentos' ? 
                    <SeusAgendamentosScreen/>
                : page == 'hospedagens' ?
                    <HospedagensScreen/>
                : ''}

            </div>

        </div>
    )
}