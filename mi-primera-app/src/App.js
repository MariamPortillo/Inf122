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
        description={[
        "¡Hola Pythonista!"
        "Participa en este Evento Presencial de la comunidad Python La Paz"
        "¿Cuánto conoces de Python?"
        "Aprende a trabajar en equipo resolviendo increíbles acertijos"
        "Anímate a ser parte de esta actividad!"
        ]}
      />
         <EventoC title="MeetUp 11 - 3 Pitfalls de lña Ingenieria de Datos"
        image="evento2"
        dateLiteral="26 de Noviembre del 2022"
        placeLiteral="Online"
        description={[
        "¡Hola Pythonista!"
        "Participa en este Evento Presencial de la comunidad Python La Paz"
        "¿Cuánto conoces de Python?"
        "Aprende a trabajar en equipo resolviendo increíbles acertijos"
        "Anímate a ser parte de esta actividad!"
        ]}
      
    </div>
  );
}

export default App;
