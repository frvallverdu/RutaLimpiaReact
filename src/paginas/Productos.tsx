import { productos } from '../datos/productos';
import { CardProducto } from '../componentes/moleculas/CardProducto';

export const Productos = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Catálogo de Productos</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map(producto => (
          <div className="col" key={producto.id}>
            <CardProducto producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};
