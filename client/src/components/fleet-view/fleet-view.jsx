import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export class FleetView extends React.Component {
  render() {
    return (
      <Container fluid className="pagecontainer text-center">
        <Card>
          <Card.Header className="header text-center"><h3>Fleet</h3></Card.Header>
          <Card.Body>
            <Card.Img className="patch" src={require("/img/terrorpatch.png")} />
          </Card.Body>
        </Card>
      </Container>
    )
  }
}