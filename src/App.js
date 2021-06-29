import Header from './components/Header'
import Vitrine from './components/Vitrine'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

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
