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
        {temas.map(function (item) {
          return (
            <section key={item.id}>
              <Tema tema={item} />
              <div className="eventos">
                {eventos.map(function (item, indice) {
                  return <CardEvento evento={item} key={indice} />;
                })}
              </div>
            </section>
          );
        })}
      </section>
      t
    </main>
  );
}

export default App;
