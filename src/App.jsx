import "./App.css";
import "./index.css";
import FormularioDeEvento from "./componentes/FormularioDeEvento";
import Tema from "./componentes/Tema";
import Banner from "./componentes/Banner";

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

  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>

      <FormularioDeEvento />
      <div>
        {temas.map((item) => (
          <section key={item.id}>
            <Tema tema={item} />
          </section>
        ))}
      </div>
    </main>
  );
}

export default App;
