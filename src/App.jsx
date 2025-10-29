import "./App.css";
import "./index.css";
import { useState } from "react";

import FormularioDeEvento from "./componentes/FormularioDeEvento";
import Tema from "./componentes/Tema";
import Banner from "./componentes/Banner";
import CardEvento from "./componentes/CardEvento";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  // capa do evento 1 ao 15: https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map((tema) => {
          // Verifica se existe algum evento associado a este tema
          if (!eventos.some((evento) => evento.tema.id === tema.id)) {
            return null;
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  // Filtra os eventos para incluir apenas os do tema atual
                  .filter((evento) => evento.tema.id === tema.id)
                  // Mapeia e renderiza os componentes CardEvento
                  .map((evento, indice) => (
                    <CardEvento evento={evento} key={indice} />
                  ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
