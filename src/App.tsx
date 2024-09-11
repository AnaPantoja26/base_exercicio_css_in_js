import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Lista from './containers/ListaVagas'
import './global.css'

function App() {
  return (
    <>
      <Cabecalho />
      <Hero />
      <div className="container">
        <Lista />
      </div>
    </>
  )
}

export default App
