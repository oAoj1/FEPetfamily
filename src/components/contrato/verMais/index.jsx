import './VerMais.css'

import { MdClose } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import ItemPet from '../../itemPet';

export default function VerMais({ 
    fechar, 
    dataInicio, 
    dataFim,
    valorTotal
}){
    return(
        <div className="overlayLerMais">
            
            <div className="verMaisContainer">
                
                <div className="header">
                    <MdClose onClick={fechar}/>
                    <h3>PetFamily</h3>
                    <span></span>
                </div>

                <div className="dadosWraper">

                    <div className="dados">

                        <div className="usuarioVerMais">
                            <IoPerson/>
                            <h2>Tutor 1 da Silva</h2>
                        </div>

                        <div className="datasVerMais">
                            <FaCalendarAlt/>
                            <input 
                                type="date" 
                                className='inputData'
                                disabled
                                value={dataInicio}
                            />
                            <input 
                                type="date" 
                                className='inputData'
                                disabled
                                value={dataFim}
                            />
                        </div>
                    </div>

                    <div className="precoVerMais">
                        <h3>R$ {valorTotal}</h3>
                    </div>


                </div>
                
                <ItemPet/>

            </div>

        </div>
    )
}