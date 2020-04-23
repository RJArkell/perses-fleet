import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserCard } from "../user-card/user-card";

export class RosterView extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <Container fluid className="p-5 text-center">
        <Card>
          <Card.Header className="header"><h3>Roster</h3></Card.Header>
          <Row noGutters={true} className="h-100">
            {users.map(u =>
              <Col xl={3} lg={4} md={6} sm={12}>
                <UserCard key={u._id} u={u} />
              </Col>)}
          </Row>
        </Card>
      </Container>
    );
  }
}