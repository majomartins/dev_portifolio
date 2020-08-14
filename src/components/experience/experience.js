import React from "react";
import { Row, Col, Card } from 'react-materialize';

const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
              <img src={props.avatar} className="square responsive-img" />
              { props.name }
            </Col>
            <Col s={10} s={10}>
                <p><b>{props.title} <br /> in <span className="grey darken-2 white-text">{props.company}</span></b></p>
                <p>{props.description}</p> 
                <p><b><span className="yellow black-text">{props.temp}</span></b></p>
            </Col>   
        </Row>
    </Card>
);



//na linha 8, o avatar refere se aos icones laranja e azul, ele já puxa os dois de uma vez, show
export default Experience;
