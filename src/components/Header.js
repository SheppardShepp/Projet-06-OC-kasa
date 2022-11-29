import logo from '../assets/logo.svg'
import './Header.scss'

function Header() {
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='agence Kasa' className='lmj-logo' />
            <div>
                <a href=' '>Accueil</a>
                <a href=' '>A Propos</a>
            </div>
        </div>
    )
}

export default Header