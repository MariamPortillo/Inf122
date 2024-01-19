import './App.css';
import Perfil from './components/Perfil'
import boton from './components/boton'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Registro from './components/Registro'
import Galeria from './components/Galeria'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/registro"element={<Registro/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/galeria" element={<Galeria/>}/>
          </Routes>
        </div>
      </Router>

    </div>
  );
}
export default App;
