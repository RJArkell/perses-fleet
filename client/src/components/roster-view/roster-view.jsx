import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { RosterCard } from "./roster-card";

export class RosterView extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <Container fluid className="pagecontainer text-center">
        <Card className="mb-2">
          <Card.Header className="header"><h3>Command Staff</h3></Card.Header>
          <Row noGutters={true} className="m-1">
            {users.map(u =>
              <Col xl={3} lg={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
        <Card className="mb-2">
          <Card.Header className="header"><h3>Senior Ranks</h3></Card.Header>
          <Row noGutters={true} className="m-1">
            {users.map(u =>
              <Col xl={3} lg={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
        <Card>
          <Card.Header className="header"><h3>Junior Ranks</h3></Card.Header>
          <Row noGutters={true} className="m-1">
            {users.map(u =>
              <Col xl={3} lg={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
      </Container>
    );
  }
}