import React from "react";
import { Container, Card } from "react-bootstrap";
import { OperationsCard } from "./operations-card";

export class OperationsView extends React.Component {
  render() {
    const { operations } = this.props;
    return (
      <Container fluid className="pagecontainer">
        <Card>
          <Card.Header className="header text-center"><h3>Operations</h3></Card.Header>
          {operations.map(o => (
            <OperationsCard key={o._id} o={o} />
          ))}
        </Card>
      </Container>
    )
  }
}