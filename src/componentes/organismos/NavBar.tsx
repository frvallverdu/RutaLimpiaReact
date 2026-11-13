import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark site-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={cerrarMenu}>
          Ruta Limpia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menu-principal"
          aria-expanded={menuAbierto}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          id="menu-principal"
          className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}
        >
          <div className="navbar-nav ms-auto gap-lg-2">
            <NavLink className="nav-link" to="/" onClick={cerrarMenu}>Inicio</NavLink>
            <NavLink className="nav-link" to="/productos" onClick={cerrarMenu}>Productos</NavLink>
            <NavLink className="nav-link" to="/retiro" onClick={cerrarMenu}>Cotizar retiro</NavLink>
            <NavLink className="nav-link" to="/contacto" onClick={cerrarMenu}>Contacto</NavLink>
            <NavLink className="nav-link" to="/login" onClick={cerrarMenu}>Iniciar sesión</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
