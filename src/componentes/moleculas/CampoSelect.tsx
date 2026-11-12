import Select from "../atomos/Select";

type Opcion = {
  valor: string;
  texto: string;
};

type Props = {
  etiqueta: string;
  nombre: string;
  valor: string;
  opciones: Opcion[];
  alCambiar: (valor: string) => void;
};

function CampoSelect({ etiqueta, nombre, valor, opciones, alCambiar}: Props) {
  return (
    <div className="mb-3">
      <label htmlFor={nombre} className="form-label">
        {etiqueta}
      </label>

      <Select
        nombre={nombre}
        valor={valor}
        opciones={opciones}
        alCambiar={alCambiar}
      />
    </div>
  );
}

export default CampoSelect;