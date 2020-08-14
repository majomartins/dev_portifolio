import React from "react";
import { Row, Col, Card } from 'react-materialize';
import majo from '../../images/majo.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={majo} alt="minha imagem" className="circle responsive-img" />
            </Col>
        </Row>
        <Row className="center-align">
            <h6><b>Maria José Martins</b></h6>
            <p className="grey darken-2 white-text"><b>Front-End</b></p>
        </Row>
    </Card>
);
//consegui alterar as configurações e colocar as minhas informações, show
export default UserProfile;