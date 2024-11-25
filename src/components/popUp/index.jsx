import './PopUp.css';

export default function PopUp({ 
    texto, 
    btn1, 
    btn2, 
    onBtn1Click, 
    onBtn2Click 
}){
    return (
        <div className="popUpContainer">
            <div className="popUp">
                <p>{texto}</p>
                <button onClick={onBtn1Click}>
                    {btn1}
                </button>
                <button onClick={onBtn2Click}>
                    {btn2}
                </button>
            </div>
        </div>
    );
}
