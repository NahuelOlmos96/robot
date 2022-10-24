import "./estilos/informacion.css";
import "./estilos/carrucel.css";
import "./App.css";
import { Logo } from "./componentes/logo";
import { Informacion } from "./componentes/informacion";
import { Link, BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Carrucel } from "./componentes/carrucel";
import Contactos from "./componentes/contactos";
import { CarrucelVideos } from "./componentes/carrucelVideo";
import { Opiniones } from "./componentes/opiniones";



function App() {
  return (
    <div className="App container">
      <div >
        <HashRouter hashType="hasbang">
        
          <nav className="nav row">
            <Link className="nav-link col-xl-1 col-md" to="/">
              INICIO
            </Link>
            <Link className="nav-link col-xl-1 col-md" to="/servicio">
              SERVICIO
            </Link>  <Link className="nav-link col-xl-1 col-md" to="/contactos">
              CONTACTOS
            </Link><Link className="nav-link col-xl-1 col-md" to="/opiniones">
              OPINIONES
            </Link>
            </nav>
          
          <div className="contendorinformacion row">
            <div className="col-xl-6 col-md-12">
              <Routes>
                
                <Route path="/" element={<Logo />} />
                <Route path="/servicio" element={<Informacion />} />
                <Route path="/contactos" element={<Contactos />} />
                <Route path="/opiniones" element={<Opiniones />} />
              </Routes>
            </div>
            <div className="contendorCarrucel col-xl-6 col-md-12">
              <Carrucel />
            </div>
          </div>
       

        </HashRouter>
        
        <CarrucelVideos/>
        
        
      </div>
    </div>
  );
}

export default App;
