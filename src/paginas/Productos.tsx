import CardProducto from "../componentes/moleculas/CardProducto";
import productos from "../datos/productos";

function Productos() {
  return (
    <main className="container py-4">
      <h1 className="mb-2">Productos para reciclaje</h1>
      <p className="text-secondary mb-4">
        Encuentra contenedores, composteras y herramientas para gestionar tus residuos.
      </p>

      <div className="row g-4">
        {productos.map((producto) => (
          <div className="col-12 col-sm-6 col-lg-4" key={producto.id}>
            <CardProducto {...producto} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Productos;
