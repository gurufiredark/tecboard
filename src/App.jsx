import './App.css'

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset className='form-campo'>
        <label>Qual o nome do evento</label>
        <input type="text" name="nome" />
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>

      <section>
        <img src="/banner.png" />
      </section>

      <FormularioDeEvento />
      
    </main>
  )
}

export default App
