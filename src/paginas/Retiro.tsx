import FormularioRetiro from "../componentes/organismos/FormularioRetiro";

function Retiro() {
  return (
    <main className="container py-4 py-md-5">
      <section className="form-panel mx-auto" style={{ maxWidth: "680px" }}>
        <p className="home-eyebrow text-center mb-2">Reciclaje en tu hogar</p>
        <h1 className="h2 text-center fw-bold mb-2">Cotizar retiro</h1>
        <p className="text-center text-secondary mb-4">Cuéntanos qué materiales necesitas retirar.</p>
        <FormularioRetiro />
      </section>
    </main>
  );
}

export default Retiro;
