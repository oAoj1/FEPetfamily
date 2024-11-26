import './ItemPet.css'

import { MdOutlinePets } from "react-icons/md";

export default function ItemPet(){
    return(
        <div className="itemPetContainer">

            <div className="dadosPetContainer">
                <div className="petTitulo">
                    <MdOutlinePets/>
                    <h2>Tico Tico</h2>
                </div>
                <div className="descricaoPet">
                    <p>Espécie</p>
                    <p>Raça</p>
                    <p>Porte</p>
                </div>
            </div>

            <div className="precosServicosPet">
                <h3>Serviços - R$ 200</h3>
                <p>Spa - R$ 150</p>
                <p>Banho & tosa - R$ 50</p>
            </div>

        </div>
    )
}