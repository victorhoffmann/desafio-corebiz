import logo from '../../assets/images/logo-svg.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import './style.css'

const Header = (props) => {

    return (
        <header>
            <div className="maxWidth">
                <nav>
                    <div className="menuHeader">
                        <MenuIcon />
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