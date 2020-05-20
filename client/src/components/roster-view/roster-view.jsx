import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { RosterCard } from "./roster-card";

export class RosterView extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <Container fluid className="pagecontainer text-center">
        <Card>
          <Card.Header className="header"><h3>Roster</h3></Card.Header>
          <Row noGutters={true} className="h-100">
            {users.map(u =>
              <Col xl={3} lg={4} md={6} sm={12}>
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
      </Container>
    );
  }
}