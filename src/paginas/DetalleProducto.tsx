import { Link, useParams } from "react-router-dom"
import productos from "../datos/productos"

function DetalleProducto() {
    // Obtenemos el id que viene de la URL
    const { id } = useParams()

    // Buscamos el producto que corresponde al id recibido
    const producto = productos.find((producto) => producto.id === Number(id))

    if (!producto) {
        return (
            <main className="container py-5">
                <h1>Producto no encontrado</h1>
                <p>Revisa el catálogo e inténtalo nuevamente.</p>

                <Link to="/productos" className="btn btn-primary mt-3">
                Volver al catálogo
                </Link>
            </main>
        )
    }

    return (
        <main className="container py-5">
            <Link to="/productos" className = "btn btn-outline-secondary mb-4">
            Volver al catálogo</Link>

            <h1>Detalle del producto</h1>

            <img
                src={producto.imagen}
                alt={producto.titulo}
                style={{ width: '300px', maxWidth: '100%', objectFit: 'contain' }}
            />

            <h2>{producto.titulo}</h2>

            <p>{producto.descripcion}</p>

            <p>${producto.precio.toLocaleString("es-CL")}</p>

        </main>
    )
}

export default DetalleProducto
