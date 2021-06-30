import Header from './components/Header'
import Aside from './components/Aside'
import Vitrine from './components/Vitrine'
import News from './components/News'
import Footer from './components/Footer'
import { useState } from 'react'
import { getCarrinho} from './helpers/session'

function App() {

  let atual = parseInt(getCarrinho)
  
  const [carrinho, setCarrinho ] = useState(atual)

  const onAdd = () => {
    setCarrinho(carrinho + 1)
    
    localStorage.setItem('carrinho', carrinho+1)
  }

  return (
    
    <>
      <Header quantidade={carrinho}/>
      <Aside />
      <Vitrine onAdd={onAdd}/>
      <News />
      <Footer />
    </>
  )
}

export default App;
