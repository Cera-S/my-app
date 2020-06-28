import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="transparent" onClick={toggle} style={{color: 'white' }}>. . .</Button>
      <Collapse isOpen={isOpen}>
        <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
          <CardBody>
                <Container>
                  <Row>
                    <Col md={{ span: 4, offset: 2 }}>
                <div className="weather">
                              <p><img src={`https://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
                                  alt="{props.response.Obj.weather[0].icon}"/></p>
                              <p>{props.responseObj.weather[0].description}</p>
                </div>
                </Col>
                <Col xs={6} md={4}>
                <div className="details">
                  <p> Feels like: {props.responseObj.main.feels_like}°F </p>
                  <p> High: {props.responseObj.main.temp_max}°F</p>
                  <p> Low: {props.responseObj.main.temp_min}°F</p>
                  <p> Humidity: {props.responseObj.main.humidity}°F </p>
                </div>
                </Col>
                </Row>
            </Container>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapsible;