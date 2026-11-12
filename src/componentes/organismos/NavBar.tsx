import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand bg-dark">

            <div className="container-fluid px-4">

                <span className="navbar-brand text-white">
                    Mi tienda
                </span>

                <div className="navbar-nav">

                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/retiro">
                        Cotizar retiro
                    </Link>

                   <Link className="nav-link text-white" to="/login">
                        Login
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>

                </div>

            </div>

        </nav>
    )
}

export default NavBar