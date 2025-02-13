import './navbar.css';

const Navbar = () => {
    return <header className ="navbar">
        <div className="name">Sandie Emonts</div>
        <div className="links">
            <ul>
                <li><a href="https://github.com/sandie75">Github</a></li>
                <li><a href="#portfolio">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>
}

export default Navbar;