import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;
    return (
      <Container className="profile text-center" >
        <Card>
          <Card.Header className="header text-center"><h1>{u.Rank} {u.Username}</h1></Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}