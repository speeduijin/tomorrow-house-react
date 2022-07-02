import LogoImage from '../assets/images/Logo.svg'
import './Logo.scss'

function Logo() {
  return (
    <h1 className="Logo">
      <a href="/">
        <img src={LogoImage} alt="내일의 집" />
      </a>
    </h1>
  )
}

export default Logo
