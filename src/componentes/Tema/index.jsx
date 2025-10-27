import "./tema.estilos.css";

function Tema({ tema }) {
  return (
    <div className="tema-card">
      <h3 className="titulo-tema">{tema.nome}</h3>
    </div>
  );
}
export default Tema;
