import CampoFormulario from "../moleculas/CampoFormulario";
import CampoSelect from "../moleculas/CampoSelect";
import { useState } from "react";

function FormularioRetiro() {
    const [direccion, setDireccion] = useState("");
    const [tipo, setTipo] = useState("");
    const [peso, setPeso] = useState("");
    const [correo, setCorreo] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => { 
        e.preventDefault()

        const pesoNumero = Number(peso);

        if (direccion.trim() === ""){
            alert("El campo direccion no puede estar vacia")
            return;
        } else if (tipo === ""){
            alert("El campo tipo no puede estar vacio")
            return;
        } else if (peso.trim() === "" || !Number.isFinite(pesoNumero) || pesoNumero <= 0){
            alert("Ingresar un peso valido")
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingresa un correo válido");
            return;
        } else {
            alert("Solicitud ingresada correctamente")
        }
    }
    
    return (
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
                etiqueta="Direccion de retiro"
                tipo="text"
                nombre="direccion"
                valor={direccion}
                alCambiar={setDireccion}
            />

            <CampoSelect
                etiqueta="Tipo de material"
                nombre="tipo"
                valor={tipo}
                alCambiar={setTipo}
                opciones={[
                    { valor: "botellas", texto: "Botellas plásticas" },
                    { valor: "latas-vidrios", texto: "Latas y vidrios" },
                    { valor: "cartones-papeles", texto: "Cartones y papeles" }
                ]}
            />
            
            <CampoFormulario
                etiqueta="Peso"
                tipo="number"
                nombre="peso"
                valor={peso}
                alCambiar={setPeso}
            />

            <CampoFormulario
                etiqueta="Correo electronico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />

            <button type="submit" className="btn btn-primary w-100">
                Cotizar retiro
            </button>

        </form>
    )
}

export default FormularioRetiro;