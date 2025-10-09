import '../styles/Header.css'
import logo from '../assets/icons/logo.svg'

function Header() {
  
  return (
    <header>
      <img className="header-logo" src={logo} alt="Logo" />
      <h2 className="header-title">TODO App</h2>
    </header>
  )
}
export default Header;
