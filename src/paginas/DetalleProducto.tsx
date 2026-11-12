import { useParams } from 'react-router-dom';
import { productos } from '../datos/productos';
import { Boton } from '../componentes/atomos/Boton';

export const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();

  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return (
      <div className="container my-5 text-center">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe o ha sido eliminado.</p>
        <Boton to="/productos" texto="Volver al catálogo" claseAdicional="btn-danger" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={producto.imagen} alt={producto.titulo} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{producto.titulo}</h2>
          <h5 className="text-muted">{producto.categoria}</h5>
          <p className="mt-4">{producto.descripcion}</p>
          <div className="mt-4">
            <Boton to="/productos" texto="Volver al catálogo" claseAdicional="btn-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
