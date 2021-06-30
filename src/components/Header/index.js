import logo from '../../assets/images/logo-svg.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import './style.css'
import { useState } from 'react';

const Header = (props) => {

    const [ativo, setAtivo] = useState(false)

    const toggleMenu = () => {
        setAtivo(!ativo)
    };

    return (
        <header>
            <div className="maxWidth">
                <nav>
                    <div className="menuHeader">
                        <button onClick={toggleMenu}><MenuIcon /></button>
                    </div>
                    <div className="logoHeader">
                        <img src={logo} alt="Logo Corebiz" />
                        <div className="searchLogo">
                            <div className="buscaLogo">
                                <input type="search" placeholder='O que está procurando?'/>
                                <SearchIcon />
                            </div>
                            <div className="linhaLogo"></div>
                        </div>
                    </div>
                    <div id="carrinho">
                        <div className="user">
                            <PersonOutlineIcon />
                            <p>Minha conta</p>
                        </div>
                        <div className="cart">
                            <ShoppingCartIcon />
                            <p>{props.quantidade}</p>
                        </div>
                    </div>
                </nav>
            </div>
            {ativo ? 
                <div className="userToggle">
                    <PersonOutlineIcon />
                    <p>Minha conta</p>
                </div> :
                null }
            <div className="searchHeader">
                <div className="busca">
                    <input type="search" placeholder='O que está procurando?'/>
                    <SearchIcon />
                </div>
                <div className="linhaSearch"></div>
            </div>
        </header>
    )
}

export default Header