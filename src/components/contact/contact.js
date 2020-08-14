import React from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
    <Row>
        
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        
        <Col m={8} s={12}>
            <h5>Contact</h5>
            <Card>
                <div>
                    <p><b>E-mail: </b></p>
                    <p><b>majo.martins@gmail.com</b></p>
                    <p><b>Site: </b>https://www.majodeveloper.com.br</p>
                    <p><b>LinkedIn: </b>https://www.linkedin.com/in/majo-martins-66251b30</p>
                    <p><b>Instagram: </b>https://www.instagram.com/majo.martins</p>
                                  
                </div> 
            </Card>
            <Card>
                <Row>
                    <Input placeholder="email@luz.com" type="email" label="Email" s={12} />
                    <Input placeholder="Digite aqui a sua mensagem..." label="Message" s={12} />
                <Col s={12} m={12}>
                    <Button waves='light' className="riht grey darken-2">SEND</Button>
                </Col>    
                </Row>
            </Card>
        </Col>
    </Row>
);
export default Contact;