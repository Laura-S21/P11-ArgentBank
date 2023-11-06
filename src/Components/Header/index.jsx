import Logo from '../../assets/argentBankLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <NavLink to="/signin" className='main-nav-signin'>
                <p className="main-nav-item">
                <FontAwesomeIcon icon={faCircleUser} className='user-icon'/>
                Sign In
                </p>
            </NavLink>
            </nav>
        </>
    )
}

export default Header