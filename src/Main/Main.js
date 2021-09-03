import main from '../images/main.png'
import './Main.css'

function Main () {
    return (
        <div className="main">
            <img className="mainImg" src={main} alt="main" />
        </div>
    );
}

export default Main;