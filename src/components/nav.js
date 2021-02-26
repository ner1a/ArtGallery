import {NavLink} from 'react-router-dom';

function Nav ({linklist,nav}) {
    const clsA = `navbar__link text td-none active ${nav}`
    const cls = `navbar__link text td-none ${nav}`
    const links = [];
    linklist.forEach(({title,link}, i) => {
        links.push(<NavLink exact to={link} className={cls} key={i}>{title}</NavLink>) 
    });
    return <>
        <nav className="navbar">
            {links}
        </nav>
    </>
}

export default Nav;