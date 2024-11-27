import './Header.css'

import MenuHamburguer from '../menuHamburguer'

import { IoChatbubble } from "react-icons/io5";

export default function Header(){
    return(
        <div className="headerCelularTutor">
            <div style={{
                width:'100%',
                display:'flex',
                alignItems:'flex-start',
                justifyContent:'space-between'
            }}>
                <MenuHamburguer/>
                <p>PetFamily</p>
                <IoChatbubble/> 
            </div>
            <h2>Bem vindo Tutor</h2>
        </div>
    )
}