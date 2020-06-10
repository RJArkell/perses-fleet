import React from "react";
import { Container, Card } from "react-bootstrap";
import { OperationsCard } from "./operations-card";

export class OperationsView extends React.Component {
  render() {
    const { operations, user } = this.props;
    return (
      <Container fluid className="pagecontainer">
        <Card className="pb-1">
          <Card.Header className="header text-center mb-1"><h3>Operations</h3></Card.Header>
          {operations.map(o => (
            <OperationsCard key={o._id} o={o} user={user} />
          ))}
        </Card>
      </Container>
    )
  }
}