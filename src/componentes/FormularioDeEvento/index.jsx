import "./formulario-de-evento.estilos.css";

import TituloFormulario from "../TituloFormulario";
import CampoDeFormulario from "../CampoDeFormulario";
import CampoDeEntrada from "../CampoDeEntrada";
import Label from "../Label";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
            music="rock"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa>Tema do evento</ListaSuspensa>
        </CampoDeFormulario>

        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  );
}
export default FormularioDeEvento;
