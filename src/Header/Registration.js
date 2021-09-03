// импортируем файл с данными
import regList from '../data/header.json'
import './Registration.css'

function Registration () {

    const listItem = regList.regList.map(item => <li key={item} className="regItem"><a href="localohost">{item}</a></li>);

    return (
        <div className="registration">
            <ul className="regMenu">
                {listItem}
          </ul>
        </div>
    );
}

export default Registration;
