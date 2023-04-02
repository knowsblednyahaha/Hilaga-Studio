import "../components/sass/Navbar.scss"

export default function Navbar() {
    return (
        <header className='navbar-container'>
            <div className="logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="menu-item">
                <ul>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>
                    {/* <span>HIRE US</span> */}
                </ul>
                
            </div>
        </header>
    )
}
