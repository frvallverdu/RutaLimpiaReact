import { Link } from 'react-router-dom';

interface BotonProps {
  to: string;
  texto: string;
  claseAdicional?: string;
}

export const Boton = ({ to, texto, claseAdicional = 'btn-primary' }: BotonProps) => {
  return (
    <Link to={to} className={`btn ${claseAdicional}`}>
      {texto}
    </Link>
  );
};
