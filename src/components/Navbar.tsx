import { Link } from "react-router-dom"
import "../components/sass/Navbar.scss"

export default function Navbar() {
    return (
        <header className='navbar-container'>
            <div className="logo">
                <Link to={'/'}><img src="/logo.png" alt="logo" /></Link>
            </div>
            <div className="menu-item">
                <ul>
                    <li><Link to={'/about'} onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                    <li><Link to={'/work'} onClick={() => window.scrollTo(0, 0)}>Works</Link></li>
                    <li><Link to={'/contact'} onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                    {/* <span>HIRE US</span> */}
                </ul>
                
            </div>
        </header>
    )
}
