import {DropdownButton} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function DropdownMenu({linklist,nav}) {
    const clsA = `navbar__link text td-none active ${nav}`
    const cls = `navbar__link text td-none ${nav}`
    const links = [];
    linklist.forEach(({title,link}, i) => {
        links.push(<NavLink exact to={link} className={cls} key={i}>{title}</NavLink>) 
    });
    const btnCls =`text ${nav}-btn`
    return(
        <DropdownButton className={btnCls} id="dropdown-button-drop-down" drop="down" title="MENÜ">
            {links}
        </DropdownButton>
    );
}

export default DropdownMenu;