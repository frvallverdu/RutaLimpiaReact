import FormularioLogin from "../componentes/organismos/FormularioLogin";

function Login() {
  return (
    <main className="container py-4 py-md-5">
      <section className="form-panel mx-auto w-100" style={{ maxWidth: "480px" }}>
        <p className="home-eyebrow text-center mb-2">Ruta Limpia</p>
        <h1 className="h2 text-center fw-bold mb-2">Iniciar sesión</h1>
        <p className="text-center text-secondary mb-4">Ingresa a tu cuenta</p>
        <FormularioLogin />
      </section>
    </main>
  );
}

export default Login;
