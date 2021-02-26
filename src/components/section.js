import Description from "./slideDesc.js";
import Slide from "./slide.js";
import Button from './button'
import { Container, Row, Col } from 'react-bootstrap';

function Section({ sinfo, bText, button }) {
    return(
        <section className="main__slide-show">
            <Container>
                <Row xs={1} lg={2} className="main__row">
                    <Col>
                        <Description descs={sinfo[0]}/>
                    </Col>
                    <Col> 
                        <Slide items={sinfo[1]}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section;