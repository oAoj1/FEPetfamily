export default function Botao({clicar,texto}){
    return(
        <button onClick={clicar}>
            {texto}
        </button>
    )
}