import { productos } from "../datos/productos";
import { CardProducto } from "../componentes/moleculas/CardProducto";

export const Productos = () => {
  return (
    <main className="container py-4 py-md-5">
      <header className="page-heading">
        <p className="home-eyebrow mb-2">Elige una alternativa sostenible</p>
        <h1 className="h2 fw-bold mb-2">Catálogo de productos</h1>
        <p>Artículos para reducir residuos y hacer más fácil el reciclaje en casa.</p>
      </header>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-lg-4 align-items-stretch">
        {productos.map((producto) => (
          <div className="col" key={producto.id}>
            <CardProducto producto={producto} />
          </div>
        ))}
      </div>
    </main>
  );
};
