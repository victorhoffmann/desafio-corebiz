import React, { useState} from 'react';
import axios from 'axios'
import './style.css'

const News = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [erros, setErros ] = useState({})
    const [refazer, setRefazer] = useState(false)
     
    const validate = (name, emailForm) => {
        const erros = {}
        
        if(name.length === 0) {
            erros.name = 'Preencha com seu nome completo'
        }

        if(emailForm === true) {
            erros.email = 'Preencha com um email válido'
        }
        return erros
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`https://corebiz-test.herokuapp.com/api/v1/newsletter`, {email, name})
            setRefazer(true)
        } catch (error) {
            if(error.response.data.message.includes('email')){
                let emailErro = true
                setErros(validate(name, emailErro))
            } else {
            setErros(validate(name,email))
            }}
    };

    const refaz = () => {
        setRefazer(false)
        setName("")
        setEmail("")
        setErros({})
    }

    return (
        <div id="news">
            {refazer === false ? 
                <>
                <h2>Participe de nossas news com promoções e novidades!</h2>
                <form>
                    <div className="formField">
                        <input
                            type="text"
                            id="name"
                            placeholder='Digite seu nome'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                        {erros.name && <span className='formError'>{erros.name}</span>}
                    </div>
                    <div className="formField">
                        <input
                            type="email"
                            id="inputemail"
                            placeholder='Digite seu email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        {erros.email && <span className='formError'>{erros.email}</span>}
                    </div>
                    <button className='btnNews' onClick={handleSubmit}>Eu quero!</button>
                </form>
                </>
                : 
                <div className="refazer">
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button className='btnRefazer' onClick={refaz}>Cadastrar novo e-mail</button>
                </div>
            }
        </div>
    )
}

export default News