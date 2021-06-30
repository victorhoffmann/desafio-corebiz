import React, { useState } from 'react'
import banner from '../../assets/images/banner.jpg'
import foto1 from '../../assets/images/foto1.jpg'
import foto2 from '../../assets/images/foto2.jpg'
import placeholder from '../../assets/images/placeholder.jpg'
import fundo from '../../assets/images/fundoPreto.png'
import './style.css'

const Aside = () => {

    const placeholders = [banner, foto1, foto2, placeholder]
    const [currImg, setCurrImg] = useState(0)

    const toggleDot = (index) => {
        if(currImg === index) {
            return "dot active"
         } else {
            return "dot"
         }
    }

    return (
        <div className="carousel_mao">
            <div className="carousel_mao-Inner">
                <div id="img1" style={{ backgroundImage: `url(${placeholders[currImg]})` }}></div>
                <div id="img2" style={{ backgroundImage: `url(${fundo})` }}></div>
                <div className='titleCarousel'>
                    <p>Olá, o que você está buscando?</p>
                    <p><span>Criar ou migrar seu e-commerce?</span></p>
                </div>
                <div className="center">
                    {placeholders.map((item, index) => {
                        return (
                            <span className={toggleDot(index)} onClick={() => { setCurrImg(index) }} key={index}></span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Aside