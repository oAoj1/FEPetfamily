import './Contrato.css'

import { IoPerson } from "react-icons/io5";

export default function Contrato(){

    const btn = [
        {
            texto:'ver mais',
            corFundo:'#8692DE',
            corTexto:'#fff'
        },
        {
            texto:'confirmar',
            corFundo:'#60F700',
            corTexto:'#000'
        },
        {
            texto:'cancelar',
            corFundo:'#FF2121',
            corTexto:'#fff'
        }
    ]

    return(
        <div className="contratoContainer">
            <div className="usuarioContainer">
                <IoPerson/>
                <h2>tutor 1 da silva</h2>
            </div>
            <div className="btnContratoContainer">
                {btn.map(btn => (
                    <button 
                        key={btn} 
                        style={{
                            backgroundColor:btn.corFundo,
                            color:btn.corTexto
                        }}
                        className='btnContrato'
                    >
                        {btn.texto}
                    </button>
                ))}
            </div>
        </div>
    )
}