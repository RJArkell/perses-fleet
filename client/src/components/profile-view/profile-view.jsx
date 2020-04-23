import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;
    return (
      <Container className="profile" >
        <Card>
          <Card.Header className="header text-center"><h3>{u.Rank} {u.Username}</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Status:</p><br />
              <p>Commendations:</p><br />
              <p>Commission/Command:</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}