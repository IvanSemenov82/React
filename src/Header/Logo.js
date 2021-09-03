import logo from '../images/logo.png';
import aupme from '../images/aup.me.png';
import './Logo.css'

function Logo () {
    return (
        <div className="logo">
            <a className="logoLink" href="localhost">
                <img className="logoImage" src={logo} alt="logo" />
                <img className="logoText" src={aupme} alt="aup.me" />
            </a>
        </div>
    );
}

export default Logo

