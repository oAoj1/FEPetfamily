import './Servicos.css'

import { useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import FormServico from '../../../components/form/formServico';
import MenuLateral from '../../../components/menuLateral'
import ItemServico from '../../../components/itemServico'

export default function ServicosHospedagem(){

    const [isOpenFormAdd,setIsOpenAddForm] = useState(false)

    return(
        <div className="servicosContainer">
            <MenuLateral/>

            <div className="tituloServicos">
                <h1>Serviços</h1>
                <IoMdAdd onClick={() => setIsOpenAddForm(true)}/>
            </div>

            {isOpenFormAdd ? 
                <div className="overlayServicos">
                    <FormServico 
                        fechar={() => setIsOpenAddForm(false)}
                    />
                </div>
            : ''}

            <ItemServico/>
            
        </div>
    )
}