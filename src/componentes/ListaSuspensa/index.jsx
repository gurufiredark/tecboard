import "./lista-suspensa.estilos.css";

function ListaSuspensa({ itens, ...rest }) {
  return (
    <select {...rest} className="lista-suspensa-form" defaultValue="">
      <option value="" disabled>
        Selecione o tema
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.nome}>
          {item.nome}
        </option>
      ))}
    </select>
  );
}
export default ListaSuspensa;
