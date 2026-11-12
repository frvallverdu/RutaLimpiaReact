import Boton from "../atomos/Boton";

interface CardProps {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

function CardProducto({ id, titulo, descripcion, precio, imagen }: CardProps){
    return(
        <div className="card h-100">

            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{ height: '200px', objectFit: 'contain'}}
            />
            {/*con este className del div organizamos el contenido de forma vertical */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    {titulo}
                </h5>

                <p className="card-text">
                    {descripcion}
                </p>

                <p className="card-text fw-bold">
                    ${precio.toLocaleString("es-CL")}
                </p>

                {/*y con este div hacemos que el boton baje de igual manera para todos */}
                <div className="mt-auto">
                    <Boton id={id} />
                </div>
            </div>

        </div>
    )
}

export default CardProducto
