import Nav from "./nav.js"
import DropdownMenu from "./Dropdown.js"
import Logo from "./logo.js"
import Socials from "./socials"
import {linklist} from "./../navLinks"
import {socialLinks} from "./../socialLinks"
import { Container } from 'react-bootstrap';

function Footer() {
    return<>
        <footer className="footer">
            <Container>
                <div className="content">
                <Logo/>
                <Nav linklist={linklist} nav="f-nav"/>
                <DropdownMenu linklist={linklist} nav="f-d-nav"/>
                <Socials links={socialLinks}/>
                </div>
            </Container>
            <span className="created text">
            Created by <a href="https://www.linkedin.com/in/oguzhan-aydin-81893b17b/" 
            className="created__link text td-none">Oğuzhan AYDIN</a> on 2021</span>
        </footer>
    </>    
}

export default Footer;