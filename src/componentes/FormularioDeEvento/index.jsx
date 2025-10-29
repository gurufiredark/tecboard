import "./formulario-de-evento.estilos.css";

import TituloFormulario from "../TituloFormulario";
import CampoDeFormulario from "../CampoDeFormulario";
import CampoDeEntrada from "../CampoDeEntrada";
import Label from "../Label";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    console.log("Formulário submetido");

    const evento = {
      capa: formData.get("capa"),
      tema: temas.find((item) => item.id == formData.get("tema")),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..."
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}>
            Tema do evento
          </ListaSuspensa>
        </CampoDeFormulario>

        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  );
}
export default FormularioDeEvento;
