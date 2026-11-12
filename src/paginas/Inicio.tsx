import { Link } from "react-router-dom";

function Inicio() {

    return (
        <div className="container py-4 py-md-5 text-center">

            <h1 className="display-5 fw-bold">
                Inicio
            </h1>

            <p className="lead text-secondary">
                Bienvenido a nuestra tienda.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-sm-center gap-2 mt-4">
            <Link className="btn btn-success" to="/productos">
                Ver productos
            </Link>
            <Link className="btn btn-outline-success" to="/retiro">
                Cotizar retiro
            </Link>
            </div>
        </div>
    )
}

export default Inicio