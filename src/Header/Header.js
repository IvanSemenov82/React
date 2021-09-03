import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import Registration from './Registration';

function Header () {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Registration/>
        </div>
    );
}

export default Header