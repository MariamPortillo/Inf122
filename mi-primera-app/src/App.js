import logo from './logo.svg';
import './App.css';
import Evento from './componentes/Evento.js'
import EventoB from './componentes/EventoB.js'

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="MeetUp 05 - ¿Cuando escucho música de Bad Bunny?"
        image="evento2"
        dateLiteral="26 de Noviembre del 2022"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!<br/>
        Participa en este Evento Presencial de la comunidad Python La Paz<br/>
        ¿Cuánto conoces de Python?<br/>
        Aprende a trabajar en equipo resolviendo increíbles acertijos<br/>
        ¡Anímate a ser parte de esta actividad!<br/>
        "
      />
      
    </div>
  );
}

export default App;
