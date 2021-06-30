import React, { useState, useEffect } from 'react'
import { dadosProdutos } from '../../service/api'
import VitrineCarousel from '../VitrineCarousel'
import './style.css'

const Vitrine = (props) => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const getData = async () => {
            setProdutos(await dadosProdutos())
        };
        getData();
    }, []);

    const { onAdd } = props
    return (
        <main>
            <div className="maxWidth">
                <div className="vitrine">
                    <h3>Mais Vendidos</h3>
                    <div id="linhaMain"></div>
                    <VitrineCarousel produtos={produtos} onAdd={onAdd} />
                </div>
            </div>
        </main>
    )
} 

export default Vitrine