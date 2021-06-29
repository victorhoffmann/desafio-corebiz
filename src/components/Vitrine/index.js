import VitrineCarousel from '../VitrineCarousel'
import './style.css'

const Vitrine = (props) => {

    const { onAdd } = props
    return (
        <main>
            <h3>Mais Vendidos</h3>
            <div id="linhaMain"></div>
            <VitrineCarousel onAdd={onAdd} />
        </main>
    )
} 

export default Vitrine