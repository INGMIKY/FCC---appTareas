import './App.css';
import freecodecamplogo from './img/freecodecamp-logo.png'
import ListaDeTareas from './Components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='freecodelogo' src={freecodecamplogo}/>
      </div>
      <div className='tareasListaPrincipal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
