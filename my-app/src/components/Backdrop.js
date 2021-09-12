function Backdrop(props){
    
    return <div className='backdrop' onClick={props.onCancel}/>
    //este div no tiene contenido entonces puedo devolver esto y que se cierre a si mismo.
    //solo contiene el estilo de la clase backdrop. Ahora puedo usar este y el modal.
    //para esto vamos a App.js.
}

export default Backdrop;