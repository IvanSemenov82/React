// импортируем файл с данными
import menuList from '../data/header.json'

import '../Header/Menu.css'

function Menu () {

    const listItem = menuList.menuList.map(item => <li key={item} className="menuItem"><a href="localohost">{item}</a></li>);

    return(

        <div className="menu">
            <ul className="menuList">
                {listItem}
          </ul>
        </div>
    );
}

export default Menu;