//es el encargado de generar renderizar los componentes que se superponen.
function Modal(props){

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return (
        //esto es el boton de superposicion al apretar el eliminar
    <div className= 'modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>
            Cancel
        </button>
        <button className='btn' onClick={confirmHandler}>
            Confirm
        </button>
    </div>
    );
}
//adicionalmente a esto quiero agregarle un color de fondo para cuando se superponga.Creo ese
//componente en otro archivo.js llamado backdrop.Luego se crean ambos en APP.js

export default Modal;