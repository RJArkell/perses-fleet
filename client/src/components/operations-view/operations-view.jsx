import React from "react";
import { Container, Card } from "react-bootstrap";
import { OperationsCard } from "./operations-card";

export class OperationsView extends React.Component {
  render() {
    return (
      <Container fluid className="p-5 text-center">
        <Card>
          <Card.Header className="header text-center"><h3>Operations</h3></Card.Header>
          <Card.Body>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}