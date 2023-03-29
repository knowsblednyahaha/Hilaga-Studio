import "../components/sass/Navbar.scss"

export default function Navbar() {
    return (
        <header className='navbar-container'>
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>
            <div className="menu-item">
                <span>HIRE US</span>
            </div>
        </header>
    )
}
