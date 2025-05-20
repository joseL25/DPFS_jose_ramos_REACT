import '../../App.css';
import logo from '../../assets/modelify.png'
import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='navbar'>
      <div className="title-dashboard">
        <ul className="list-title" >
          <li>
            <img src={reactLogo} alt="logo React" />
          </li>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <img src={viteLogo} alt="logo Vite" />
          </li>
        </ul>
      </div>
      <div className="link-options">
        <ul className="list-options">
          <li>
            <Link to="/catalog">Catalogo</Link>
          </li>
          <li>
            <Link to="/last-product">ultimo Producto</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

