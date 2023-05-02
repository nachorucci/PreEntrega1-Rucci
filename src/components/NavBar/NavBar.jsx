import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className='logo'>
          <h2>Productos 100% nacionales</h2>
          <img className='imgArg' src={require("../../assets/img/arg.png")}  alt="" />
        </div>
        <ul className='categorias'>
            <li>Productos mas vendidos</li>
            <li>Productos de segunda mano</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
      </header>
    </div>
  )
}

export default NavBar
