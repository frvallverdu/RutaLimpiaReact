import { useParams } from "react-router-dom";
import { productos } from "../datos/productos";
import { Boton } from "../componentes/atomos/Boton";

export const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return (
      <main className="container py-5 text-center">
        <div className="form-panel mx-auto" style={{ maxWidth: "620px" }}>
          <h1 className="h3 fw-bold">Producto no encontrado</h1>
          <p className="text-secondary mb-4">El producto no existe o ya no está disponible.</p>
          <Boton to="/productos" texto="Volver al catálogo" claseAdicional="btn-success" />
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4 py-md-5">
      <article className="detail-panel mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="row g-0 align-items-stretch">
          <div className="col-12 col-md-6 detail-image-wrap">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="img-fluid detail-image"
            />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="p-4 p-lg-5">
              <span className="badge rounded-pill text-bg-success mb-3">{producto.categoria}</span>
              <h1 className="h2 fw-bold mb-3">{producto.titulo}</h1>
              <p className="text-secondary mb-4">{producto.descripcion}</p>
              <Boton to="/productos" texto="Volver al catálogo" claseAdicional="btn-success" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
