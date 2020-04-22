import React from "react";
import "./roster-view.scss"
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserCard } from "../user-card/user-card";

export class RosterView extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className="roster">
        <Container fluid className="p-5 text-center" >
          <Card>
            <Card.Header className="header"><h3>Command Staff</h3></Card.Header>
            <Row noGutters={true} className="h-100">
              {users.map(u =>
                <Col xl={2} md={3}>
                  <UserCard key={u._id} u={u} />
                </Col>)}
            </Row>
          </Card>

          <Card className="mt-4">
            <Card.Header className="header border border-dark"><h3>Junior Ranks</h3></Card.Header>
            <Row noGutters={true} className="h-100">

            </Row>
          </Card>

          <Card className="mt-4">
            <Card.Header className="header"><h3>Recruits</h3></Card.Header>
            <Row noGutters={true} className="h-100">
            </Row>
          </Card>
        </Container >
      </div >
    );
  }
}

export default RosterView;