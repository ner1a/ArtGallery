import Nav from "./nav.js"
import DropdownMenu from "./Dropdown.js"
import Logo from "./logo.js"
import {linklist} from "./../navLinks"
import { Container } from 'react-bootstrap';

function Header (){
  return <>
    <header className="header fixed" id="header">
      <Container>
        <div className="content">
          <Logo/>
          <Nav linklist={linklist} nav="h-nav"/>
          <DropdownMenu linklist={linklist} nav="h-d-nav"/>
        </div>
      </Container>
    </header>
  </>
}

export default Header;