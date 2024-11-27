import './HospedagensScreen.css'

import MenuHamburguer from '../../../components/celular/menuHamburguer'

import { IoChatbubble } from "react-icons/io5";
import { FaHotel, FaArrowRight } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import api from '../../../api/api.js'

export default function HospedagensScreen(){

    async function realizarAgendamento(){
        const confirmar = window.confirm('Deseja realizar agendamento aqui?')

        const hoje = new Date();
        const amanha = new Date();
        amanha.setDate(hoje.getDate() + 1);

        if(confirmar){
            await api.post('/contratos',{
                idContrato:'',
                idHospedagem: 1,
                idUsuario: 1,
                idStatus: 1,
                dataInicio: hoje,
                dataFim: amanha,
                valorTotal: 500
            })
            .then(() => {
                alert('Hospedagem realizada com sucesso!')
                location.reload()
            })
            .catch((err) => {
                alert('Erro ao realizar hospedagem, confira console')
                console.log(err)
            })
        }
    }

    return(
        <div className="hospedagensScreen">
            <div className="cabecalho">
                <MenuHamburguer/>
                <p>PetFamily</p>
                <IoChatbubble/>
            </div>

            <div className="titleHospedagens">
                <h1>Hospedagens</h1>
            </div>

            <div className="hotel">

                <div className="hotelHeader">
                    <FaHotel/>
                </div>

                <div className="hotelDescricao">
                    <div style={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <h2>Hotel 1</h2>
                        <p>aberto</p>
                    </div>
                    <div className="endereco">
                        <p>Rua TalTal, 111, Saõ Caetano, São Paulo</p>
                        <p>Há 2.5km</p>
                    </div>
                    <div className="avaliacoes">
                        <div className="estrelas">
                            <p>4.55</p>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarHalf />
                        </div>
                        <div className="quantidade">
                            <p>2500 avaliacoes</p>
                        </div>
                    </div>
                </div>
                <div className="btnHospedarAqui">
                    <button onClick={realizarAgendamento}>
                        Hospedar aqui
                        <FaArrowRight/>
                    </button>
                </div>

            </div>
        </div>
    )
}