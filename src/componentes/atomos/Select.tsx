type Opcion = {
  valor: string;
  texto: string;
};

type Props = {
  nombre: string;
  valor: string;
  opciones: Opcion[];
  alCambiar: (valor: string) => void;
};

function Select({ nombre, valor, opciones, alCambiar }: Props) {
  return (
    <select
      id={nombre}
      name={nombre}
      className="form-select"
      value={valor}
      onChange={(e) => alCambiar(e.target.value)}
    >
      <option value="">Selecciona un tipo</option>

      {opciones.map((opcion) => (
        <option key={opcion.valor} value={opcion.valor}>
          {opcion.texto}
        </option>
      ))}
    </select>
  );
}

export default Select;