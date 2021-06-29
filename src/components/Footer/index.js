import EmailIcon from '@material-ui/icons/Email';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import logo from '../../assets/images/logo-svg.svg'
import vtex from '../../assets/images/vtex.svg'
import './style.css'

const Footer = () => {
    return (
        <footer>
            <div className="localizacao">
                <h3>Localização</h3>
                <div id="linha"></div>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p>Alphavile SP </p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            <div className="btnContatos">
                <button><EmailIcon /> ENTRE EM CONTATO</button>
                <button><HeadsetMicIcon /> FALE COM O NOSSO CONSULTOR ONLINE</button>
            </div>
            <div className="logosFooter">
                <div id="created">
                    Created by
                    <img src={logo} alt="Logo Corebiz" />
                </div>
                <div id="powered">
                    Powered by
                    <img src={vtex} alt="Logo VTEX" />
                </div>
            </div>
        </footer>
    )
}

export default Footer