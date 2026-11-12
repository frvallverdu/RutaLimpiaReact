import { Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Productos from './paginas/Productos'
import NavBar from './componentes/organismos/NavBar'
import DetalleProducto from './paginas/DetalleProducto'
import Contacto from './paginas/Contacto'
import Login from './paginas/Login'
import Retiro from "./paginas/Retiro";

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={<Inicio />}
        />

        <Route
          path='/productos'
          element={<Productos />}
        />

        <Route
          path='/producto/:id'
          element={<DetalleProducto />}
        />

        <Route
          path='/contacto'
          element={<Contacto />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route 
          path="/retiro" 
          element={<Retiro />} 
          />
        
      </Routes>
    </>
  )
}

export default App
