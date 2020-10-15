import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { RosterCard } from "./roster-card";

export class RosterView extends React.Component {
  render() {
    const { users } = this.props;
    let admiral = users;
    let captain = users;
    let lieutenant = users;
    let ensign = users;
    let recruit = users;

    admiral = users.filter(u => u.Rank === "Admiral");
    captain = users.filter(u => u.Rank === "Captain");
    lieutenant = users.filter(u => u.Rank === "Lieutenant");
    ensign = users.filter(u => u.Rank === "Ensign");
    recruit = users.filter(u => u.Rank === "Recruit");

    return (
      <Container fluid className="pagecontainer text-center">
        <Card className="squared bb lb rb">
          <Card.Header className="header"><h3>Command Staff</h3></Card.Header>
          <Row noGutters={true} className="mx-1 mt-1">
            {admiral.map(u =>
              <Col xl={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
          <Row noGutters={true} className="mx-1 mb-1">
            {captain.map(u =>
              <Col xl={6} lg={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
        <Card className="squared bb lb rb">
          <Card.Header className="header"><h3>Senior Ranks</h3></Card.Header>
          <Row noGutters={true} className="m-1">
            {lieutenant.map(u =>
              <Col xl={3} lg={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
        <Card className="squared bb lb rb">
          <Card.Header className="header"><h3>Junior Ranks</h3></Card.Header>
          <Row noGutters={true} className="mx-1 mt-1">
            {ensign.map(u =>
              <Col xl={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
          <Row noGutters={true} className="mx-1 mb-1">
            {recruit.map(u =>
              <Col xl={4} md={6} sm={12} className="p-1">
                <RosterCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
      </Container>
    );
  }
}