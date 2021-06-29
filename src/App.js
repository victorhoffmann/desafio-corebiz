import Header from './components/Header'
import Vitrine from './components/Vitrine'
import News from './components/News'
import Footer from './components/Footer'
import { useState } from 'react'
import { getCarrinho} from './helpers/session'

function App() {

  let valor = getCarrinho
  let atual = parseInt(valor)
  
  const [carrinho, setCarrinho ] = useState(atual)

  return (
    
    <>
      <Header quantidade={carrinho}/>

      <div className="Carousel">
        <h1>Carousel</h1>
      </div>

      <Vitrine />
      <News />
      <Footer />
    </>
  )
}

export default App;
