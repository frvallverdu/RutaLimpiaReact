import type { Producto } from "../../datos/productos";
import { Boton } from "../atomos/Boton";

type Props = {
    producto: Producto;
};

function CardProducto({ producto }: Props) {
    return (
        <div className="card h-100 product-card">
            <img
                src={producto.imagen}
                className="card-img-top imagen-producto"
                alt={producto.titulo}
            />

            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title titulo-producto">
                    {producto.titulo}
                </h5>

                <p className="card-text categoria-producto">
                    {producto.categoria}
                </p>

                <div className="mt-auto d-flex justify-content-center pt-3">
                    <Boton
                        to={`/producto/${producto.id}`}
                        texto="Ver detalle"
                        claseAdicional="btn-success"
                    />
                </div>
            </div>
        </div>
    );
}

export default CardProducto;