import './VerMais.css'

import { MdClose } from "react-icons/md";

export default function VerMais({fechar}){
    return(
        <div className="verMaisContainer">
            <div className="header">
                <MdClose onClick={fechar}/>
                <h3>PetFamily</h3>
            </div>
        </div>
    )
}