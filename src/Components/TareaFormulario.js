import { useState } from 'react'
import '../style/TareaFormulario.css'
import { v4 as uuidv4} from 'uuid';

const TareaFormulario = (props) => {

    const [input, setInput] = useState('');

    const manejarCambio = (e) =>{
        setInput(e.target.value);
        // console.log(e.target.value)
    }

    const manejarEnvio = (e) =>{
         e.preventDefault();
        //  console.log('Enviando formulario...')

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
       props.onSubmit(tareaNueva);
    }

    return (
        <form className="tareaFormulario" onSubmit={manejarEnvio}>
            <input className='tareaInput' type="text" placeholder="Escribe una tarea" name="texto" onChange={manejarCambio}/>
            <button className="tareaBoton" >Agregar Tarea</button>
        </form>
    );
}

export default TareaFormulario