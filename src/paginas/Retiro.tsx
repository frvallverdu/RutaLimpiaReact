import FormularioRetiro from "../componentes/organismos/FormularioRetiro";

function Retiro() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "600px" }}>
        
        <h1 className="text-center mb-4">Cotizar retiro</h1>

        <FormularioRetiro />
      </div>
    </div>
  );
}

export default Retiro;