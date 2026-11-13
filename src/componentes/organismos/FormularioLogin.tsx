import CampoFormulario from "../moleculas/CampoFormulario";
import { useState } from "react";

function FormularioLogin() {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    

    if (correo.trim() === "") {
        alert("Debe ingresar su correo");
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("Ingrese un correo valido");
        return;
    }
    if (contrasena.trim() === "") {
        alert("Debe ingresar una contraseña");
        return;
    } else if (contrasena.length<8){
        alert("Debe ingresar una contraseña mayor a 8 caracteres")
        return;
    } else {
        alert("Datos ingresados correctamente");
    }
    };

    return (
        <form onSubmit={manejarEnvio} noValidate>

            <CampoFormulario
                etiqueta="Correo electronico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />

            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contrasena"
                valor={contrasena}
                alCambiar={setContrasena}
            />

            <button type="submit" className="btn btn-success w-100 mt-2">
                Iniciar sesión
            </button>
        </form>
    )
}

export default FormularioLogin;
