import FormularioLogin from "../componentes/organismos/FormularioLogin";

function Login() {
    return (
        <div className="container py-5">
            <div className="card shadow-sm p-4 p-md-5 rounded-4 border-0 mx-auto w-100"
                style={{ maxWidth: "420px" }}>

                <h1 className="text-center fw-bold mb-2">Iniciar sesión</h1>
                <p className="text-center text-secondary mb-4">Los Pistoleros</p>

                <FormularioLogin />
            </div>
        </div>
    )
}

export default Login;