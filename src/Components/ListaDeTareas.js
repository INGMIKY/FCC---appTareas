import TareaFormulario from "./TareaFormulario"
import Tarea from '../Components/Tarea'
import '../style/ListaDeTareas.css'
import { useState } from "react";


const ListaDeTareas = () =>{

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        // console.log('Tarea agregada');
        console.log(tarea);
        if(tarea.texto.trim()){
           
            tarea.texto = tarea.texto.trim(); //trim quita espacio al principio y al final
            
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = (id)=>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }   

    const completarTarea = (id) =>{
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id == id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            {/* <Tarea /> */}
            <div className="tareasListaContenedor">
                {tareas.map((tarea)=>(
                    <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>
                ))}
            </div>
        </>
    );
}

export default ListaDeTareas;