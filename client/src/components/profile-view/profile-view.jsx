import React from "react";
import { Container, Card } from "react-bootstrap";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;
    return (
      <Container className="profile" >
        <Card>
          <Card.Header className="header text-center"><h3>{u.Rank} {u.Username}</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              <p>STATUS:  </p>
              <p>COMMISSION:  </p>
              <p>COMMENDATIONS:  </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}