
import React, {useState, useEffect } from 'react'
import { dadosProdutos } from '../../service/api'

import './style.css'

const VitrineCarousel = (props) => {

    const { onAdd } = props

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const getData = async () => {
            setProdutos(await dadosProdutos())
        };
        getData();
    }, []);


    return (
        <div className="carouselProdutos">
            <div className="center">
                {produtos.map((produto, index) => (
                    <article className="carousel__card" key={index}>
                        <img src={produto.foto} alt="" />
                        <div className="carousel__infosCard">
                            <p>{produto.nome}</p>
                            <p>{produto.nota}</p>
                            <p>{produto.antigoPreco === null ? null : `de R$${produto.antigoPreco / 100}`}</p>
                            <p>por R${produto.preco / 100}</p>
                            <p>ou em {produto.parcela_vezes}x de R${produto.parcela_valor / 100}</p>
                            <button onClick={onAdd}>Comprar</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default VitrineCarousel