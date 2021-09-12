import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  /*si el modalIsOpen es false, es el false pasado de parametro*/
  const [ modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
      setModalIsOpen(false);
  }

    return(
      <div>     
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {/*si el modal es true renderizo modal, sino no renderizo nada*/}
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
            
        </div>
      </div>

    )
}

export default Todo;