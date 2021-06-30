import Carousel from 'react-elastic-carousel';
import polygon from '../../assets/images/Polygon.png'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import './style.css'

const VitrineCarousel = (props) => {

    const { produtos, onAdd } = props
    const breakPoints = [
        { width: 1, itemsToShow: 1, showArrows: false },
        { width: 350, itemsToShow: 2, itemsToScroll: 1, showArrows: false},
        { width: 850, itemsToShow: 3 ,  pagination: false},
        { width: 1000, itemsToShow: 4, itemsToScroll: 2 ,  pagination: false},
        { width: 1450, itemsToShow: 5 ,  pagination: false },
        { width: 1750, itemsToShow: 6 ,  pagination: false},
    ]

    return (
        <div className="carouselProdutos">
            <div className="centerVitrine">
                <Carousel breakPoints={breakPoints}>
                    {produtos.map((produto, index) => (
                        <article className="carousel__card" key={index}>
                            <img src={produto.foto} alt={`Foto de ${produto.nome}`} />
                            {produto.antigoPreco === null ? '' :
                                <div className='desconto'>
                                    <img src={polygon} alt='Desconto' />
                                    <p>OFF</p>
                                </div>}
                            <div className="carousel__infosCard">
                                <p className='titleProduto'>{produto.nome}</p>
                                <p className='estrelas'>
                                    {[1, 2, 3, 4, 5].map((estrela, index) => {
                                        if (estrela <= produto.nota) {
                                            return <StarIcon />
                                        } else {
                                            return (
                                                <StarBorderIcon />
                                            )
                                        }
                                    })}
                                </p>
                                <p className='antigoProduto'>{produto.antigoPreco === null ? '' : `de R$${parseFloat(produto.antigoPreco / 100).toFixed(2)}`}</p>
                                <p className='precoProduto'>por R${produto.preco / 100}</p>
                                <p className='parcelamento'>{produto.parcela_vezes === 0 ? '' : `ou em ${produto.parcela_vezes}x de R${produto.parcela_valor / 100}`}</p>
                                <button onClick={onAdd}>Comprar</button>
                            </div>
                        </article>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default VitrineCarousel