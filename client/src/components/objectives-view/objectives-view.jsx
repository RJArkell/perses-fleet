import React from "react";
import { Container, Card } from "react-bootstrap";
import { ObjectivesCard } from "./objectives-card";

export class ObjectivesView extends React.Component {
  render() {
    const { objectives } = this.props;
    return (
      <Container fluid className="pagecontainer">
        <Card className="pb-1 squared bb lb rb">
          <Card.Header className="header text-center mb-1"><h3>Objectives</h3></Card.Header>
          {objectives.map(o => (
            <ObjectivesCard key={o._id} o={o} />
          ))}
        </Card>
      </Container>
    );
  }
}