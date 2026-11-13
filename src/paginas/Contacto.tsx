import FormularioContacto from "../componentes/organismos/FormularioContacto";

function Contacto() {
  return (
    <main className="container py-4 py-md-5">
      <section className="form-panel mx-auto" style={{ maxWidth: "680px" }}>
        <p className="home-eyebrow mb-2">Estamos para ayudarte</p>
        <h1 className="h2 fw-bold mb-2">Contacto</h1>
        <p className="text-secondary mb-4">Déjanos tu mensaje y nos pondremos en contacto contigo.</p>
        <FormularioContacto />
      </section>
    </main>
  );
}

export default Contacto;
