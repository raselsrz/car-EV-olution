import'./NavBar.css';

const NavBar = () => {
    return (
        <div className='nav'>
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            
        <li> <a href="#">Home</a> </li>
        <li><a href="#">Explore</a> </li>
        <li><a href="#">About</a> </li>
        <li className='nav-contact'> <a href="#">Contact</a> </li>
        
        </ul>
        </div>
    );
};

export default NavBar;