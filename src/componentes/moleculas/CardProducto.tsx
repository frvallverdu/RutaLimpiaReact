import type { Producto } from '../../datos/productos';
import { Boton } from '../atomos/Boton';

interface CardProductoProps {
  producto: Producto;
}

export const CardProducto = ({ producto }: CardProductoProps) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text text-muted">{producto.categoria}</p>
        <div className="mt-auto">
          <Boton to={`/producto/${producto.id}`} texto="Ver detalle" />
        </div>
      </div>
    </div>
  );
};
