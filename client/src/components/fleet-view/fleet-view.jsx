import React from "react";
import { Card, Container } from 'react-bootstrap';

export class FleetView extends React.Component {
  render() {
    return (
      <Container fluid className="pagecontainer text-center">
        <Card>
          <Card.Header className="header text-center"><h3>Fleet</h3></Card.Header>
          <Card.Body>
            <Card.Img className="patch" src={"https://i.ibb.co/sjtwHDb/terrorpatch.png"} />
          </Card.Body>
        </Card>
      </Container>
    )
  }
}