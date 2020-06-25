import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="transparent" onClick={toggle} style={{color: 'white' }}>. . .</Button>
      <Collapse isOpen={isOpen}>
        <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
          <CardBody>
            <div className="weather">
                          <p><img src={`https://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
                              alt="{props.response.Obj.weather[0].icon}"/></p>
                          <p>{props.responseObj.weather[0].description}</p>
            </div>
            <div className="details">
              <p>
                Feels like: {props.responseObj.main.feels_like}°F
              </p>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapsible;