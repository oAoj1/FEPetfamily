export default function Botao({clicar,texto,classe,estilo}){
    return(
        <button 
            onClick={clicar}
            style={estilo}
            className={classe}
        >
            {texto}
        </button>
    )
}