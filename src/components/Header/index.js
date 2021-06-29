import logo from '../../assets/images/logo-svg.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.css'

const Header = (props) => {

    return (
        <header>
            <nav>
                <div className="menuHeader">
                    <MenuIcon />
                </div>
                <div className="logoHeader">
                    <img src={logo} alt="Logo Corebiz" />
                    <input type="search" placeholder='O que está procurando?' id="" />
                </div>
                <div id="carrinho">
                    <ShoppingCartIcon />
                    <p>{props.quantidade}</p>
                </div>
            </nav>
            <div className="searchHeader">
                <input type="search" placeholder='O que está procurando?' id="" />
            </div>
        </header>
    )
}

export default Header