import React from "react";
import Card from 'react-bootstrap/Card';

export class OperationsCard extends React.Component {
  render() {

    return (
      <Card className="m-1 infocard">
        <Card.Header className="infoheader"><h5>Op Title</h5></Card.Header>
        <Card.Body>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}