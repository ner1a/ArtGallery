import {Link} from 'react-router-dom';

function Button(props) {

    return(
        <Link to={props.link} id={props.id} className="button text td-none">{(typeof(props.text)!="undefined" ? props.text:"Git")}</Link>
    );
}

export default Button;