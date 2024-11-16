import './Celular.css'

import { IoMdMenu } from "react-icons/io";

import { IoChatbubble } from "react-icons/io5";

export default function Celular(){
    return(
        <div className="celularContainer">

            <div className="celular">
                <div className="header">
                    <IoMdMenu/>
                    <p>PetFamily</p>
                    <IoChatbubble />
                </div>

                <div className="tituloAgendamentos">
                    <h1>
                        <span>seus</span>
                        <b>Agendamentos</b>
                    </h1>
                </div>
            </div>

        </div>
    )
}